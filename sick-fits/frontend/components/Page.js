import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';



const StyledPage = styled.div`
background: white;
color: ${props => props.theme.black};

`;

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',

};

const Inner = styled.div`
margin: 0 auto;
max-width: ${props => props.theme.maxWidth};
padding: 2rem;
`;

injectGlobal`
html{
    box-sizing: border-box;
    font-size: 10px;
    *, *:before, *:after{
box-sizing: inherit;
    }
}
`;
class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>

                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>
                        {this.props.children}

                    </Inner>
                </StyledPage>
            </ThemeProvider>

        );
    }
}

export default Page;