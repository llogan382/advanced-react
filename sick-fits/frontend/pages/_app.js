import Nprogress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

import '../components/styles/nprogress.css';

Router.events.on('routerChangeStart', () => Nprogress.start());
Router.events.on('routerChangeComplete', () => Nprogress.done());
Router.events.on('routerChangeComplete', () => Nprogress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
