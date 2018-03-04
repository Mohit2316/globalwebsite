import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function StatBox(props) {
  const { classes, title, content} = props;
  return (
      <Grid item xs={3} style={{color: 'white'}}>
        <Typography variant="heading" component="h4" style={{fontSize: '4em'}}>
            {title}
        </Typography>
        <Typography component="p" color="inherit">
            {content}
        </Typography>
      </Grid>
  );
}


export default withStyles(styles)(StatBox);