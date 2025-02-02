use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::{postgres::PgArguments, query::QueryAs, Executor, Postgres};

use crate::{
    auth::{AuthModel, AuthScope, User, Verb},
    error::Error,
};

use super::{Asset, ContactType, NextPageToken};

#[derive(sqlx::Type, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[sqlx(rename_all = "snake_case")]
#[sqlx(type_name = "account_status")]
pub enum AccountStatus {
    Pending,
    Open,
    PendingClosure,
    Closed,
}

impl Default for AccountStatus {
    fn default() -> Self {
        AccountStatus::Pending
    }
}

#[derive(sqlx::FromRow, Debug, Default, Clone, PartialEq, Serialize, Deserialize)]
pub struct Account {
    pub id: i64,

    pub status: AccountStatus,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub bank_reference: Option<serde_json::Value>,

    pub tenant: String,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_at: Option<DateTime<Utc>>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<DateTime<Utc>>,
}

impl From<&Account> for NextPageToken<i64> {
    fn from(value: &Account) -> NextPageToken<i64> {
        let Account { id, .. } = value;
        NextPageToken { id: *id }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Serialize, Deserialize)]
pub struct CreateAccountRequest {
    pub tenant: String,

    pub contact: serde_json::Value,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub contact_type: Option<ContactType>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub assets: Option<Vec<String>>,
}

impl From<CreateAccountRequest> for Account {
    fn from(value: CreateAccountRequest) -> Self {
        let CreateAccountRequest { tenant, .. } = value;
        Self {
            tenant,
            ..Default::default()
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Serialize, Deserialize)]
pub struct AmountRequest {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub currency: Option<String>,

    pub amount_in_cents: u64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PaymentQuery {
    #[serde(default = "default_include_child_accounts")]
    pub include_child_accounts: bool,
}

const fn default_include_child_accounts() -> bool {
    false
}

impl Account {
    pub async fn insert(
        &mut self,
        txn: impl Executor<'_, Database = Postgres>,
    ) -> Result<(), Error> {
        let query = sqlx::query_as(
            "INSERT INTO accounts (
                bank_reference,
                tenant
            ) VALUES ($1, $2)
            RETURNING *",
        )
        .bind(&self.bank_reference)
        .bind(&self.tenant);
        let account: Self = query.fetch_one(txn).await?;
        *self = account;
        Ok(())
    }

    pub async fn update_bank_reference(
        &mut self,
        txn: impl Executor<'_, Database = Postgres>,
    ) -> Result<(), Error> {
        let query = sqlx::query_as(
            "UPDATE accounts
            SET bank_reference = $1,
                updated_at = $2
            WHERE id = $3 AND NOT status = 'closed'
            RETURNING *",
        )
        .bind(&self.bank_reference)
        .bind(Utc::now())
        .bind(self.id);
        let contact: Self = query.fetch_one(txn).await?;
        *self = contact;
        Ok(())
    }

    pub async fn update_status(
        &mut self,
        txn: impl Executor<'_, Database = Postgres>,
    ) -> Result<(), Error> {
        let query = sqlx::query_as(
            "UPDATE accounts
            SET status = $1,
                updated_at = $2
            WHERE id = $3 AND NOT status = 'closed'
            RETURNING *",
        )
        .bind(&self.status)
        .bind(Utc::now())
        .bind(self.id);
        let contact: Self = query.fetch_one(txn).await?;
        *self = contact;
        Ok(())
    }

    pub fn find_by_id_scoped(
        id: i64,
        scope: AuthScope,
    ) -> Result<QueryAs<'static, Postgres, Self, PgArguments>, Error> {
        match scope {
            AuthScope::Own(u) => Ok(sqlx::query_as(
                "SELECT * FROM accounts a
                WHERE id = $1 AND
                    EXISTS (
                        SELECT
                            1
                        FROM
                            contacts c
                        WHERE
                            a.id = c.account_id AND c.user_id = $2
                    )",
            )
            .bind(id)
            .bind(u)),
            AuthScope::Tenant(tenant) => Ok(sqlx::query_as(
                "SELECT * FROM accounts WHERE id = $1 AND tenant = $2",
            )
            .bind(id)
            .bind(tenant)),
            _ => Err(Error::unauthorized()),
        }
    }

