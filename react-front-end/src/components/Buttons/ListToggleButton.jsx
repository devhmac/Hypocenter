import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "absolute",
    left: "5%",
    top: "87%",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
}));

export default function ListToggleButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </div>
  );
}
