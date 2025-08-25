import 'dart:convert';
// ignore: depend_on_referenced_packages
import 'package:shelf_router/shelf_router.dart';
// ignore: depend_on_referenced_packages
import 'package:shelf/shelf.dart';
// import 'db.dart'; // Aquí normalmente importarías tu archivo de base de datos mock

/// Función que simula la obtención de usuarios desde una base de datos.
/// Devuelve una lista de mapas con `id`, `name` y `email`.
List<Map<String, dynamic>> getUsers() {
  return [
    {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'},
    {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'},
    {'id': 3, 'name': 'Charlie', 'email': 'charlie@example.com'},
  ];
}

/// Router principal de la aplicación.
/// NOTA: No cambiar el nombre de la variable, ya que lo espera el entorno.
final app = Router();

/// Función encargada de registrar las rutas en el `Router`
///
/// Actualmente expone la ruta:
/// - `GET /users` → devuelve todos los usuarios, o filtra por query param `name`.
void bootstrapRouter() {
  // Ruta para obtener usuarios
  app.get('/users', (Request request) {
    // 1. Obtener todos los usuarios desde la "base de datos"
    final users = getUsers();

    // 2. Leer el parámetro de query `name` (si existe)
    // Ejemplo: /users?name=Bob
    final nameFilter = request.url.queryParameters['name'];

    // 3. Si se envió `name`, filtramos la lista.
    //    Si no, devolvemos todos los usuarios.
    final filteredUsers = (nameFilter != null)
        ? users.where((u) => u['name'] == nameFilter).toList()
        : users;

    // 4. Devolver respuesta con código 200 (OK)
    //    Se serializa la lista a JSON y se añade el header de tipo de contenido.
    return Response.ok(
      jsonEncode(filteredUsers),
      headers: {'Content-Type': 'application/json'},
    );
  });
}
