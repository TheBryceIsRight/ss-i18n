import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

function Legend({ classes, data }) {
  return (
    <ol className={classes.legend}>
      {data.map(({ name, color }, i) => {
        return (
          <ul key={i}>
            <li className={classes.marker} style={{ backgroundColor: color }} />
            <li style={{ color: "#FFFFFF" }}>{name}</li>
          </ul>
        );
      })}
    </ol>
  );
}

const styles = theme => ({
  legend: {
    padding: 0,
    width: "fit-content",
    margin: "0 2px",
    fontFamily: 'Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    "& li": {
      display: "inline-flex",
      listStyle: "none",
      alignItems: "center",
      marginRight: theme.spacing.unit * 2,
      lineHeight: 1,
      fontSize: 12,
      fontWeight: 500
    }
  },
  marker: {
    flexShrink: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: theme.spacing.unit
  }
});

export default withStyles(styles)(Legend);