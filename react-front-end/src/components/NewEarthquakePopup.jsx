import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { stateContext } from "../contextProviders/stateContext";
import magnitudeColor from "../helpers/magnitudeColor";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
      Transition: "width 1s",
      position: "absolute",
      top: "25%",
      right: "3%",
      maxWidth: 360,
      color: "white",
    },
  },
  lightgreen: {
    backgroundColor: "rgb(2, 237, 116, 0.5)",
    border: "2px solid rgb(2, 237, 116, 0.9)",
  },
  yellow: {
    backgroundColor: "rgb(255,255,0, 0.5)",
    border: "2px solid rgb(255,255,0, 0.9)",
  },
  orange: {
    backgroundColor: "rgb(255,165,0, 0.5)",
    border: "2px solid rgb(255,165,0, 0.9)",
  },
  red: {
    backgroundColor: "rgb(255, 0, 0, 0.5)",
    border: "2px solid rgb(255,0,0, 0.9)",
  },
}));

export default function NewEarthquakePopup(props) {
  const { eqPopup, setEqPopup } = useContext(stateContext);
  const classes = useStyles();

  useEffect(() => {
    if (eqPopup.new) {
      setTimeout(() => {
        setEqPopup((prev) => {
          return { ...prev, new: false, earthquakes: [] };
        });
      }, 4000);
    }
  }, [eqPopup.new]);

  const popups = eqPopup.earthquakes.map((quake) => {
    return (
      <Alert
        className={classes[`${magnitudeColor(quake.magnitude, quake.pager)}`]}
        severity="warning"
      >
        <AlertTitle>New Earthquake</AlertTitle>
        <strong>{quake.title}</strong> - Magnitude: {quake.magnitude}
      </Alert>
    );
  });

  return <div className={classes.root}>{popups}</div>;
}
