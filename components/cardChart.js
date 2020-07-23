import React from "react";
import moment from "moment";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EventAvailableTwoTone from "@material-ui/icons/EventAvailableTwoTone";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TimelineIcon from '@material-ui/icons/Timeline';
import MoreVert from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

import LineGraph from '../components/line';
import Sunburst from '../components/sunburst';
import Sankey from '../components/sankey';
import SankeyCard from '../components/sankeyCard';
import Chord from '../components/Chord';

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
    height: 350
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
    color: "#919eab",
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



class CardChart extends React.Component {

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <Card className={classes.card} elevation={0}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar aria-label="Line Chart Example" className={classes.avatar}>
                <TimelineIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label='Menu icon'>
                <MoreVert className={classes.menuIcon} />
              </IconButton>
            }
            title="Line Chart Example"
            subheader={`Week of Sun, Jun 28 to Sat, Jul 4`}
          />
          <CardContent>

            <div className={classes.container}>
              <LineGraph />
            </div>

          </CardContent>
        </Card>
        <Card className={classes.card} elevation={0}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar aria-label="Sunburst Example" className={classes.avatar}>
                <WbSunnyIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label='Menu icon'>
                <MoreVert className={classes.menuIcon} />
              </IconButton>
            }
            title="Sunburst Example"
            subheader={`Hierarchy data visualization`}
          />
          <CardContent>

            <div className={classes.container}>
              <Sunburst />
            </div>

          </CardContent>
        </Card>
        <Card className={classes.card} elevation={0}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar aria-label="Chord Example" className={classes.avatar}>
                <WbSunnyIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label='Menu icon'>
                <MoreVert className={classes.menuIcon} />
              </IconButton>
            }
            title="Sunburst Example"
            subheader={`Hierarchy data visualization`}
          />
          <CardContent>

            <div className={classes.container}>
              <Chord />
            </div>

          </CardContent>
        </Card>
        
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CardChart);