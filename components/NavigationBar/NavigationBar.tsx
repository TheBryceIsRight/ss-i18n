import React, { useState } from 'react';

import Routes from '../App/Routes';
import Link from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Menu,
  MenuList,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx';
import WithStyles from '@material-ui/core';
import { createMuiTheme, fade, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles'
import Checkbox from '../node_modules/@material-ui/core/Checkbox'
import { green } from '../node_modules/@material-ui/core/colors';
import CheckCircle from '@material-ui/icons/CheckCircle';

import Warning from '@material-ui/icons/Warning';
import Error from '@material-ui/icons/Error'
import BuildIcon from '@material-ui/icons/Build';
import dynamic from 'next/dynamic';
import Copyright from '../components/copyright';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import PhoneIcon from '@material-ui/icons/Phone';
import TranslateIcon from '@material-ui/icons/Translate';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PolicyIcon from '@material-ui/icons/Policy';
import PublicIcon from '@material-ui/icons/Public';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MaterialLink from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import MuiAlert from '@material-ui/lab/Alert';
import StarIcon from '@material-ui/icons/Star';
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
  grey
} from "@material-ui/core/colors";
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import AssessmentIcon from '@material-ui/icons/Assessment';
import UpdateIcon from '@material-ui/icons/Update';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BugReportIcon from '@material-ui/icons/BugReport';  
import { blue } from '@material-ui/core/colors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { MemoryRouter as Router } from 'react-router'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { locales, languageNames, defaultLocale } from '../../translations/config';
import { LocaleContext } from '../../context/LocaleContext';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



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

const NavigationBar: React.FC = (props: any) => {

    const router = useRouter()
    const { locale } = React.useContext(LocaleContext)

    const handleLocaleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
        const regex = new RegExp(`^/(${locales.join('|')})`)
        router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
        },
        [router]
    )

    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorTr, setAnchorTr] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isTranslateMenuOpen = Boolean(anchorTr);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTranslateMenuOpen = (event: any) => {
        setAnchorTr(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorTr(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId2 = 'translate-menu';

    {/*
    <select value={locale} onChange={handleLocaleChange}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {languageNames[locale]}
        </option>
      ))}
    </select>
    */}

    const renderTranslateMenu = (
        <Menu
        anchorEl={anchorTr}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId2}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isTranslateMenuOpen}
        onClose={handleMenuClose}
        >

        <MenuItem key='en' value={locale}>
        <Link
            href="/en"
            passHref>
            <a style={{color:'#9A9999'}}>{languageNames['en']}</a>
        </Link>
        </MenuItem>
        <MenuItem key='fr' value='fr'>
        <Link
            href="/fr"
            passHref>
            <a style={{color:'#9A9999'}}>{languageNames['fr']}</a>
        </Link>
        </MenuItem>
        <MenuItem key='pl' value={locale}>
        <Link
            href="/pl"
            passHref>
            <a style={{color:'#9A9999'}}>{languageNames['pl']}</a>
        </Link>
        </MenuItem>
        </Menu>
    );

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
        <Link
            href="/api/login"
            passHref>
            <a>Login</a>
        </Link>
        </MenuItem>
        <MenuItem>
        <Link
            href="/api/profile"
            passHref>
            <a>Profile</a>
        </Link>
        </MenuItem>
        <MenuItem>
        <Link
            href="/api/logout"
            passHref>
            <a>Logout</a>
        </Link>
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
        <MenuItem onClick={handleTranslateMenuOpen}>
            
            <IconButton aria-label="show 1 new notifications" color="primary">
            <TranslateIcon />
            </IconButton>
            <p>English</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="primary"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
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
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        //role="navigation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <Router>
        <List>
            <ListItem button>
                <ListItemIcon><AssessmentIcon/></ListItemIcon>
                <ListItemText primary='All Systems' />
            </ListItem>
            <Link
            href="/activeIssues"
            passHref>
            <ListItem button>
                <ListItemIcon><ErrorIcon/></ListItemIcon>
                <ListItemText primary='Active Issues' />
            </ListItem>
            </Link>
            <Link
            href="/activeMaintenance"
            passHref>
            <ListItem button>
                <ListItemIcon><BuildIcon/></ListItemIcon>
                <ListItemText primary='Active Maintenance' />
            </ListItem>
            </Link>
            <Link
            href="/scheduledMaintenance"
            passHref>
            <ListItem button>
                <ListItemIcon><UpdateIcon/>
                </ListItemIcon>
                <ListItemText primary='Scheduled Maintenance' />
            </ListItem>
            </Link>
            
            
        </List>
        <Divider />
        <List>
        <Link
            href="/canada"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/>
                </ListItemIcon>
                <ListItemText primary='Canada' />
            </ListItem>
            </Link>
            <Link
            href="/europe"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/></ListItemIcon>
                <ListItemText primary='Europe' />
            </ListItem>
            </Link>
            <Link
            href="/mexico"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/></ListItemIcon>
                <ListItemText primary='Mexico' />
            </ListItem>
            </Link>
            <Link
            href="/unitedStates"
            passHref>
            <ListItem button>
                <ListItemIcon><PublicIcon/>
                </ListItemIcon>
                <ListItemText primary='United States' />
            </ListItem>
            </Link>
            
        </List>
        <Divider />
        
        <List>
        <ListItem>
            <ListItemIcon>
            <FormControlLabel label='Dark mode'
            control={<Switch name="darkSwitchSideBar" />}
            />
            </ListItemIcon>
            </ListItem>
            <Link
            href="/barChart"
            passHref>
            <ListItem button>
            <ListItemIcon><BugReportIcon/></ListItemIcon><ListItemText primary='Chart Debugging'/>
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
                
                  
                  <Link href='/'>
                  <a>
                    <Typography color="primary" className={classes.title} variant="h6" >
                      Status
                    </Typography>
                  </a>
                  
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
                    aria-label="change language" 
                    color="primary"
                    aria-haspopup="true"
                    aria-controls={menuId2}
                    onClick={handleTranslateMenuOpen}>
                    <TranslateIcon />
                  </IconButton>
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
             {/*
            <select value={locale} onChange={handleLocaleChange}>
            {locales.map(locale => (
                <option key={locale} value={locale}>
                {languageNames[locale]}
                </option>
            ))}
            </select>
            */}
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={locale}
                onChange={handleLocaleChange}
                >
                {locales.map(locale => (
                    <MenuItem key={locale} value={locale}>{languageNames[locale]}</MenuItem>
                ))}
                </Select>
            </FormControl>
            {renderMobileMenu}
            {renderTranslateMenu}
            {renderMenu}
          </div>
    );
    };

export default NavigationBar;