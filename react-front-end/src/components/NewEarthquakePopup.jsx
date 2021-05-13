import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { stateContext } from "../contextProviders/stateContext";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
      background: "rgb(2, 237, 116, 0.3)",
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
        <strong>{quake.title}</strong>
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
