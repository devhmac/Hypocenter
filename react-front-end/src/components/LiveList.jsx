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

//map through livelist state, put each one into a list item, but that in {var} list

export default function LiveList(props) {
  const { state, setState, liveList, eqPopup } = useContext(stateContext);
  const [listToggle, setListToggle] = useState(true);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: `${listToggle ? "none" : "flex"}`,
      position: "absolute",
      top: "15%",
      left: "3%",
      maxWidth: 330,
      backgroundColor: `transparent`,
      color: "white",
      transition: "10s",
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
    "list-item": {
      //border: "2px solid black",
      borderRadius: "5px",
      marginTop: "2px",
      "&:hover": {
        border: "2px solid rgb(255,255,255,0.5)",
      },
    },
  }));
  const classes = useStyles();

  const quakePage = function (eq) {
    setState({
      ...state,
      earthquake: {
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
  //et secondary =

  const eqList = liveList.map((quake) => {
    return (
      <ListItem
        key={quake.id}
        button
        onClick={() => quakePage(quake)}
        className={`
          ${classes["list-item"]}
          ${classes[`${magnitudeColor(quake.magnitude, quake.pager)}`]}`}
      >
        <ListItemText
          className={classes["list-text"]}
          primary={<strong>{quake.title}</strong>}
          secondary={
            <Typography style={{ color: "lightgrey", fontSize: "12px" }}>
              Magnitude: {quake.magnitude},
              {new Date(Number(quake.time_stamp)).toString()}
            </Typography>
          }
        />
      </ListItem>
    );
  });

  return (
    <>
      <div className={classes.root}>
        <List aria-label="new earthquake list">
          <ListItem>
            <ListItemText
              className={classes["list-title"]}
              primary={<strong>Recent Earthquakes</strong>}
            />
          </ListItem>
          {eqList}
        </List>
      </div>
      {eqPopup.new === true && <NewEarthquakePopup />}
      <ListToggleButton
        onClick={() => {
          setListToggle((prev) => {
            return !prev;
          });
        }}
      >
        Recent Quakes
      </ListToggleButton>
    </>
  );
}
