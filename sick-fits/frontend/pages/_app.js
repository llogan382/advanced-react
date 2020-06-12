import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

// Import the page component
import Page from '../components/Page';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query;
        return { pageProps };
    }
    render() {

        // Take in components and destructure them
        const { Component, apollo, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={this.props.apollo}>

                    {/* Use the Page component */}
                    <Page>
                        <Component {...pageProps} />

                    </Page>
                </ApolloProvider>

            </Container>
        )
    }
}

export default withData(MyApp);