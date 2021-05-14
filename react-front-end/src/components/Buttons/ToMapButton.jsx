import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fade from "../Fade";
import { globeLoaderContext } from "../../contextProviders/globeLoaderContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "absolute",
    top: "87%",
    right: "5%",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
}));

export default function ToMapButton(props) {
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
