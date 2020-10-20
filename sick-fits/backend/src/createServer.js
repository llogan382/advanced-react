//import RESOLVERS: the QUERY and the MUTATION resolvers
// We have a file for QUERY and a file for MUTATE
//We write a resolver into each file each time we want to view or change the data

const Query = require('./resolvers/Query');
const db = require('./db');
const Mutation = require('./resolvers/Mutation');

const { GraphQLServer } = require('graphql-yoga');


// create graphql yoga server function; export this, to be used in index.js
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        // expose the database to every singe request
        context: req => ({ ...req, db }),
    });
}

module.exports = createServer;