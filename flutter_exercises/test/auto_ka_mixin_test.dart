import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_exercises/auto_ka_mixin.dart';

void main() {
  test('CounterPage keeps state alive', () {
    final state = CounterPage().createState();
    final keepAlive = state as AutomaticKeepAliveClientMixin;
    expect(keepAlive.wantKeepAlive, isTrue);
  });

  testWidgets('counter increments on tap', (tester) async {
    await tester.pumpWidget(MaterialApp(home: CounterPage()));
    expect(find.text('Counter: 0'), findsOneWidget);
    await tester.tap(find.byType(ElevatedButton));
    await tester.pump();
    expect(find.text('Counter: 1'), findsOneWidget);
  });
}
