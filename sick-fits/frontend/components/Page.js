import React, { Component } from 'react';

class Page extends Component {
    render() {
        return (
            <div>
                <p>Hey Im the page</p>
                {this.props.children}
            </div>
        );
    }
}

// Use this in the APP component
export default Page;