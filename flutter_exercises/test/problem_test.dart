import 'dart:convert';
import 'package:flutter_test/flutter_test.dart';

// ignore: depend_on_referenced_packages
import 'package:shelf/shelf.dart';
import 'package:flutter_exercises/problem.dart';

void main() {
  setUpAll(bootstrapRouter);

  test('GET /users returns all users', () async {
    final request = Request('GET', Uri.parse('http://localhost/users'));
    final response = await app.call(request) as Response;
    expect(response.statusCode, 200);
    final body = jsonDecode(await response.readAsString()) as List;
    expect(body.length, 3);
  });

  test('GET /users filters by name', () async {
    final request = Request(
      'GET',
      Uri.parse('http://localhost/users?name=Bob'),
    );
    final response = await app.call(request) as Response;
    expect(response.statusCode, 200);
    final body = jsonDecode(await response.readAsString()) as List;
    expect(body, [
      {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'},
    ]);
  });
}
