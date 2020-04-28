import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GeneralHeader from '../components/GeneralHeader';
import '../styles/Catches.css';
import '../styles/theme.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GeneralHeader header='Catches' information="Have a look at other user's catches and view the details of each catch!" />
            </div>
        )
    }
}

export default Home;