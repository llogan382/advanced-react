const Query = {

    // Method for each query
    dogs(parent, args, ctx, info) {

        // DB calls go here.
        global.dogs = global.dogs || [];
        return global.dogs;
    },

};

module.exports = Query;


