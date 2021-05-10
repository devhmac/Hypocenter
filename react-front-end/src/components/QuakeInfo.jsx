import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import pagerConversion from "../helpers/pagerConversion";
import stateContext from "../contextProviders/stateContext";

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
          secondary={props.pager ? pagerConversion[props.pager].damage : null}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Potential Fatalities"
          secondary={
            props.pager ? pagerConversion[props.pager].fatalities : null
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Time of Occurence"
          secondary={new Date(Number(props.time_stamp)).toString()}
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
