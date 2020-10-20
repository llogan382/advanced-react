// let's go!
// This will startup our node server
// Make sure .env files are available

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');
const server = createServer();

// todo: use express middleware to handle coookies
// todo: use express middleware to populate current user


server.start({

    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, deets => {
    console.log(`server is now running on port http://localhost:${deets.port}`);
});
