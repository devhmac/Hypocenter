import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      color: " #ff1c1c ",
      border: " 1px solid",
      shadow: "3px",
      borderRadius: "100px",
      bold: "1px"
    },

  },

}));

export default function TextButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.onClick} color="primary">
        {props.children}
      </Button>
    </div>
  );
}
