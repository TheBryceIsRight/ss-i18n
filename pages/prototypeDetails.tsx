import { Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';
import SmsIcon from '@material-ui/icons/Sms';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DoneIcon from '@material-ui/icons/Done';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.3),
      width: 20,
      height: 20,
    },
  }));

function PrototypeDetails() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };

    return <React.Fragment><Head>
          <title>
            Item Details
          </title>
        </Head>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Link
              color="inherit"
              href="/activeIssues"
              className={classes.link}
            >
              <ErrorIcon className={classes.icon} />
              Active Issues
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <DescriptionIcon className={classes.icon} />
              Details
            </Typography>
          </Breadcrumbs>
          <br/>  
          <br/>
          <Typography variant='h1'>Item Details</Typography>
        <br/>
        <br/>
          <List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader">
              Issue Details
            </ListSubheader>
          }
          >
            <ListItem>
              <ListItemIcon>
                <SmsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="System Name" secondary='System 1'/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DonutLargeIcon />
              </ListItemIcon>
              <ListItemText primary="System Status" secondary='Available'  />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ModeCommentIcon />
              </ListItemIcon>
              <ListItemText primary="Issue Name" secondary='Issue 1'  />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Issue Status" secondary='Scheduled for maintenance' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlightTakeoffIcon />
              </ListItemIcon>
              <ListItemText primary="Start Time" secondary='6/26/2020 12:00 PM EST' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlightLandIcon />
              </ListItemIcon>
              <ListItemText primary="Expected Resolution"  secondary='6/26/2020 6:00 PM EST'/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Resolution" secondary='Pending maintenance completion'/>
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText primary="Description" secondary="1 update posted 37 min ago" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <ChangeHistoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Preparing to take system offline for maintenance" secondary='6/26/2020 9:16 PM EST' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChangeHistoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Issue moved to priority maintenance queue" secondary='6/25/2020 5:27 PM EST' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChangeHistoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Issue logged" secondary='6/25/2020 4:13 PM EST'/>
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          </React.Fragment>
}

export default PrototypeDetails