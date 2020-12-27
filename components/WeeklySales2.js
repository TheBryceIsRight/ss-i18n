import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import EventAvailableTwoTone from "@material-ui/icons/EventAvailableTwoTone";
import MoreVert from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

import BarChart from "./BarChart";
import Legend from "./Legend";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from '@material-ui/icons/Info';

import item from "../public/item1"; // import data


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = theme => ({
  avatar: {
    color: 'background.paper',
  },
  card: {
    margin: "24px auto",
  },
  container: {
    margin: "0 auto",
    height: 260
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.35417em",
    textAlign: "left"
  },
  subheader: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "left"
  },
  info: {
    margin: "20 20"
  },
  text: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeight: 400
  }

});


class WeeklySales2 extends React.Component {

  

  render() {
    
    const card_width = '350px';
    const { classes } = this.props;
    const { entries } = item;

    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri"]; // x-axis labels

    const wlbData = []; // hours coded during and outside of work per day
    const codingAtWorkMinutes = []; // minutes coded at work per day
    const codingOutsideWorkMinutes = []; // minutes coded outside work per day

    let codingAtWorkTotalMinutes; // minutes for the entire week
    let codingOutsideWorkTotalMinutes; // minutes for the entire week

    let codingAtWorkTotalHours;
    let codingOutsideWorkTotalHours;
    let codingTotalHours;

    // create the dataset
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          "In-person": parseFloat((codingAtWorkMinutes[i] / 60).toFixed(2)),
          "Online": parseFloat((codingOutsideWorkMinutes[i] / 60).toFixed(2)),
          "In-personColor": "#1F77B4",
          "OnlineColor": "#FF7F0E"

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
    // eslint-disable-next-line prefer-const
    codingAtWorkTotalHours = (codingAtWorkTotalMinutes / 60).toFixed(1);
    // eslint-disable-next-line prefer-const
    codingOutsideWorkTotalHours = (codingOutsideWorkTotalMinutes / 60).toFixed(1);
    // eslint-disable-next-line prefer-const
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
      message = `Most of your sales were in-person (${codingAtWorkTotalHours} out of ${codingTotalHours} total hours).`;
    } else {
      message = `Most of your sales were online (${codingOutsideWorkTotalHours} out of ${codingTotalHours} total hours).`;
    }

    // create legend
    const keys = ["In-person", "Online"];
    const legend = [
      {
        name: `In-person`,
        color: "#1F77B4"
      },
      {
        name: `Online`,
        color: "#FF7F0E"
      }
    ];

    return (
      <React.Fragment>
        <Card className={classes.card} style={{maxWidth: card_width}}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar aria-label="Weekly Sales" className={classes.avatar}>
                <EventAvailableTwoTone color='background.paper' />
              </Avatar>
            }
            action={
              <IconButton aria-label='Menu Icon'>
                <MoreVert className={classes.menuIcon} />
              </IconButton>
            }
            title="Weekly Sales"
          />
          <CardContent>
            <div>
              <Legend data={legend} />
            </div>
            <div className={classes.container} aria-label='bar chart of weekly sales'>
              <BarChart
                aria-label='bar chart of weekly sales'
                alt='bar chart of weekly sales'
                role='group'
                data={wlbData}
                keys={keys}
                tickValues={tickValues()}
                index={"Day"}
                groupMode={"stacked"}
                layout={"vertical"}
                colorBy={function (e) {
                  const t = e.id;
                  return e.data["".concat(t, "Color")];
                }}
              />
            </div>
            <div className={classes.info}>
              <List>
              <ListItem>
                <ListItemIcon>
                  <InfoIcon/>
                </ListItemIcon>
                <ListItemText>{message}</ListItemText>
              </ListItem>
              </List>
              
            </div>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WeeklySales2);