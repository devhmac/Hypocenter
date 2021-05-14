import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { globeLoaderContext } from "../../contextProviders/globeLoaderContext";
import Fade from "../Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "absolute",
    left: "5%",
    bottom: "7%",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
}));

export default function ListToggleButton(props) {
  const { startSite } = useContext(globeLoaderContext);
  const classes = useStyles();
  return (
    <Fade show={startSite}>
      <div className={classes.root}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={props.onClick}
        >
          {props.children}
        </Button>
      </div>
    </Fade>
  );
}
