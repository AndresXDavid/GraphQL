# Parcial de GraphQL con persistencia en MongoDB (CRUD)
 - Electiva II (Desarrollo Web).

## Descripción
Este proyecto implementa una API GraphQL para gestionar un sistema de consultas de platos.

## Queries Disponibles

### Obtener todos los platos
```graphql
query {
  getAllDishes {
    id
    idDish
    name
    calories
  }
}
```

### Obtener un plato por ID
```graphql
query {
  getDishById(id: "657ba065209d546c01da5a14") {
    id
    idDish
    name
    calories
  }
}
```

### Obtener platos por rango de calorías
```graphql
query {
  getDishesByCaloriesRange(min: 100, max: 500) {
    id
    name
    calories
  }
}
```

### Crear un nuevo plato
```graphql
mutation {
  createDish(input: {
    idDish: "5115",
    name: "Pasta a la bolognesa",
    calories: 1500,
    isVegetarian: false,
    value: 5000,
    comments: "Rica pasta casera"
  }) {
    id
    idDish
    name
    calories
  }
}
```

### Actualizar un plato
```graphql
mutation {
  updateDish(id: "657ba065209d546c01da5a14", input: {
    name: "Arroz con Huevo - Nuevo",
    calories: 220,
    value: 2300,
    isVegetarian: true,
    comments: "Actualizado"
  }) {
    id
    name
    calories
  }
}
```

### Eliminar un plato
```graphql
mutation {
  deleteDish(id: "690162b33b95b5a2c516a3c1")
}
```