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
};

module.exports = mutations;
