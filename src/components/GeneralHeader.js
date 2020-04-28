import React, { Component } from 'react';
import '../styles/GeneralHeader.css';

class GeneralHeader extends Component {
    render() {
        return (
            <div id='container'>
                <h1>{this.props.header}</h1>
                <h2>{this.props.information}</h2>
            </div>
        )
    }
}

export default GeneralHeader;