import React from 'react';

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
import Divider from '@material-ui/core/Divider';


import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';

import BugReportIcon from '@material-ui/icons/BugReport';  
import { MemoryRouter as Router } from 'react-router'
import { Link as MuiLink} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import useTranslation from '../../hooks/useTranslation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MessageIcon from '@material-ui/icons/Message';


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
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
            >
            <AccountCircle />
            </IconButton>
            <Typography>Profile</Typography>
        </MenuItem>

        <MenuItem onClick={handleNotificationMenuOpen}>
          <IconButton
            aria-label="notifications"
            aria-controls={notificationsMenuId}
            aria-haspopup="true"
            color="primary"
          >
            <NotificationsIcon />
          </IconButton>
          <Typography>Notifications</Typography>
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
                  <MuiLink>
                    <Typography color="primary" className={classes.title} variant="h6" >
                      Elavon
                    </Typography>
                  </MuiLink>
                  </Link>
                    
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon color="primary"/>
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
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
                    aria-label="account of current user"
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

export default NavigationBar;