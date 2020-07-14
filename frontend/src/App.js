import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mars from './Components/Mars'
import Register from './Components/Register'
import SignIn from './Components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css'



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