    pub fn find_for_contact_scoped(
        contact_id: i64,
        scope: AuthScope,
    ) -> Result<QueryAs<'static, Postgres, Self, PgArguments>, Error> {
        match scope {
            AuthScope::Own(u) => Ok(sqlx::query_as(
                "SELECT a.* FROM accounts a, contacts c
                WHERE c.id = $1 AND a.id = c.account_id AND c.user_id = $2",
            )
            .bind(contact_id)
            .bind(u)),
            AuthScope::Tenant(tenant) => Ok(sqlx::query_as(
                "SELECT a.* FROM accounts, contacts c
                WHERE c.id = $1 AND a.id = c.account_id AND tenant = $2",
            )
            .bind(contact_id)
            .bind(tenant)),
            _ => Err(Error::unauthorized()),
        }
    }

    pub async fn list_page_own(
        limit: i32,
        last_token: Option<NextPageToken<i64>>,
        user_id: &str,
        executor: impl Executor<'_, Database = Postgres>,
    ) -> Result<Vec<Self>, Error> {
        let mut query_str: String = "SELECT * FROM accounts a
            WHERE
                EXISTS (
                    SELECT
                        1
                    FROM
                        contacts c
                    WHERE
                        a.id = c.account_id AND c.user_id = $1
                )"
        .to_string();
        let query = if let Some(NextPageToken { id, .. }) = last_token {
            query_str += " AND id < $3 ORDER BY id DESC LIMIT $2";
            sqlx::query_as(&query_str)
                .bind(user_id)
                .bind(limit)
                .bind(id)
        } else {
            query_str += " ORDER BY id DESC LIMIT $2";
            sqlx::query_as(&query_str).bind(user_id).bind(limit)
        };
        Ok(query.fetch_all(executor).await?)
    }

    pub async fn list_page_by_tenant(
        limit: i32,
        last_token: Option<NextPageToken<i64>>,
        tenant: &str,
        executor: impl Executor<'_, Database = Postgres>,
    ) -> Result<Vec<Self>, Error> {
        let mut query_str: String = "SELECT * FROM accounts
            WHERE tenant = $1"
            .to_string();
        let query = if let Some(NextPageToken { id, .. }) = last_token {
            query_str += " AND id < $3 ORDER BY id DESC LIMIT $2";
            sqlx::query_as(&query_str).bind(tenant).bind(limit).bind(id)
        } else {
            query_str += " ORDER BY id DESC LIMIT $2";
            sqlx::query_as(&query_str).bind(tenant).bind(limit)
        };
        Ok(query.fetch_all(executor).await?)
    }

    pub fn get_asset(id: i64, instrument: &str) -> QueryAs<'_, Postgres, Asset, PgArguments> {
        sqlx::query_as(
            "SELECT *
                 FROM assets
                 WHERE
                   linked_account = $1 AND
                   instrument = $2",
        )
        .bind(id)
        .bind(instrument)
    }

    pub fn get_assets(id: i64) -> QueryAs<'static, Postgres, Asset, PgArguments> {
        sqlx::query_as(
            "SELECT *
            FROM assets
            WHERE
              linked_account = $1",
        )
        .bind(id)
    }

    pub fn get_notification_preferences_scoped(
        id: i64,
        scope: AuthScope,
    ) -> Result<QueryAs<'static, Postgres, super::NotificationPreferences, PgArguments>, Error>
    {
        match scope {
            AuthScope::Own(u) => Ok(sqlx::query_as(
                "SELECT n.* FROM accounts, contacts c, notification_preferences n
                WHERE c.id = $1 AND id = c.account_id 
                    AND c.user_id = $2 AND n.contacts_id = c.id",
            )
            .bind(id)
            .bind(u)),
            AuthScope::Tenant(tenant) => Ok(sqlx::query_as(
                "SELECT n.* FROM accounts, contacts c, notification_preferences n
                WHERE c.id = $1 AND id = c.account_id 
                    AND tenant = $2 AND n.contacts_id = c.id",
            )
            .bind(id)
            .bind(tenant)),
            _ => Err(Error::unauthorized()),
        }
    }

    pub async fn delete(
        id: i64,
        tenant: &str,
        txn: impl Executor<'_, Database = Postgres>,
    ) -> Result<Option<Self>, Error> {
        sqlx::query_as(
            "DELETE FROM accounts a 
            WHERE id = $1 AND tenant = $2
            RETURNING *",
        )
        .bind(id)
        .bind(tenant)
        .fetch_optional(txn)
        .await
        .map_err(Error::from)
    }
}

pub struct AccountAuth;

impl AuthModel for AccountAuth {
    fn is_authorized(&self, verb: Verb, user: &User) -> Result<(), Error> {
        user.authorize(&"accounts".into(), verb).map(|_| ())
    }

    fn auth_scope(&self, verb: Verb, user: &User) -> AuthScope {
        user.query_scope(&"accounts".into(), verb)
    }
}
