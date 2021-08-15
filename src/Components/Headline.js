import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


const getFormattedDate=(dateTime)=>{
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
  const month=months[dateTime.getMonth()-1]
  const year=dateTime.getFullYear()
  let date=dateTime.getDate()

  if (date < 10) {
    date = '0' + date;
  }

  return (date+" "+month+" "+year)
}

export default function Headline({headline}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        title={headline.title}
        subheader={getFormattedDate(new Date(headline.publishedAt))}
      />
      <CardMedia
        className={classes.media}
        image={headline.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {headline.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
