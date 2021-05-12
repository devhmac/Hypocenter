import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List aria-label="new earthquake">
        <ListItem button>
          <ListItemText
            className={classes["list-text"]}
            primary="Inbox"
            secondary="test test"
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  );
}
