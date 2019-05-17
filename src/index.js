const cors = require('cors');
const express = require('express');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');

const { theData } = require('./dummyData');
const resolvers = require('./resolvers');
const schema = require('./schema');


const app = express();

app.use(cors());

const server = new ApolloServer({
    introspection: true,
    playground: true,
	typeDefs: schema,
	resolvers,
	context: {
        theData
    }
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 8000;
httpServer.listen({ port }, () => {
	console.log('Apollo Server on http://localhost:8000/graphql');
});