/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    next: {
        marginLeft: theme.spacing(2)
    }
}));

export default function Pagination({onPrevClick, onNextClick, pageNumber, maxPages}) {
    const classes = useStyles();

    const previousClick = (event) => {
        event.preventDefault()
        if (pageNumber !== 1) {
            onPrevClick()
        }
    }

    const nextClick = (event) => {
        event.preventDefault()
        if (pageNumber !== maxPages) {
            onNextClick()
        }
    }

    return (
        <Typography>
            <Link disabled href="#"
                onClick={previousClick}>
                Previous
            </Link>
            <Link href="#"
                className={
                    classes.next
                }
                onClick={nextClick}>
                Next
            </Link>
        </Typography>
    );
}
