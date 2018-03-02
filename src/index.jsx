import React from "react";
import {render} from "react-dom";
import Button from 'material-ui/Button';
import Reboot from 'material-ui/Reboot';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <Reboot />
      <NavBar classes={{root: 'appBarRoot'}}/>
    </div>
  );
}

render(
    <App/>,
    document.getElementById('content-wrapper')
);

