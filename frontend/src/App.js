import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mars from './Components/Mars'
import Register from './Components/Register'
import SignIn from './Components/SignIn'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={ SignIn } />
        <Route exact path = '/Register' component={ Register } />
        <Route exact path = '/Mars' component= { Mars } />
      </Switch>
    </Router>
  );
}

export default App;
