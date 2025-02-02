import 'dart:math';
import 'package:test/test.dart';
import 'package:uuid/uuid.dart';
import 'utilities/utility.dart';
import 'package:convert/convert.dart';

void main() {
  group('Transactions', () {
    test('it should list by context', () async {
      final contextId = hex.encode(Uuid().v4().codeUnits);
      final ids = await submitContextTxs(contextId);
      final txs = await bankAdmin.listTransactions(
          instrument: instrument, contextId: contextId);
      expect(txs.length, 3);
      expect(txs[0].txId, ids[2]);
      expect(txs[0].transfer != null, true);
      expect(txs[1].txId, ids[1]);
      expect(txs[1].transfer != null, true);
      expect(txs[2].txId, ids[0]);
      expect(txs[2].action != null, true);
    });

    test('it should group by context', () async {
      final entries = await Future.wait(Iterable.generate(3, (index) async {
        final contextId = hex.encode(Uuid().v4().codeUnits);
        final ids = await submitContextTxs(contextId);
        return MapEntry(contextId, ids);
      }));
      Map<String, List<int>> groups = Map.fromEntries(entries);

      int firstId = groups.values.map((l) => l.first).reduce(min);

      final groupedTxs = await bankAdmin.groupTransactions(
          instrument: instrument,
          accountId: parentAccountId,
          limitGroups: 3,
          minTxId: firstId);
      expect(groupedTxs.length, 3);
      groupedTxs.forEach((groupTx) {
        expect(groupTx.length, 3);
        String contextId = hex.encode(groupTx[0].contextId!);
        List<int> ids = groups[contextId]!;
        expect(groupTx.length, 3);
        expect(groupTx[0].txId, ids[2]);
        expect(groupTx[0].transfer != null, true);
        expect(groupTx[1].txId, ids[1]);
        expect(groupTx[1].transfer != null, true);
        expect(groupTx[2].txId, ids[0]);
        expect(groupTx[2].action != null, true);
      });
    });
  });
}

Future<List<int>> submitContextTxs(String contextId) async {
  final first = await bankAdmin.invokeAction(
      name: "test.context",
      fromAccountId: parentAccountId,
      targetAccountId: bobsAccountId,
      payload: "context".codeUnits,
      instrument: instrument,
      contextId: contextId);
  expect(first.txId > 0, true);

  final second = await bankAdmin.createTransfer(
      fromAccountId: parentAccountId,
      toAccountId: bobsAccountId,
      amount: 100,
      memo: "Funds",
      instrument: instrument,
      contextId: contextId);

  expect(second.txId > 0, true);

  final third = await bankAdmin.createTransfer(
      fromAccountId: parentAccountId,
      toAccountId: bobsAccountId,
      amount: 100,
      memo: "Funds",
      instrument: instrument,
      contextId: contextId);

  expect(third.txId > 0, true);
  return [first.txId, second.txId, third.txId];
}
