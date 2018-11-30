import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={CustomersContainer}/>
          <Switch>
            {/* <Route exact path="/customers/new" component={}/> */}
            {/* <Route exact path="/customers/:dni" component={}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
