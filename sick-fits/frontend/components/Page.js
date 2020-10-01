import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';



const StyledPage = styled.div`
background: white;
color: black;

`;

const Theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',

};

const Inner = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 2rem;

`;
class Page extends Component {
    render() {
        return (
            <StyledPage>
                <Meta />
                <Header />
                <Inner>
                    {this.props.children}

                </Inner>
            </StyledPage>
        );
    }
}

export default Page;