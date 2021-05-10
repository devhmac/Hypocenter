import React, { useContext } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import pagerConversion from "../../helpers/pagerConversion";
import { stateContext } from "../../contextProviders/stateContext";

function QuakeInfo(props) {
  const { state } = useContext(stateContext);
  const quake = state.earthquake;

  return (
    <List>
      <ListItem>
        <ListItemText primary="Magnitude" secondary={quake.magnitude} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Pager Status" secondary={quake.pager} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Estimated Economic Damage"
          secondary={quake.pager ? pagerConversion[quake.pager].damage : null}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Potential Fatalities"
          secondary={
            quake.pager ? pagerConversion[quake.pager].fatalities : null
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Time of Occurence"
          secondary={new Date(Number(quake.time_stamp)).toString()}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Danger of Tsunami"
          secondary={quake.tsunami ? "Yes" : "No"}
        />
      </ListItem>
    </List>
  );
}

export default QuakeInfo;
