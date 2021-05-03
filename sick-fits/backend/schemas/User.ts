import { list } from '@keystone-next/keystone/schema';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  // access:
  // ui
  fields: {
    name: text({ isRequired: true, isUnique: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // todo: add to cart and orders
  },
});
