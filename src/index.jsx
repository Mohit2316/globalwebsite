import React from "react";
import {render} from "react-dom";
import Button from 'material-ui/Button';
import Reboot from 'material-ui/Reboot';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import ServicePage from './pages/Services';
import ContactUsPage from './pages/ContactUs';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Reboot />
          <NavBar classes={{root: 'appBarRoot'}}/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/services" component={ServicePage}/>
            <Route path="/contact-us" component={ContactUsPage}/>
          </Switch>
      </div>
    </Router>
  );
}

render(
    <App/>,
    document.getElementById('content-wrapper')
);

