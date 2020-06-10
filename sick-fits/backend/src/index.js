// let's go!
// This will start our node server
// This is entry point for the application
require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');

// Import DB we creates
const db = require('./db');

const server = createServer();

// TODO Use express middleware to populate cookies (JWT)
// TODO Use express middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
},
    deets => {
        console.log(`Server is now running on port http://localhost:${deets.port}`);
    }
);
