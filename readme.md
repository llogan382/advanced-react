
# Advanced React & GraphQL



## backend graphql

For each schema in schema.graphql, a ** resolver ** must be created. In our case, they are in `backend/src/resolver/Query.js`

With graphql, we arent interfacing with any DB here.
We are just sending back raw text.
Hit rest API, CSV, pull data from Memory, or pull from a DB.

### Example
In schema.graphql, we created a dummy Mutation and query to create.
    type Dog {
        name: String!
    }

    type Mutation {
        createDog(name: String!): Dog
    }

    type Query {
    dogs: [Dog]!
    }

Then, in `mutations.js`, we created the mutation `createDog` :

    const mutations = {
        createDog(parent, args, ctx, info) {

            global.dogs = global.dogs || [];

            const newDog = { name: args.name };

            global.dogs.push(newDog);
            return newDog;
        }
    };

    module.exports = mutations;

All of this data is connected in the `createServer.js` file, that tells the graphql server where to look for all mutations and queries (called ** RESOLVERS ** ):

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
