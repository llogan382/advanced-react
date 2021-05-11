import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { endpoint, prodEndpoint } from '../config';

// create the apollo client.
function createClient({ headers, initialState }) {
  return new ApolloClient({
    // inject the first link: for errors.
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        // Insert link if there are network errors.
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      // fetch, update, create new items.
      // this is from Apollo-link-http, a separate package.
      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        // do we want to include cookies on http requests?
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers,
      }),
    ]),
    // To help users load pages quickly
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
      // If there are changes
    }).restore(initialState || {}),
  });
}

// Get data from tree: Crawl components, and look for changes, and wait for data to be fetched before serving the HTML.
export default withApollo(createClient, { getDataFromTree });
