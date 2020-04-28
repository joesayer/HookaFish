import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GeneralHeader from '../components/GeneralHeader';
import '../styles/Home.css';
import '../styles/theme.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GeneralHeader header='HookaFish' information='A place for people to share their catches and the location in which they found them.' />
            </div>
        )
    }
}

export default Home;