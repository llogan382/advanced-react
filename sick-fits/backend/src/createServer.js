// Creates an express server
const { GraphQLServer } = require('graphql-yoga');

// import resolvers: where does data come from, and what does it do?

// 2 types: 1) query resolvers, 2) push resolvers

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const db = require('./db');

// Create 2 graphql servers: one on client, one on server
function createServer() { //create the server, and these are the resolvers that are expected:
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        // match every resolver to query or mutation
        resolvers: {
            Mutation,
            Query,
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db })
    });
}

module.exports = createServer;