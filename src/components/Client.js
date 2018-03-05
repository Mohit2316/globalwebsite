import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon/Icon';


const styles = {
  card: {
    maxWidth: '100%',
    boxShadow: '0 3px 5px 2px steelbird',
  },
  media: {
    height: 200,
  },
};

function ClientCard(props) {
  const { classes, title, content, clientName, clientDesignation} = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
            <Icon style={{color: '#f1a70c'}}>
                bookmark_order
            </Icon>
          <Typography component="p" style={{fontSize: '1.2em'}}>
            {content}
          </Typography>
          <br/>
          <Typography variant="headline" component="h1" style={{fontSize: '1.4em'}}>
            - {clientName}
          </Typography>
          <p>
            {clientDesignation}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


export default withStyles(styles)(ClientCard);