import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { stateContext } from "../contextProviders/stateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "15%",
    left: "3%",
    width: "100%",
    maxWidth: 360,
    backgroundColor: "grey",
    color: "white",
  },

  "MuiListItemText-secondary": {
    color: "white",
  },
}));

//map through livelist state, put each one into a list item, but that in {var} list

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function LiveList(props) {
  const classes = useStyles();

  const { state, setState, liveList } = useContext(stateContext);

  const eqList = liveList.map((quake) => {
    return (
      <ListItem button>
        <ListItemText
          onClick={() => props.onClick(quake)}
          primary={quake.title}
          secondary={quake.magnitude}
        />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <List aria-label="new earthquake">{eqList}</List>
    </div>
  );
}
