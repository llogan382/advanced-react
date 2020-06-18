import React, { Component } from 'react';
import { Query } from 'react-apollo'; //query is a component
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

//queries should be in caps. Keep names of queries the same as the variable for ease of use
const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

const Center = styled.div`
text-align: center;
`;
const ItemsList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 60px;
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
`;


export default class Items extends Component {
    render() {
        return (
            <Center>
                <Query query={ALL_ITEMS_QUERY}>
                    {/*The only child of a query must be a function  */}
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>
                            {error.message}
                        </p>;
                        return <ItemsList>
                            {/* mapping is how you loop in react */}
                            {data.items.map(item =>
                                <Item item={item} key={item.id}></Item>
                            )}
                        </ItemsList>;
                    }}
                </Query>
            </Center>
        );
    }
}

export { ALL_ITEMS_QUERY };