import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
import { Media, MediaContextProvider } from "../utils/media";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useTranslation from '../hooks/useTranslation';



{/*GridList styles */}
const useStyles1 = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1100,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}),
);




function Footer(){

    const classes = useStyles1();
    const { t } = useTranslation();


      return <React.Fragment>
        <MediaContextProvider>
        <Media lessThan='lg'>
        <br/>
        <br/>
          <List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader" color='primary'>
              {t('company')}
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={t('home')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={t('aboutUs')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AnnouncementIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('news')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('careers')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('customerCenter')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HeadsetMicIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('contactUs')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider />

          <List 
          component="nav" 
          aria-label="customer service links"
          subheader={
            <ListSubheader component="div" id="customer-service-list-subheader" color='primary'>
              {t('customerService')}
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-800-725-1243"  secondary={t("alwaysAvailable")} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
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
              {t('sales')}
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-877-774-4090" secondary={t('mondayToFriday')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
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
              {t('socialMedia')}
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
              {t('legal')} 
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <PolicyIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={t('privacyPolicy')}  primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          </Media>

          {/*Desktop View */}

          <Media greaterThanOrEqual='lg'>
            <GridList cellHeight='auto' className={classes.gridList} spacing={10}>
              <GridListTile>
              <List 
          component="nav" 
          aria-label="company links"
          subheader={
            <ListSubheader component="div" id="company-list-subheader" color='primary'>
              {t('company')}
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={t('home')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={t('aboutUs')}  primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AnnouncementIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('news')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('careers')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('customerCenter')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HeadsetMicIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={t('contactUs')}  primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
          <Divider/>
          <List 
          component="nav" 
          aria-label="legal links"
          subheader={
            <ListSubheader component="div" id="legal-list-subheader" color='primary'>
              {t('legal')} 
            </ListSubheader>
          }
          >
            <ListItem button>
              <ListItemIcon>
                <PolicyIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={t('privacyPolicy')}  primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
            </ListItem>
          </List>
              </GridListTile>
              <GridListTile>
              <List 
          component="nav" 
          aria-label="customer service links"
          subheader={
            <ListSubheader component="div" id="customer-service-list-subheader" color='primary'>
              {t('customerService')}
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-800-725-1243"  secondary={t("alwaysAvailable")} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}} />
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
              {t('sales')}
            </ListSubheader>
          }
          
          >
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary="+1-877-774-4090" secondary={t('mondayToFriday')} primaryTypographyProps={{color:'primary'}} secondaryTypographyProps={{color:'secondary'}}/>
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
              {t('socialMedia')}
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
              </GridListTile>
            </GridList>
          </Media>
          </MediaContextProvider>
          </React.Fragment>
}
  
  export default Footer;
