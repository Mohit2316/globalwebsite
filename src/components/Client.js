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
            <Icon style={{color: 'orange'}}>
                bookmark_order
            </Icon>
          <Typography component="p">
            {content}
          </Typography>
          <br/>
          <Typography variant="headline" component="h2">
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