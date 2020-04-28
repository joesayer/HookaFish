import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Catches from './components/Catches';
import './styles/theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
          <Route path='/catches' component={Catches} />
          <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;