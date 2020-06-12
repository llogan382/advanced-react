import React, { Component } from 'react';
import { Query } from 'react-apollo'; //query is a component

import gql from 'graphql-tag';

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

export default class Items extends Component {
    render() {
        return (
            <div>
                <p>

                    Items!!!
                </p>

                <Query query={ALL_ITEMS_QUERY}>
                    {/*The only child of a query must be a function  */}
                    {({ data, error, loading }) => {
                        console.log(data, error, loading);
                        return <p>Child of query! </p>
                    }}
                </Query>
            </div>
        );
    }
}

