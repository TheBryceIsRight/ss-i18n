import React from "react";
import moment from "moment";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVert from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

import Sankey from '../components/sankey';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

import item from "../public/item"; // import data

const styles = theme => ({
  card: {
    maxWidth: 748,
    margin: "24px auto",
    backgroundColor: '#D3E1FE',
  },
  avatar: {
    background: "#1A1B36",
    color: "#FFFFFF"
  },
  container: {
    margin: "0 auto",
    height: 350
  },
  menuIcon: {
    color: "#1A1B36"
  },
  title: {
    color: "#1A1B36",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.35417em",
    textAlign: "left"
  },
  subheader: {
    color: "#9A9999",
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


class SankeyCard extends React.Component {

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
              <Avatar aria-label="Sunburst Example" className={classes.avatar}>
                <SyncAltIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label='Menu icon'>
                <MoreVert className={classes.menuIcon} />
              </IconButton>
            }
            title="Sankey Example"
            subheader={`Flow data visualization`}
          />
          <CardContent>

            <div className={classes.container}>
              <Sankey />
            </div>

          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SankeyCard);