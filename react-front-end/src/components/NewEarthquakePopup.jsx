import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { stateContext } from "../contextProviders/stateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function NewEarthquakePopup(props) {
  const { eqPopup, setEqPopup } = useContext(stateContext);
  const classes = useStyles();

  // useEffect(() => {
  //   if (eqPopup.new) return;
  //   something like settimeout eqPopup.new=false
  // }, [eqPopup.new]);

  return (
    <div className={classes.root}>
      <Alert severity="warning">
        <AlertTitle>New Earthquake</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
    </div>
  );
}
