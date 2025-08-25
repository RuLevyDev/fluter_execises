import 'dart:async';

/// Empareja valores por índice de `stream1` y `stream2`,
/// aplicando `combiner` a cada par.
/// Se detiene al emitir `limit` items o cuando un stream termina.
/// Si `limit < 1`, emite un error String.
Stream<C> combineLatest2WithLimit<A, B, C>(
  Stream<A> stream1,
  Stream<B> stream2, {
  required C Function(A, B) combiner,
  required int limit,
}) async* {
  if (limit < 1) {
    // Caso inválido: se devuelve un Stream en error con el mensaje exacto esperado
    yield* Stream<C>.error('Limit must be greater than 0');
    return;
  }

  final it1 = StreamIterator<A>(stream1); // Iterador sobre stream1
  final it2 = StreamIterator<B>(stream2); // Iterador sobre stream2

  var emitted = 0; // Contador de emisiones

  try {
    while (emitted < limit) {
      final has1 = await it1.moveNext(); // Avanza en stream1
      final has2 = await it2.moveNext(); // Avanza en stream2
      if (!has1 || !has2) break; // Se detiene si uno termina

      yield combiner(it1.current, it2.current); // Combina y emite
      emitted++;
    }
  } finally {
    // Liberar recursos siempre
    await it1.cancel();
    await it2.cancel();
  }
}
