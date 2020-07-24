import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import BuildIcon from '@material-ui/icons/Build';
import Divider from '@material-ui/core/Divider';

import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PolicyIcon from '@material-ui/icons/Policy';
import HomeIcon from '@material-ui/icons/Home';


class Footer extends Component {
    
  
    render() {
      return (
          <React.Fragment><List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader" color='primary'>
              Company
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Home" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="About us" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AnnouncementIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="News" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Careers" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Customer Center" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HeadsetMicIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Contact Us" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider />

          <List 
          component="nav" 
          aria-label="customer service links"
          subheader={
            <ListSubheader component="div" id="customer-service-list-subheader" color='primary'>
              Customer Service
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-800-725-1243"  secondary="Always available" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="custsvc@elavon.com" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider />
          <List 
          component="nav" 
          aria-label="sales links"
          subheader={
            <ListSubheader component="div" id="sales-list-subheader" color='primary'>
              Sales
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-877-774-4090" secondary="Monday - Friday, 9AM - 7PM EST" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="custsvc@elavon.com" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="social media links"
          subheader={
            <ListSubheader component="div" id="scocial-media-list-subheader" color='primary'>
              Social Media
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="Twitter" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <YouTubeIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="YouTube" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="LinkedIn" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="legal links"
          subheader={
            <ListSubheader component="div" id="legal-list-subheader" color='primary'>
              Legal
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PolicyIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Privacy &amp; Cookie Policy" primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          </React.Fragment>        
      );
    }
  }
  
  export default Footer;
