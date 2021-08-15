import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useLocalStorage from '../CustomHooks/localStorage';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: '2vh'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
}));


const getFormattedDate = (dateTime) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const month = months[dateTime.getMonth() - 1]
    const year = dateTime.getFullYear()
    let date = dateTime.getDate()

    if (date < 10) {
        date = '0' + date;
    }

    return(date + " " + month + " " + year)
}

export default function Headline({headline, id}) {
    const classes = useStyles();
    const [storedValue, setStoredValue] = useLocalStorage(id, {
        color: "default",
        show: "true"
    })

    const likeAction = () => {
        console.log(storedValue)
        if (storedValue.color === "default") 
            setStoredValue({
                ...storedValue,
                color: "primary"
            })
         else 
            setStoredValue({
                ...storedValue,
                color: "default"
            })
        
    }

    const hideHeadline = () => {
        if (storedValue.show === "true") 
            setStoredValue({
                ...storedValue,
                show: "false"
            })
        
    }

    return (
        <> {
            storedValue.show === "true" && <Card className={
                classes.root
            }>
                <CardHeader title={
                        headline.title
                    }
                    subheader={
                        getFormattedDate(new Date(headline.publishedAt))
                    }/>
                <CardMedia className={
                        classes.media
                    }
                    image={
                        headline.image
                    }/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                        headline.description
                    } </Typography>
                    <a rel="noreferrer" target="_blank"
                        href={
                            headline.url
                    }>
                        {
                        headline.url
                    } </a>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton color={
                            storedValue.color
                        }
                        onClick={likeAction}
                        aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton onClick={hideHeadline}>
                        <VisibilityIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        } </>
    );
}
