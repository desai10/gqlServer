const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { theData } = require('./dummyData');
const resolvers = require('./resolvers');
const schema = require('./schema');


const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: {
        theData
    }
});

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});