import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = {
  card: {
    maxWidth: 345,
    marginBottom: '2em'
  },
  media: {
    height: '20em',
  },
};

function SimpleMediaCard(props) {
  const { classes, title, content, media, mediaTitle} = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={media}
          title={mediaTitle}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);