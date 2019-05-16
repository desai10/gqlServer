import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { theData } from './dummyData';
import resolvers from './resolvers';
import schema from './schema';


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

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});