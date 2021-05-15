import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      // marginTop: theme.spacing(2),
    },
    textAlign: "left",
  },
  alert: {
    backgroundColor: "rgba(161, 6, 6,0.5)",
    border: "2px solid #a10606",
    color: "white",
  },
  anchor: {
    color: "lightgrey",
  },
}));

export default function TsunamiBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert
        icon={
          <img
            src="/images/tsunami.png"
            alt="tsunami icon"
            width="30"
            height="30"
          />
        }
        className={classes.alert}
      >
        <AlertTitle>Tsunami Alert</AlertTitle>
        <a className={classes.anchor} href="https://tsunami.gov/">
          Visit tsunami.gov for more details
        </a>
      </Alert>
    </div>
  );
}
