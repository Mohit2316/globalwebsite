import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



const styles = {
  card: {
    marginBottom: '2em',
    height: '40em',
    width: '100%'
  },
  media: {
    height: '20em',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2em'
  },
  content: {
    fontSize: '1em'
  }
};

function ServiceDetail(props) {
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
          <Typography 
            variant="headline" 
            component="h2"
            className={classes.title}
            >
            {title}
          </Typography>
          <br/>
          <Typography component="p" className={classes.content}>
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

ServiceDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceDetail);