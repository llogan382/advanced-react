import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema'; // import items from keystone

// define db
const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

// authenticate
const sessionConfig = {
  maxAge: 60 * 60 * 360, // how long to stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Addd data seeding here
  },
  lists: createSchema({
    // schema items fo in here
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session value here.
});
