import 'dart:async';
import 'package:flutter_test/flutter_test.dart';

import 'package:flutter_exercises/problem1.dart';

void main() {
  group('combineLatest2WithLimit', () {
    test('combines two streams up to limit', () async {
      final stream1 = Stream.fromIterable([1, 2, 3]);
      final stream2 = Stream.fromIterable([4, 5, 6]);
      final result = await combineLatest2WithLimit<int, int, int>(
        stream1,
        stream2,
        combiner: (a, b) => a + b,
        limit: 2,
      ).toList();
      expect(result, [5, 7]);
    });

    test('stops when one stream ends', () async {
      final stream1 = Stream.fromIterable([1]);
      final stream2 = Stream.fromIterable([4, 5]);
      final result = await combineLatest2WithLimit<int, int, int>(
        stream1,
        stream2,
        combiner: (a, b) => a * b,
        limit: 5,
      ).toList();
      expect(result, [4]);
    });

    test('errors when limit < 1', () async {
      final stream1 = Stream.fromIterable([1, 2]);
      final stream2 = Stream.fromIterable([3, 4]);
      expect(
        combineLatest2WithLimit<int, int, int>(
          stream1,
          stream2,
          combiner: (a, b) => a + b,
          limit: 0,
        ).toList(),
        throwsA(equals('Limit must be greater than 0')),
      );
    });
  });
}
