// This is where we will connect our database.
// React uses APOLLO to query GRAPHQL Yoga Endpoint
// On server, graphql yoga connects to prisma and pulls data back and forth

// Frontend: ReactJS
// Data management: Apollo
// Server: GraphQL Yoga
//DB: Prisma

// This connects to remote DB and allows us to query the DB
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db;