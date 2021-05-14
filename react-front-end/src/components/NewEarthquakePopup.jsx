import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { stateContext } from "../contextProviders/stateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
      background: "rgb(255, 218, 124, 0.7)",
      border: "2px solid rgb(255, 183, 101)",
      Transition: "width 1s",
      position: "absolute",
      top: "25%",
      right: "3%",
      maxWidth: 360,
      color: "white",
    },
  },
}));

export default function NewEarthquakePopup(props) {
  const { eqPopup, setEqPopup } = useContext(stateContext);
  const classes = useStyles();

  useEffect(() => {
    if (eqPopup.new) {
      const popupTimer = setTimeout(() => {
        setEqPopup((prev) => {
          return { ...prev, new: false, earthquakes: [] };
        });
      }, 4000);
      //return clearTimeout(popupTimer);
    }
  }, [eqPopup.new]);

  const popups = eqPopup.earthquakes.map((quake) => {
    return (
      <Alert severity="warning">
        <AlertTitle>New Earthquake</AlertTitle>
        <strong>{quake.title}</strong> - Magnitude: {quake.magnitude}
      </Alert>
    );
  });
  //{eqPopup.new ? eqPopup.}

  return (
    <div className={classes.root}>
      <Alert severity="warning">
        <AlertTitle>New Earthquake</AlertTitle>
        new eq — <strong>check it out!</strong>
      </Alert>
      {popups}
    </div>
  );
}
