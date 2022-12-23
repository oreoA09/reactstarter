import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Entries from './People';
import Error from './Error';
import Entry from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/entries'>
          <Entries/>
        </Route>

        <Route path='/entry/:id' children={<Entry />}></Route>

        <Route path='*'>
          <Error />
        </Route>

      </Switch>
    </Router>
    );
};

export default ReactRouterSetup;
