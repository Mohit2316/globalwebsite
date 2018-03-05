import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Logo from '../assets/images/Logo.PNG';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  const style = {
    backgroundColor: 'rgb(0, 49, 83)',
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px steelbird',
    height: '5em',
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={style}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src={Logo} style={{height: '5em', width: '10em', position: 'relative', top: '-1.2em', left: '4em'}}/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            
          </Typography>
          <Button color="inherit">
            Home
          </Button>
          <Button color="inherit">
            About Us
          </Button>
          <Button color="inherit" href="#expertise">
            Expertise
          </Button>
          <Button color="inherit">
            Import & Export
          </Button>
          <Button color="inherit">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);