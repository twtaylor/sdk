use m10_bank_emulator::models::*;
use serde_json::json;
use serde_json::Value;

use super::base_url;
use super::utils::*;

#[tokio::test]
async fn accounts_wire_routes() {
    let jwt = create_or_get_user("iron-user-test-wire@m10test.io").await;
    let client = reqwest::Client::default();
    delete_contact(&client, &jwt).await;
    delete_account(&client, &jwt).await;

    let req = CreateAccountRequest {
        tenant: "m10-test".into(),
        contact: serde_json::to_value(json!({
            "name": "default",
            "email": "iron-user-test-wire@m10test.io",
        }))
        .unwrap(),
        contact_type: Some(ContactType::Individual),
        assets: Some(vec!["usd".into()]),
    };

    // create account
    println!("create account for wire");
    let account = client
        .post(format!("{}/api/v1/accounts", base_url()))
        .bearer_auth(&jwt)
        .json(&req)
        .send()
        .await
        .unwrap()
        .assert_json::<Account>()
        .await;

    // open
    println!("open account for wire");
    client
        .post(format!(
            "{}/api/v1/accounts/{}/sandbox/open",
            base_url(),
            account.id
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("open account response")
        .assert_success()
        .await;

    // fund
    println!("fund account for wire");
    client
        .post(format!(
            "{}/api/v1/accounts/{}/sandbox/fund",
            base_url(),
            account.id
        ))
        .bearer_auth(&jwt)
        .json(&AmountRequest {
            amount_in_cents: 50000,
            currency: Some("usd".into()),
        })
        .send()
        .await
        .expect("fund account response")
        .assert_success()
        .await;

    // deposit
    let txn = client
        .post(format!(
            "{}/api/v1/accounts/{}/deposit",
            base_url(),
            account.id
        ))
        .bearer_auth(&jwt)
        .json(&AmountRequest {
            currency: None,
            amount_in_cents: 700,
        })
        .send()
        .await
        .unwrap()
        .assert_json::<Value>()
        .await;

    let txn_id = txn.get("bank_tx").and_then(|i| i.as_str()).expect("txn id");

    // settle deposit
    client
        .post(format!(
            "{}/api/v1/accounts/{}/sandbox/settle_deposit/{}",
            base_url(),
            account.id,
            txn_id,
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("settle deposit response")
        .assert_success()
        .await;

    // withdraw
    let txn = client
        .post(format!(
            "{}/api/v1/accounts/{}/withdraw",
            base_url(),
            account.id
        ))
        .bearer_auth(&jwt)
        .json(&AmountRequest {
            currency: None,
            amount_in_cents: 500,
        })
        .send()
        .await
        .unwrap()
        .assert_json::<Value>()
        .await;

    let txn_id = txn.get("bank_tx").and_then(|i| i.as_str()).expect("txn id");

    // settle withdraw
    client
        .post(format!(
            "{}/api/v1/accounts/{}/sandbox/settle_withdraw/{}",
            base_url(),
            account.id,
            txn_id,
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("settle withdraw response")
        .assert_success()
        .await;
}

#[tokio::test]
async fn user_unauthorized_accounts_assets_routes() {
    let jwt = default_user_jwt().await;
    let client = reqwest::Client::default();

    // freeze asset
    println!("freeze asset");
    client
        .post(format!(
            "{}/api/v1/accounts/11/assets/usd/freeze",
            base_url()
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("freeze asset response")
        .assert_status(401)
        .await;

    // list payments
    println!("list payments");
    client
        .get(format!(
            "{}/api/v1/accounts/11/assets/usd/payments",
            base_url()
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("list payments response")
        .assert_status(401)
        .await;

    // get payment
    println!("get payment");
    client
        .get(format!(
            "{}/api/v1/accounts/11/assets/usd/payments/3241",
            base_url()
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("get payments response")
        .assert_status(401)
        .await;

    // unfreeze asset
    println!("unfreeze asset");
    client
        .post(format!(
            "{}/api/v1/accounts/11/assets/usd/unfreeze",
            base_url()
        ))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("unfreeze asset response")
        .assert_status(401)
        .await;
}

#[tokio::test]
async fn accounts_sandbox_routes() {
    let jwt = prepopulated_user_jwt().await;
    let client = reqwest::Client::default();

    // fund
    client
        .post(format!("{}/api/v1/accounts/19/sandbox/fund", base_url()))
        .bearer_auth(&jwt)
        .json(&AmountRequest {
            amount_in_cents: 500,
            currency: None,
        })
        .send()
        .await
        .expect("fund account response")
        .assert_success()
        .await;

    // open
    client
        .post(format!("{}/api/v1/accounts/19/sandbox/open", base_url()))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("open account response")
        .assert_success()
        .await;
}

#[tokio::test]
async fn accounts_crud() {
    let jwt = create_or_get_user("iron-user-with-account@m10test.io").await;
    let client = reqwest::Client::default();
    delete_contact(&client, &jwt).await;
    delete_account(&client, &jwt).await;

    let req = CreateAccountRequest {
        tenant: "m10-test".into(),
        contact: serde_json::to_value(json!({
            "name": "default",
            "email": "iron-user-with-account@m10test.io",
        }))
        .unwrap(),
        contact_type: Some(ContactType::Individual),
        ..Default::default()
    };

    // create account
    println!("create account");
    let account = client
        .post(format!("{}/api/v1/accounts", base_url()))
        .bearer_auth(&jwt)
        .json(&req)
        .send()
        .await
        .unwrap()
        .assert_json::<Account>()
        .await;

    // get account by id
    let a = client
        .get(format!("{}/api/v1/accounts/{}", base_url(), account.id))
        .bearer_auth(&jwt)
        .send()
        .await
        .unwrap()
        .assert_json::<Account>()
        .await;
    assert_eq!(a.id, account.id, "get account by id");

    // get own account directly
    let resp = client
        .get(format!("{}/api/v1/accounts", base_url()))
        .bearer_auth(&jwt)
        .send()
        .await
        .unwrap()
        .assert_json::<ListResponse<i32, Account>>()
        .await;
    assert_eq!(resp.data.len(), 1, "get own account directly");
    assert_eq!(resp.data[0].id, account.id, "get own account directly");

    // delete account by id not allowed
    println!("delete account by id not allowed");
    client
        .delete(format!("{}/api/v1/accounts/{}", base_url(), account.id))
        .bearer_auth(&jwt)
        .send()
        .await
        .expect("delete account response")
        .assert_status(401)
        .await;
}

#[tokio::test]
async fn accounts_pagination() {
    let admin_jwt = admin_jwt().await;
    let client = reqwest::Client::default();
    let mut pages = 0;
    let mut resp = client
        .get(format!("{}/api/v1/accounts?limit=5", base_url()))
        .bearer_auth(&admin_jwt)
        .send()
        .await
        .unwrap()
        .assert_json::<ListResponse<i32, Account>>()
        .await;
    println!("items returned: {}", resp.data.len());
    println!("- first: {:?}", resp.data.first());
    println!("- last: {:?}", resp.data.last());
    while let Some(next) = resp.next {
        println!("Next: {:?}", next);
        resp = client
            .get(format!(
                "{}/api/v1/accounts?limit=5&id={}",
                base_url(),
                next.id,
            ))
            .bearer_auth(&admin_jwt)
            .send()
            .await
            .unwrap()
            .assert_json::<ListResponse<i32, Account>>()
            .await;
        println!("items returned: {}", resp.data.len());
        println!("- first: {:?}", resp.data.first());
        println!("- last: {:?}", resp.data.last());
        pages += 1;
        if pages >= 5 {
            break;
        }
    }
    // Expect at least 3 full pages
    assert!(pages >= 3, "too less pages")
}

#[tokio::test]
async fn accounts_assets_routes() {
    let jwt = admin_jwt().await;
    let client = reqwest::Client::default();

    // list assets
    let resp = client
        .get(format!("{}/api/v1/accounts/11/assets", base_url()))
        .bearer_auth(&jwt)
        .send()
        .await
        .unwrap()
        .assert_json::<ListResponse<i32, Asset>>()
        .await;
    assert_eq!(resp.data.len(), 2);

    // get asset
    let asset = client
        .get(format!("{}/api/v1/accounts/11/assets/usd", base_url()))
        .bearer_auth(&jwt)
        .send()
        .await
        .unwrap()
        .assert_json::<Asset>()
        .await;
    assert_eq!(
        asset.ledger_account_id,
        hex::decode("0280000100000e000000000000000003").unwrap()
    );
}
