require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
     if (!MONGO_URI) {
     console.error('MONGO_URI no esta definido en .env');
     process.exit(1);
     }

     try {
     await mongoose.connect(MONGO_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true
     });
     console.log('Conectado a MongoDB');

     const server = new ApolloServer({
               typeDefs,
               resolvers
     });

     const { url } = await server.listen({ port: PORT });
     console.log(`Servidor listo en ${url}`);
     } catch (err) {
     console.error('Error iniciando servidor:', err);
     }
}

start();