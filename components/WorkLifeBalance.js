import React from "react";
import moment from "moment";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EventAvailableTwoTone from "@material-ui/icons/EventAvailableTwoTone";
import MoreVert from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

import BarChart from "./BarChart";
import Message from "./Message";
import Legend from "./Legend";

import item from "../public/item"; // import data

const styles = theme => ({
  card: {
    maxWidth: 748,
    margin: "24px auto",
    backgroundColor: '#101123',
  },
  avatar: {
    background: "#CBF5FE",
    color: "#01CEFC"
  },
  container: {
    margin: "0 auto",
    height: 240
  },
  menuIcon: {
    color: "white"
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.35417em",
    textAlign: "left"
  },
  subheader: {
    color: "#E5E7E5",
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "left"
  },
  info: {
    margin: "24 24"
  },
  text: {
    color: "white",
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeight: 400
  }

});

class WorkLifeBalance extends React.Component {

  render() {
    const { classes } = this.props;
    const { entries, from, to } = item;

    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]; // x-axis labels

    let wlbData = []; // hours coded during and outside of work per day
    let codingAtWorkMinutes = []; // minutes coded at work per day
    let codingOutsideWorkMinutes = []; // minutes coded outside work per day

    let codingAtWorkTotalMinutes; // minutes for the entire week
    let codingOutsideWorkTotalMinutes; // minutes for the entire week

    let codingAtWorkTotalHours;
    let codingOutsideWorkTotalHours;
    let codingTotalHours;

    // create the dataset
    const workLifeBalanceCalcs = (item) => {
      // map data to two new arrays
      entries.map(day => {
        codingAtWorkMinutes.push(day.workMinutes);
        codingOutsideWorkMinutes.push(day.nonWorkMinutes);
        return true;
      });

      // create data for the chart
      let i;
      for (i = 0; i < days.length; i++) {
        wlbData[i] = {
          "Day": days[i],
          "Coding at work": parseFloat((codingAtWorkMinutes[i] / 60).toFixed(2)),
          "Coding outside work": parseFloat((codingOutsideWorkMinutes[i] / 60).toFixed(2)),
          "Coding at workColor": "#2C2E57",
          "Coding outside workColor": "#7E9EF5"

        };
      }
    }
    workLifeBalanceCalcs(item);

    // calculate totals
    function total(total, num) {
      return total + num;
    }
    if (wlbData && codingAtWorkMinutes.length > 0 && codingOutsideWorkMinutes.length > 0) {
      codingAtWorkTotalMinutes = codingAtWorkMinutes.reduce(total);
      codingOutsideWorkTotalMinutes = codingOutsideWorkMinutes.reduce(total);
    }
    codingAtWorkTotalHours = (codingAtWorkTotalMinutes / 60).toFixed(1);
    codingOutsideWorkTotalHours = (codingOutsideWorkTotalMinutes / 60).toFixed(1);
    codingTotalHours = (parseFloat(codingAtWorkTotalHours) + parseFloat(codingOutsideWorkTotalHours)).toFixed(1);

    // create 5 evenly-spaced tick values
    const tickValues = () => {
      const t = wlbData.map(d => {
        return Math.ceil(d[keys[0]] + d[keys[1]]);
      });
      const max = Math.max(...t);
      return [0, max * 0.25, max * 0.5, max * 0.75, max];
    };

    // create the message
    let message;
    if (codingAtWorkTotalMinutes > codingOutsideWorkTotalMinutes) {
      message = `Most of your code time occured during work hours (${codingAtWorkTotalHours} out of ${codingTotalHours} total hours).`;
    } else {
      message = `Most of your code time occured during nights or on weekends (${codingOutsideWorkTotalHours} out of ${codingTotalHours} total hours).`;
    }

    // create legend
    const keys = ["Coding at work", "Coding outside work"];
    const legend = [
      {
        name: `Coding at work`,
        color: "#2C2E57"
      },
      {
        name: `Coding outside of work hours`,
        color: "#7E9EF5"
      }
    ];

    // create date range for the card subheader
    const fromDateLabel = moment.unix(parseInt(from, 10)).format("ddd, MMM D");
    const toDateLabel = moment.unix(parseInt(to, 10)).format("ddd, MMM D");

    return (
      <React.Fragment>
        <Card className={classes.card} elevation={0}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar aria-label="Work-life balance" className={classes.avatar}>
                <EventAvailableTwoTone />
              </Avatar>
            }
            action={
              <IconButton aria-label='Menu Icon'>
                <MoreVert className={classes.menuIcon} />
              </IconButton>
            }
            title="Work-life balance"
            subheader={`Week of ${fromDateLabel} to ${toDateLabel}`}
          />
          <CardContent>
            <div>
              <Legend data={legend} />
            </div>
            <div className={classes.container} >
              <BarChart
                data={wlbData}
                keys={keys}
                tickValues={tickValues()}
                index={"Day"}
                groupMode={"stacked"}
                layout={"vertical"}
                colorBy={function (e) {
                  var t = e.id;
                  return e.data["".concat(t, "Color")];
                }}
              />
            </div>
            <div className={classes.info}>
              <Message>
                <Typography className={classes.text}>
                  {message}
                </Typography>
              </Message>
            </div>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WorkLifeBalance);