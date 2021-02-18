import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <>
      <h1>AAPA Timeline Project</h1>
      <h3>This is a helper development site.</h3>
      <div className={classes.root}>
        <Button variant="contained" color="Secondary">
          General History Data Source
        </Button>
        <Button variant="contained" color="Primary">
          AAPA Histroy Data Source
        </Button>
        <Button variant="contained">Timeline Dev Site</Button>
      </div> 
    </>
  );
};

export default index;


