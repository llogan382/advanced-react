const { forwardTo } = require('prisma-binding');

const Query = {

    // If you just want to query the DB without auth or anything, just get all info from DB:
    items: forwardTo('db'),
    item: forwardTo('db'),


    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items();
    //     return items;

    // }

};

module.exports = Query;


