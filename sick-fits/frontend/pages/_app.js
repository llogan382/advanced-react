import App, { Container } from 'next/app';

// Import the page component
import Page from '../components/Page';

class MyApp extends App {
    render() {

        // Take in components and destructure them
        const { Component } = this.props;
        return (
            <Container>
                <p>Hey Im on every page!</p>

                {/* Use the Page component */}
                <Page>
                    <Component />

                </Page>
            </Container>
        )
    }
}

export default MyApp;