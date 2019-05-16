import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

app.use(cors());

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
    firstName: String!
    lastName: String!
    fullName: String!
  }
`;

const resolvers = {
    Query: {
        me: () => {
            return {
				username: 'desai10',
				firstName: 'Sriram',
				lastName: 'Desai',
                fullName: 'Sriram Desai'
			};
        },
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});