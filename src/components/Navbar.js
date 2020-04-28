import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div id='navbar-container'>
                <h1>HookaFish</h1>
                <div id='general-links-container'>
                    <Link to='/'>Home</Link>
                    <Link to='/catches'>Catches</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;