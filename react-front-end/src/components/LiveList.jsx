import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListToggleButton from "./Buttons/ListToggleButton";
import Typography from "@material-ui/core/Typography";
import { stateContext } from "../contextProviders/stateContext";
import NewEarthquakePopup from "./NewEarthquakePopup";
import magnitudeColor from "../helpers/magnitudeColor";
import Fade from "./Fade";
import { globeLoaderContext } from "../contextProviders/globeLoaderContext";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: `${listToggle ? "none" : "flex"}`,
    position: "absolute",
    top: "10%",
    left: "3%",
    backgroundColor: `transparent`,
    color: "white",
    transition: "10s",
    height: "5vh",
  },
  listcomponent: {
    maxWidth: 400,
  },

  "list-title": {
    "text-decoration": "underline",
  },
  "list-text": {
    //color: "white",
  },
  lightgreen: {
    backgroundColor: "rgb(2, 237, 116, 0.4)",
  },
  yellow: {
    backgroundColor: "rgb(255,255,0, 0.4)",
  },
  orange: {
    backgroundColor: "rgb(255,165,0, 0.4)",
  },
  red: {
    backgroundColor: "rgb(255, 0, 0, 0.4)",
  },
  lightgreenMap: {
    backgroundColor: "rgb(28, 126, 0, 0.9)",
  },
  yellowMap: {
    backgroundColor: "rgb(185, 184, 19, 0.9)",
  },
  orangeMap: {
    backgroundColor: "rgb(216, 115, 2, 0.9)",
  },
  redMap: {
    backgroundColor: "rgb(163, 14, 14, 0.9)",
  },
  "list-item": {
    //border: "2px solid black",
    borderRadius: "5px",
    marginTop: "2px",
    "&:hover": {
      border: "2px solid rgb(255,255,255,0.5)",
    },
  },
}));

export default function LiveList(props) {
  const { state, setState, liveList, eqPopup } = useContext(stateContext);
  const { startSite } = useContext(globeLoaderContext);
  const [listToggle, setListToggle] = useState(false);

  const classes = useStyles();

  const quakePage = function (eq) {
    setState({
      ...state,
      earthquake: {
        id: eq.id,
        title: eq.title,
        latitude: eq.latitude,
        longitude: eq.longitude,
        depth: eq.depth,
        magnitude: eq.magnitude,
        pager: eq.pager,
        time_stamp: eq.time_stamp,
        tsunami: eq.tsunami,
      },
      mode: "earthquake",
    });
  };

  const eqList = liveList.map((quake) => {
    return (
      <ListItem
        key={quake.id}
        button
        onClick={() => quakePage(quake)}
        className={`
          ${classes["list-item"]}
          ${
            classes[
              `${magnitudeColor(quake.magnitude, quake.pager)}${
                props.mapMode ? "Map" : ""
              }`
            ]
          }`}
      >
        <ListItemText
          className={classes["list-text"]}
          primary={<strong>{quake.title}</strong>}
          secondary={
            <Typography style={{ color: "lightgrey", fontSize: "12px" }}>
              Magnitude: {quake.magnitude} -{" "}
              {new Date(Number(quake.time_stamp)).toString()}
            </Typography>
          }
        />
      </ListItem>
    );
  });

  return (
    <>
      <Fade show={startSite}>
        {listToggle && (
          <div className={classes.root}>
            <List
              aria-label="new earthquake list"
              className={classes.listcomponent}
            >
              <ListItem>
                <ListItemText
                  className={classes["list-title"]}
                  primary={<strong>Recent Earthquakes</strong>}
                />
              </ListItem>
              {eqList}
            </List>
          </div>
        )}
        <ListToggleButton
          onClick={() => {
            setListToggle((prev) => {
              return !prev;
            });
          }}
        >
          Recent Quakes
        </ListToggleButton>
      </Fade>
      {eqPopup.new === true && <NewEarthquakePopup />}
    </>
  );
}
