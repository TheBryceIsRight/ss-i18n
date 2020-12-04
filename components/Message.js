import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  text: {
    padding: 0,
  }
});

function Message({ classes, children }) {
  return (
    <Paper elevation={0} className={classes.info}>
      <ListItem>
        <ListItemIcon>
          <InfoIcon/>
        </ListItemIcon>
        <ListItemText className={classes.text}>{children}</ListItemText>
      </ListItem>
    </Paper>
  );
}

export default withStyles(styles)(Message);