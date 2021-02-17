import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    justifyContent: "flex-start",
    padding: theme.spacing(3),
    margin: "65px 0px",
  },
}));

const Ghost = props =>{
  const classes = useStyles();
  return(
  <main className={classes.content}>
      <Typography data-testid='title' variant="h3" component="h1">
        Choose a Year
      </Typography>
      <Skeleton variant='rect' width={300} height={200} animation='wave'/>
      <Skeleton width={300} height={30} animation='wave'/>
      <Skeleton width={150} height={30} animation='wave'/>
      <Skeleton width={50} height={30} animation='wave'/>
    </main>
  );
};

export default Ghost;