const { gql } = require('apollo-server');

const typeDefs = gql`
     type Dish {
          id: ID!
          idDish: String
          name: String!
          calories: Int!
          isVegetarian: Boolean!
          value: Int!
          comments: String
          createdAt: String
          updatedAt: String
     }

     input DishInput {
          idDish: String
          name: String!
          calories: Int!
          isVegetarian: Boolean
          value: Int!
          comments: String
     }

     type Query {
          getAllDishes: [Dish!]!
          getDishById(id: ID!): Dish
          getDishesByCaloriesRange(min: Int!, max: Int!): [Dish!]!
     }

     type Mutation {
          createDish(input: DishInput!): Dish!
          updateDish(id: ID!, input: DishInput!): Dish
          deleteDish(id: ID!): Boolean!
     }
`;

module.exports = typeDefs;