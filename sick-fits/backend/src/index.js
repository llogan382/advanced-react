// let's go!
// This will start our node server
// This is entry point for the application

const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');

// Import DB we creates
const db = require('./db');

const server = createServer();

// Use express middleware to populate cookies (JWT)
// Allows us to use all cookies as an object
server.express.use(cookieParser());
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
