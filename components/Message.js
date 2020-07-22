import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import paw from "../public/paw";

const styles = theme => ({
  info: {
    background: "#070F45",
  },
  text: {
    padding: 0,
  }
});

function Message({ classes, children }) {
  return (
    <Paper elevation={0} className={classes.info}>
      <ListItem>
        <ListItemIcon>
          <img src={paw} height="28" alt="A dog's pawprint"/>
        </ListItemIcon>
        <ListItemText className={classes.text}>{children}</ListItemText>
      </ListItem>
    </Paper>
  );
}

export default withStyles(styles)(Message);