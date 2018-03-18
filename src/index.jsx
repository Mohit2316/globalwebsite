import React from "react";
import {render} from "react-dom";
import Button from 'material-ui/Button';
import Reboot from 'material-ui/Reboot';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Reboot />
          <NavBar classes={{root: 'appBarRoot'}}/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about-us" component={HomePage}/>
            <Route path="/services" component={HomePage}/>
            <Route path="/contact-us" component={HomePage}/>
          </Switch>
      </div>
    </Router>
  );
}

render(
    <App/>,
    document.getElementById('content-wrapper')
);

