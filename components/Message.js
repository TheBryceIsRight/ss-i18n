import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import InfoIcon from '@material-ui/icons/Info';


function Message({ children }) {
  return (
    <Paper elevation={0}>
      <ListItem>
        <ListItemIcon>
          <InfoIcon/>
        </ListItemIcon>
        <ListItemText>{children}</ListItemText>
      </ListItem>
    </Paper>
  );
}

export default Message;