import { ApolloServer } from 'apollo-server';

import typeDefs from './schema/schema';
import resolvers from './resolvers/resolvers';

import ObjectApi from './datasources/object';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        //Replace DEMO_KEY with NASA Api key for more requests
        objectApi: new ObjectApi('DEMO_KEY')
    }),
    playground: false
});

server.listen()
    .then(({url}) => console.log(`Apollo server running on ${url}`));
