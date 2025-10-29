# Parcial de GraphQL con persistencia en MongoDB
 - Electiva II (Desarrollo Web).

## Descripción
Este proyecto implementa una API GraphQL para gestionar un sistema de consultas de platos.

## Queries Disponibles

### Obtener todos los usuarios
```graphql
query {
     getAllUsers {
          id
          name
          email
     }
}
```

### Obtener usuario por ID
```graphql
query {
     getUserById(id: "1") {
          id
          name
          email
     }
}
```

### Crear nuevo usuario
```graphql
mutation {
     createUser(input: {
          name: "John Doe",
          email: "john@example.com"
     }) {
          id
          name
          email
     }
}
```

### Actualizar usuario
```graphql
mutation {
     updateUser(id: "1", input: {
          name: "John Updated",
          email: "john.updated@example.com"
     }) {
          id
          name
          email
     }
}
```

### Eliminar usuario
```graphql
mutation {
     deleteUser(id: "1")
}
```
