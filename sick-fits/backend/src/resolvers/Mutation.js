const bcrypt = require('bcryptjs');
const mutations = {
    async createItem(parent, args, ctx, info) {

        // This is where we interact wiht our prisma API

        // Pulls in any fields available in the prisma.graphql file

        // the info variable pulls in the query from the front end, passes to the backend
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            },
        }, info);

        return item;
    },
    updateItem(parent, args, ctx, info) {
        // take a copy of the updates
        const updates = { ...args };

        // remove ID from the updates
        delete updates.id;

        // run the update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id
            },
        },
            info
        );
    },
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };

        // 1. Find the item
        const item = await ctx.db.query.item({ where }, `{ id title}`);

        // 2. Check if they own the item (permissions)
        // TODO

        // 3. Delete it.
        return ctx.db.mutation.deleteItem({ where }, info);

    },
    // Use the mutation from the scheme
    async signup(parent, args, ctx, info) {
        // Make email all lower case
        args.email = args.email.toLowerCase();
        args.password =
    }


};

module.exports = mutations;
