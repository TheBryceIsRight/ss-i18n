import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../components/Theme'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MemoryRouter as Router } from 'react-router';
import '../styles/mapbox-gl.css';
import '../styles/global.css';
import { Media, MediaContextProvider } from "../utils/media";


import Link from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Menu,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { fade } from '@material-ui/core/styles'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert'; 
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MessageIcon from '@material-ui/icons/Message';
import useTranslation from '../hooks/useTranslation';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import LocaleSwitcher from '../components/LocaleSwitcher';
import ThemeContext from '../components/Theme';



const themeContext = {
  name: 'dark',
  type: [
    'light',
    'dark'
  ],
  switch: true,
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
      margin:0,
    },
    list: {
        width: 'auto',
      },
      fullList: {
        width: 'auto',
      },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 2,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'primary',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


function MyApp({ Component, pageProps }: AppProps) {

  const containerSmall = {
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerMedium = {
    maxWidth: '45rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerLarge = {
    maxWidth: '56rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerHuge = {
    maxWidth: '72rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const [isMounted, setIsMounted] = useState(false);
	const [darkState, setDarkState] = useState(true);

	const handleThemeChange = () => {
    setDarkState(!darkState);
    themeContext.name = darkState ? themeContext.type[0] : themeContext.type[1] ;
    themeContext.switch = darkState ? true : false ;
  };

  let theme = darkState ? darkTheme : lightTheme
  
  theme = responsiveFontSizes(theme);

	useEffect(() => {
    setIsMounted(true)}, [])


  const NavigationBar: React.FC = () => {
  
    const classes = useStyles();
  
    const { locale} = useTranslation()
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isNotificationsMenuOpen = Boolean(notificationsAnchorEl);
  
    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleNotificationMenuOpen = (event: any) => {
      setNotificationsAnchorEl(event.currentTarget);
  };
  
  
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
  
    const handleNotificationsMenuCLose  = () => {
      setNotificationsAnchorEl(null);
  };
  
    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    function Logo() {
      if (darkState) {
        return <img src='/Elavon_logo_white.svg' alt='Elavon' height="80%"/>;
      }
      return <img src='/Elavon_logo.svg' alt='Elavon' height="80%"/>;
    }
  
  
    const menuId = 'primary-search-account-menu';
  
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem>
          <Link href="/api/login" passHref >
            <ListItem>
              <ListItemIcon>
                <VpnKeyIcon/>
              </ListItemIcon>
              <ListItemText>
                    <Typography>
                      Login
                    </Typography>
              </ListItemText>
            </ListItem>
            </Link>
  
        </MenuItem>
        <MenuItem>
          <Link href="/api/logout" passHref >
            <ListItem>
              <ListItemIcon>
                <ExitToAppIcon/>
              </ListItemIcon>
              <ListItemText>
                    <Typography>
                      Logout
                    </Typography>
              </ListItemText>
            </ListItem>
            </Link>
  
        </MenuItem>
        <MenuItem>
          <Link href="/profile" passHref >
            <ListItem>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText>
                    <Typography>
                      Profile
                    </Typography>
              </ListItemText>
            </ListItem>
            </Link>
  
        </MenuItem>
        <MenuItem>
          <Link href="/[lang]/settings" as={`/${locale}/settings`} passHref >
            <ListItem>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText>
                    <Typography>
                      Settings
                    </Typography>
              </ListItemText>
            </ListItem>
            </Link>
  
        </MenuItem>
        </Menu>
    );
  
    const notificationsMenuId = 'notifications-menu';
    const renderNotifcationsMenu = (
        <Menu
        anchorEl={notificationsAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={notificationsMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationsMenuOpen}
        onClose={handleNotificationsMenuCLose}
        >
        <MenuItem>
        All notifications are read!
        </MenuItem>
        </Menu>
    );
  
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem onClick={handleProfileMenuOpen}>
        <ListItem>
            <ListItemIcon><AccountCircle />
            </ListItemIcon>
            <ListItemText primary='Profile' />
        </ListItem>
        </MenuItem>
        <MenuItem onClick={handleNotificationMenuOpen}>
        <ListItem>
            <ListItemIcon><NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary='Notifications' />
        </ListItem>
        </MenuItem>
        <MenuItem onClick={handleThemeChange} >
        <ListItem>
            <ListItemIcon><Brightness3Icon/>
            </ListItemIcon>
            <ListItemText primary='Dark Mode' />
        </ListItem>
        </MenuItem>
        <MenuItem >
        <LocaleSwitcher/>
        </MenuItem>
        </Menu>
    );
  
  
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
        checkedA: true,
        checkedB: true,
    });
  
    const toggleDrawer = (anchor:any, open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
  
        setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor:any) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        //role="navigation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <Router>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              DIY Sales
            </ListSubheader>
        }
        >
        <Link href="/[lang]/diy" as={`/${locale}/diy`} passHref>
        <ListItem button>
            <ListItemIcon><LoyaltyIcon/>
            </ListItemIcon>
            <ListItemText primary='DIY Sales Demo' />
        </ListItem>
        </Link>
  
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref>
        <ListItem button>
            <ListItemIcon><DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItem>
        </Link>
  
        <Link href="/[lang]/orders" as={`/${locale}/orders`} passHref>
        <ListItem button>
            <ListItemIcon><LocalMallIcon/>
            </ListItemIcon>
            <ListItemText primary='Your Orders' />
        </ListItem>
        </Link>
        <Link href="/[lang]/sales" as={`/${locale}/sales`} passHref>
        <ListItem button>
            <ListItemIcon><AccountBalanceWalletIcon/>
            </ListItemIcon>
            <ListItemText primary='Sales' />
        </ListItem>
        </Link>
        <Link href="/[lang]/invoices" as={`/${locale}/invoices`} passHref>
        <ListItem button>
            <ListItemIcon><MessageIcon/>
            </ListItemIcon>
            <ListItemText primary='Invoices' />
        </ListItem>
        </Link>
        </List>
        </Router>
        </div>
    );
  
  {/*End of Top */}
    
    
    return (
      
    
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
              <Toolbar disableGutters={true}>
                <React.Fragment>
                <IconButton
                    className={classes.menuButton}
                    color="primary"
                    aria-label="open menu"
                    onClick={toggleDrawer('left', true)}
                    > 
                <MenuIcon />
                </IconButton>   
                <Drawer 
                    anchor={'left'} 
                    open={state['left']} 
                    onClose={toggleDrawer('left', false)}>{list('left')}
                </Drawer>
                </React.Fragment>
                <Link href="/[lang]/" as={`/${locale}/`} passHref >
                <Logo/>
                </Link>
                  
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <LocaleSwitcher/>
                </div>
                <div className={classes.sectionDesktop}>
                  <IconButton
                    edge="end"
                    aria-label="Dark mode"
                    aria-haspopup="false"
                    onClick={handleThemeChange}
                    color="primary"
                  >
                    <Brightness3Icon />
                  </IconButton>
                </div>
                <div className={classes.sectionDesktop}>
                  <IconButton
                    edge="end"
                    aria-label="Notifications menu"
                    aria-controls={notificationsMenuId}
                    aria-haspopup="true"
                    onClick={handleNotificationMenuOpen}
                    color="primary"
                  >
                    <NotificationsIcon />
                  </IconButton>
                </div>
                
  
                <div className={classes.sectionDesktop}>
                  <IconButton
                    edge="end"
                    aria-label="Account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="primary"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="primary"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            <br/>
            {renderMobileMenu}
            {renderMenu}
            {renderNotifcationsMenu}
          </div>
    );
    };


  return (
    <ThemeContext.Provider value={themeContext.switch}>
  <MediaContextProvider>
  <Media at="sm">
  <div style={containerSmall} >
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <nav role='navigation'>
        <NavigationBar/>
        </nav>
        <main role='main'>
        {isMounted && <Component {...pageProps} />}
        <br/>
        </main>
        <div role='contentinfo'>
        </div>
    </ThemeProvider>
    </div>
    </Media>
    <Media at="md">
      <div style={containerMedium} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav role='navigation'>
            <NavigationBar/>
            </nav>
            <main role='main'>
            {isMounted && <Component {...pageProps} />}
            <br/>
            </main>

        </ThemeProvider>
      </div>
    </Media>
    <Media at="lg">
      <div style={containerLarge} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav role='navigation'>
            <NavigationBar/>
            </nav>
            <main role='main'>
            {isMounted && <Component {...pageProps} />}
            <br/>
            </main>

        </ThemeProvider>
      </div>
    </Media>
    <Media greaterThan="lg">
      <div style={containerHuge} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav role='navigation'>
            <NavigationBar/>
            </nav>
            <main>
            {isMounted && <Component {...pageProps} />}
            <br/>
            </main>
            
        </ThemeProvider>
      </div>
    </Media>
    </MediaContextProvider> 
    </ThemeContext.Provider> 
    )
}

export default MyApp