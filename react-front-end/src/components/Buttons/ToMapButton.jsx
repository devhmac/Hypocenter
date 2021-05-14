import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "absolute",
    bottom: "7%",
    left: "3%",
  },
}));

export default function ToMapButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.children}
      </Button>
    </div>
  );
}
