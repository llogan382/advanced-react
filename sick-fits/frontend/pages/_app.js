import Nprogress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routerChangeStart', () => Nprogress.start());
Router.events.on('routerChangeComplete', () => Nprogress.done());
Router.events.on('routerChangeComplete', () => Nprogress.done());

function MyApp({ Component, pageProps, apollo }) {
  console.log(apollo);
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// If any other pages have get initialProps, we will wait and go and fetch it.
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

// Give me the app, and include the data inside of it
export default withData(MyApp);
