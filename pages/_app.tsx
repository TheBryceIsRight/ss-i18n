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
import ThemeContext from '../components/Theme';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../translations/config';
import TranslateIcon from '@material-ui/icons/Translate';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import SendIcon from '@material-ui/icons/Send';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';




const themeContext = {
  name: 'dark',
  type: [
    'light',
    'dark'
  ],
  switch: true,
  language: [
    'en',
    'fr',
    'pl',
    'es'
  ],
  index: 0,
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
    themeContext.switch = darkState ? false : true ;
  };
  

  let theme = darkState ? lightTheme : darkTheme;

  theme = responsiveFontSizes(theme);

	useEffect(() => {
    setIsMounted(true)}, [])


  const NavigationBar: React.FC = () => {
  
  const classes = useStyles();

  const { t,  locale} = useTranslation()

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

  /////////////////////////////
  //Language Selector
  /////////////////////////////

  const router = useRouter();

  const [languageAnchorEl, setlanguageAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setlanguageAnchorEl(null);
    themeContext.index = index;
    const { myValue } = event.currentTarget.dataset;
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${myValue}`));
  };

  const handleLanguageMenuOpen = (event: any) => {
    setlanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setlanguageAnchorEl(null);
  };

  ///////////////////////////
  //End of Language Selector
  ///////////////////////////

  function Logo() {
    if (!darkState) {
      return (
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
        <ButtonBase>
        <img src='/Elavon_logo_white.svg' alt='Elavon' height="36"/>
        </ButtonBase>
      </Link>
      );
    } else {
    return (
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
        <ButtonBase>
        <img src='/Elavon_logo.svg' alt='Elavon' height="36"/>
        </ButtonBase>
      </Link>
      );
    }
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
      <Link href="/api/login" passHref >
      <MenuItem>
          <ListItem>
            <ListItemIcon>
              <VpnKeyIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                    {t("login")}
                  </Typography>
            </ListItemText>
          </ListItem>

      </MenuItem>
      </Link>

      <Link href="/api/logout" passHref >
      <MenuItem>
        
          <ListItem>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                  {t("login")}
                  </Typography>
            </ListItemText>
          </ListItem>

      </MenuItem>
      </Link>

      <Link href="/profile" passHref >
      <MenuItem>
        
          <ListItem>
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                  {t("profile")}
                  </Typography>
            </ListItemText>
          </ListItem>

      </MenuItem>
      </Link>

      <Link href="/[lang]/settings" as={`/${locale}/settings`} passHref >
      <MenuItem>
        
          <ListItem>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                    {t("settings")}
                  </Typography>
            </ListItemText>
          </ListItem>

      </MenuItem>
      </Link>

      </Menu>
  );

  const languageMenuId = 'language settings';
  const renderLanguageMenu = (
    <React.Fragment>
      
      <Menu
        id={languageMenuId}
        anchorEl={languageAnchorEl}
        keepMounted
        open={Boolean(languageAnchorEl)}
        onClose={handleClose}
      >
        {locales.map((option, index) => (
          <MenuItem
            key={option}
            data-my-value={[option]}
            id={languageNames[option]}
            selected={index === themeContext.index}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {languageNames[option]}
          </MenuItem>
        ))}
      </Menu>
  </React.Fragment> 
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
          <ListItemText primary={t("profile")} />
      </ListItem>
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuOpen}>
      <ListItem>
          <ListItemIcon><NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary={t("notifications")}/>
      </ListItem>
      </MenuItem>
      <MenuItem onClick={handleThemeChange} >
      <ListItem>
          <ListItemIcon><Brightness3Icon/>
          </ListItemIcon>
          <ListItemText primary={t("dark_mode")} />
      </ListItem>
      </MenuItem>
      <MenuItem onClick={handleLanguageMenuOpen}>
      <ListItem>
          <ListItemIcon><TranslateIcon/>
          </ListItemIcon>
          <ListItemText primary={t("language")} />
      </ListItem>
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
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
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
          <ListItemText primary={t("dashboard")} />
      </ListItem>
      </Link>

      <Link href="/[lang]/orders" as={`/${locale}/orders`} passHref>
      <ListItem button>
          <ListItemIcon><LocalMallIcon/>
          </ListItemIcon>
          <ListItemText primary={t("your_orders")} />
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
          <ListItemText primary={t("invoices")} />
      </ListItem>
      </Link>
      <Divider/>
      <ListSubheader component="div" id="nested-list-subheader">
      Marketing
      </ListSubheader>
      <Link href="/[lang]/learn_more_starter" as={`/${locale}/learn_more_starter`} passHref>
      <ListItem button>
          <ListItemIcon><SmartphoneIcon/>
          </ListItemIcon>
          <ListItemText primary='Talech Mobile' />
      </ListItem>
      </Link>
      <Link href="/[lang]/three" as={`/${locale}/three`} passHref>
      <ListItem button>
          <ListItemIcon><ThreeDRotationIcon/>
          </ListItemIcon>
          <ListItemText primary='3D Model' />
      </ListItem>
      </Link>
      <Link href="/[lang]/three2" as={`/${locale}/three2`} passHref>
      <ListItem button>
          <ListItemIcon><ThreeDRotationIcon/>
          </ListItemIcon>
          <ListItemText primary='3D Figma' />
      </ListItem>
      </Link>
      <Link href="/[lang]/three3" as={`/${locale}/three3`} passHref>
      <ListItem button>
          <ListItemIcon><ThreeDRotationIcon/>
          </ListItemIcon>
          <ListItemText primary='3D Particles' />
      </ListItem>
      </Link>
      <Divider/>
      <ListSubheader component="div" id="nested-list-subheader">
      {t("quick_actions")}
      </ListSubheader>
      <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref>
      <ListItem button>
          <ListItemIcon><AttachMoneyIcon/>
          </ListItemIcon>
          <ListItemText primary={t("take_a_payment")} />
      </ListItem>
      </Link>
      <Link href="/[lang]/send_an_invoice" as={`/${locale}/send_an_invoice`} passHref>
      <ListItem button>
          <ListItemIcon><SendIcon/>
          </ListItemIcon>
          <ListItemText primary={t("send_an_invoice")} />
      </ListItem>
      </Link>
      <Link href="/[lang]/finish_registration" as={`/${locale}/finish_registration`} passHref>
      <ListItem button>
          <ListItemIcon><AssignmentIcon/>
          </ListItemIcon>
          <ListItemText primary= {t("finish_signing_up")} />
      </ListItem>
      </Link>
      </List>
      </Router>
      </div>
  );

{/*End of Top */}
    
    
    return (
      
    
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow:'none'}}>
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
                <Tooltip title={t("language")}>
                  <IconButton
                    edge='end'
                    aria-label={t("language")}
                    aria-haspopup='true'
                    onClick={handleLanguageMenuOpen}
                    color='primary'>
                      <TranslateIcon/>
                    </IconButton>
                  </Tooltip>
                </div>
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("dark_mode")}>
                  <IconButton
                    edge="end"
                    aria-label={t("dark_mode")}
                    aria-haspopup="false"
                    onClick={handleThemeChange}
                    color="primary"
                  >
                    <Brightness3Icon />
                  </IconButton>
                  </Tooltip>
                </div>
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("notifications")}>
                  <IconButton
                    edge="end"
                    aria-label={t("notifications")}
                    aria-controls={notificationsMenuId}
                    aria-haspopup="true"
                    onClick={handleNotificationMenuOpen}
                    color="primary"
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
                </div>
                
  
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("profile")}>
                  <IconButton
                      aria-label={t("profile")}
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="primary"
                    >
                      <AccountCircle />
                    </IconButton>
                </Tooltip>
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
            {renderLanguageMenu}
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
    <Media at="mo">
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