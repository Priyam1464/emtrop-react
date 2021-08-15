/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useRef,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   next: {
      marginLeft: theme.spacing(2),
    },
}));

export default function Pagination({onPrevClick,onNextClick,pageNumber,maxPages}) {
  const classes = useStyles();
  const prevRef=useRef()
  const nextRef=useRef()

  useEffect(()=>{
   
    if(pageNumber===1)
    {
        console.log(prevRef)
        prevRef.current["ariaDisabled"]=true
    }

     if(pageNumber===maxPages)
     {
        nextRef.current.color="grey"
        nextRef.current.textDecoration="none"
     }
  },[])

  const previousClick=(event)=>{
    event.preventDefault()
    if(pageNumber!==1)
    {
        onPrevClick()
    }
  }

  const nextClick=(event)=>{
    event.preventDefault()
    if(pageNumber!==maxPages)
    {
     onNextClick()
    }
  }

  return (
    <Typography >
      <Link disabled ref={prevRef} href="#"  onClick={previousClick}>
        Previous
      </Link>
      <Link ref={nextRef} href="#" className={classes.next}  onClick={nextClick} >
        Next
      </Link>
    </Typography>
  );
}
