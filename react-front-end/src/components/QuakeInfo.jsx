import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

function QuakeInfo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Magnitude" secondary={props.magnitude} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Pager Status" secondary={props.pager} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Estimated Economic Damage"
          secondary={"Secondary Text"}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Potential Fatalities"
          secondary={"Secondary Text"}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Time of Occurence"
          secondary={props.time_stamp}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Danger of Tsunami"
          secondary={props.tsunami ? "Yes" : "No"}
        />
      </ListItem>
    </List>
  );
}

export default QuakeInfo;
