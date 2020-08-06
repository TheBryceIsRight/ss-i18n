import React from 'react';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Head from 'next/head';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Warning from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Media, MediaContextProvider } from "../../utils/media";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Badge from '@material-ui/core/Badge';
import FeedbackForm from '../../components/feedbackForm';
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import Footer from '../../components/footer';



function Alert(props : any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const useStyles = makeStyles((theme: Theme) => createStyles({
    link: {
      display: 'flex',
      underline: 'none',
    },
    icon: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.3),
      width: 20,
      height: 20,
    },
    typography: {
      color: 'black',
    },
  }));

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
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);


  const useStyles3 = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const StyledBadge = withStyles(() =>
    createStyles({
      badge: {
        padding: '14px 14px',
        fontSize: '20px'
      },
    }),
  )(Badge);

 
  const StyledButton = withStyles(() => ({
    root: {
      color: 'primary',
      backgroundColor: 'primary',
      borderRadius: 3,
      height: 48,
      fontSize: '60px', 
      maxWidth: '180px', 
      maxHeight: '180px', 
      minWidth: '150px', 
      minHeight: '150px',
      '&:hover': {
        backgroundColor: '#2C2E57',
        color: 'white',
        textDecoration:'none',
      },
    },
    label: {
      textTransform: 'capitalize',
    }
  }))(Button);

  const LongButton = withStyles(() => ({
    root: {
      color: 'primary',
      backgroundColor: 'primary',
      borderRadius: 3,
      padding: '15px 15px',
      height: 40,
      justifyContent: 'flex-start',
      fontSize: '30px', 
      minWidth: '400px', 
      minHeight: '70px',
      spacing: 15,
      '&:hover': {
        backgroundColor: '#2C2E57',
        color: 'white',
        textDecoration:'none',
      },
    },
    label: {
      textTransform: 'capitalize',

    }
  }))(Button);

  const DynamicComponentWithNoSSR = dynamic(() => import('../../components/SSMap' ), {
    ssr: false
  });

  
function Dashboard(props : any) {
    const { loading = false } = props;
    const classes = useStyles();
    const classes1 = useStyles1();
    const classes3 = useStyles3();
    const [open, setOpen] = React.useState(true);
    const [openSnack, setOpenSnack] = React.useState(false);
    const successGreen = '#2CC951';
    const { t } = useTranslation();

    const handleClick = () => {
        setOpen(!open);
      };
    
    const handleClickSnack = () => {
    setOpenSnack(true);
    };

    const handleClose = (_event : any, reason : any) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpenSnack(false);
    };

    return <React.Fragment><Head>
        <title>Dashboard</title>
      </Head>
      <MediaContextProvider>
        
        {/*Tablet & Mobile version */}
        <Media lessThan='xl'>
        <br/>
  
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              {t('home')}
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <DashboardIcon className={classes.icon} />
                {t('dashboard')}
            </Typography>
          </Breadcrumbs>
        <br/>

        <Typography variant='h1'>{t('dashboard')}</Typography>
        <br/>
        <br/>
        <Grid container spacing={1} direction='row' alignItems='center' >
        <Grid item>
          <Typography variant="h2" color='primary'>
              {t('summary')}
          </Typography>
        </Grid>
        <Grid item>
          <div className={classes3.root}>
          <Tooltip title="These are the top level numbers for issues and maintenance">
          <IconButton aria-label="help" color='primary' onClick={handleClickSnack}>
            <HelpIcon />
          </IconButton>
          </Tooltip>
          <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              You sucessfully clicked a button, congrats!
            </Alert>
          </Snackbar>
          </div>
        </Grid>
      </Grid>
        <Grid container direction={'row'} spacing={2} justify='space-evenly' alignItems='center'>
                <Grid item>
                {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
                <StyledButton>1</StyledButton>   
                )}
                <Typography variant="body2" align='center' color='primary'>
                    {t('activeIssues')}
                </Typography>
                
            </Grid>
                <Grid item>

            {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
                <StyledButton>2</StyledButton>
                )}
                <Typography variant="body2" align='center' color='primary'>
                {t('activeMaintenance')}
                </Typography>
                </Grid>
                <Grid item>
                
                {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
                <StyledButton>3</StyledButton>
                )}
                <Typography variant="body2" align='center' color='primary'>
                    {t('scheduledMaintenance')}
                </Typography>
                </Grid>
            </Grid>
        <br/>
        <br/>
      <br/>
        <Typography variant="h2" color='primary'>
            {t('regions')}
        </Typography>
      <br/>
      <br/>
      <Typography variant="h3" color='primary'>
      {t('system1')}
      </Typography>
        <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
            <Grid item>
            <Typography variant="body1" color='primary'>
                {t('serviceDisruption')}
            </Typography>
        </Grid>
        </Grid>
        <br/>
        <Grid container direction={'row'} spacing={1}>
            <Grid item>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  startIcon={<CheckCircle style={{ color: successGreen }}/>}>
                {t('unitedStates')}
                </Button>
        </Grid>
        <Grid item>
            <Button 
              startIcon={<Warning/>} 
              variant='outlined' 
              style={{borderColor: '#FFA631', 
              backgroundColor: '#FFA631', 
              color: "#1A1B36" }}
              >{t('mexico')}</Button>
        </Grid>
        <Grid item>
            <Button 
              startIcon={<Warning style={{color: '#FFA631' }} />} 
              variant='outlined' 
              style={{borderColor: '#FFA631' }}
              >{t('canada')}</Button>
        </Grid>
        <Grid item>
          <Button 
            startIcon={<BuildIcon style={{color: '#7E9EF5' }}/>} 
            variant='outlined' 
            style={{borderColor: '#7E9EF5'}}
            >{t('europe')}</Button>
        </Grid>
        </Grid>
        <br/>
        <br/>
        <Typography variant="h3" color='primary'>
        {loading ? <Skeleton /> : 'System 2'}
      </Typography>
        <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
            <Grid item>
            <Typography variant="body1" color='primary'>
            {t('serviceDisruption')}
            </Typography>
        </Grid>
        </Grid>
        <br/>
        <Grid container direction={'row'} spacing={1}>
            <Grid item>
                <Button variant="outlined" startIcon={<CheckCircle style={{ color: successGreen }}/>}>
                {t('unitedStates')}
                </Button>
        </Grid>
        <Grid item>
          <Button 
            startIcon={<Warning/>} 
            variant='outlined' 
            style= {{borderColor: '#FFA631', 
                    backgroundColor: '#FFA631', 
                    color: "#1A1B36" }}
            >{t('mexico')}</Button>
        </Grid>
        <Grid item>
            <Button 
            startIcon={<Warning style={{color: '#FFA631' }} />} 
            variant='outlined' 
            style={{borderColor: '#FFA631' }}
            >{t('canada')}</Button>
        </Grid>
        <Grid item>
            <Button startIcon={<BuildIcon style={{color: '#7E9EF5' }}/>} 
            variant='outlined' 
            style={{borderColor: '#7E9EF5'}}
            >{t('europe')}</Button>
        </Grid>
        </Grid>
        <br/>
        <br/>

        <Typography variant='h2'>{t('locations')}</Typography>
        {/*Mapbox */}
        <DynamicComponentWithNoSSR/>
        <br/>
        <Typography variant="h2" color='primary'>
              {t('countries')}
            </Typography>
        <List 
          component="nav" 
          aria-label="country list"
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <BuildIcon style={{ color: "#7E9EF5" }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('canada')}
                primaryTypographyProps={{color:'primary'}} 
                secondary={t('undergoingMain')}
                secondaryTypographyProps={{color:'secondary'}}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText primary={t("system2avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t('system3GettingFixed')} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('mexico')}
                primaryTypographyProps={{color:'primary'}} 
                secondary={t('systemsGood')}
                secondaryTypographyProps={{color:'secondary'}}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system2avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system3avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}} 
                  />
                </ListItem>
              </List>
            </Collapse>
            
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('europe')}
                secondary={t('systemsGood')}
                primaryTypographyProps={{color:'primary'}} 
                secondaryTypographyProps={{color:'secondary'}}
                />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system2avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system3avail")}  
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <CheckCircle style={{ color: successGreen }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('unitedStates')}
                secondary={t('systemsGood')}
                primaryTypographyProps={{color:'primary'}} 
                secondaryTypographyProps={{color:'secondary'}}
                />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system2avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system3avail")}  
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}} 
                    />
                </ListItem>
              </List>
            </Collapse>

        </List>
        <br/>
        <br/>
        <Footer/>
        </Media>

        {/*Desktop view */}
        <Media greaterThanOrEqual='xl'>
        <br/>
  
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <DashboardIcon className={classes.icon} />
                Dashboard
            </Typography>
          </Breadcrumbs>
        <br/>
        

        <Typography variant='h1'>{t('dashboard')}</Typography>
        <br/>
        <br/>
        
        <GridList cellHeight='auto' className={classes1.gridList} spacing={10}>
          <GridListTile>
          <Grid container spacing={1} direction='row' alignItems='center' >
          <Grid item>
            <Typography variant="h2" color='primary'>{t('summary')}</Typography>

          </Grid>
          <Grid item>
            <div className={classes3.root}>
            <Tooltip title="These are the top level numbers for issues and maintenance">
            <IconButton aria-label="help" color='primary' onClick={handleClickSnack}>
              <HelpIcon />
            </IconButton>
            </Tooltip>
              <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                You sucessfully clicked a button, congrats!
                </Alert>
              </Snackbar>
              </div>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <Grid container direction='column' spacing={8} justify='space-evenly' alignItems='center'>
                <Grid item>
                {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
              <StyledBadge badgeContent={5} color="secondary" anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }} >
                <LongButton>{t('activeIssues')}</LongButton>
              </StyledBadge>   
                )}
 
                
            </Grid>
                <Grid item>

            {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
              <StyledBadge badgeContent={3} color="secondary" anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }} >
                <LongButton>{t('activeMaintenance')}</LongButton>
                </StyledBadge>
                )}

                </Grid>
                <Grid item>
                
                {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
              <StyledBadge badgeContent={8} color="secondary" anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }} >
                <LongButton>{t('scheduledMaintenance')}</LongButton>
                </StyledBadge>
                )}
                
                </Grid>
            </Grid>
            </GridListTile>
            <GridListTile>
            <Typography variant='h2'>{t('locations')}</Typography>
            {/*Mapbox */}
            <DynamicComponentWithNoSSR/>
            </GridListTile>
            <GridListTile>
            <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
            <Grid item>
            <Typography variant="h2" color='primary'>
            {t('regions')}
            </Typography>
            <br/>
            <Typography variant="h3" color='primary'>
            {t('system1')}
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" color='primary'>
            {t('serviceDisruption')}
            </Typography>
          </Grid>
          </Grid>
          <br/>
          <Grid container direction={'row'} spacing={1}>
              <Grid item>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<CheckCircle style={{ color: successGreen }}/>}>
                  {t('unitedStates')}
                  </Button>
          </Grid>
          <Grid item>
              <Button 
                startIcon={<Warning/>} 
                variant='outlined' 
                style={{borderColor: '#FFA631', 
                backgroundColor: '#FFA631', 
                color: "#1A1B36" }}
                >{t('mexico')}</Button>
          </Grid>
          <Grid item>
              <Button 
                startIcon={<Warning style={{color: '#FFA631' }} />} 
                variant='outlined' 
                style={{borderColor: '#FFA631' }}
                >{t('canada')}</Button>
          </Grid>
          <Grid item>
            <Button 
              startIcon={<BuildIcon style={{color: '#7E9EF5' }}/>} 
              variant='outlined' 
              style={{borderColor: '#7E9EF5'}}
            >{t('europe')}</Button>
          </Grid>
          </Grid>
          <br/>
          <br/>
          <Typography variant="h3" color='primary'>
            {loading ? <Skeleton /> : 'System 2'}
          </Typography>
            <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
                <Grid item>
                <Typography variant="body1" color='primary'>
                {t('serviceDisruption')}
                </Typography>
            </Grid>
            </Grid>
            <br/>
            <Grid container direction={'row'} spacing={1}>
                <Grid item>
                    <Button variant="outlined" startIcon={<CheckCircle style={{ color: successGreen }}/>}>
                    {t('unitedStates')}
                    </Button>
            </Grid>
            <Grid item>
              <Button 
                startIcon={<Warning/>} 
                variant='outlined' 
                style= {{borderColor: '#FFA631', 
                        backgroundColor: '#FFA631', 
                        color: "#1A1B36" }}
                >{t('mexico')}</Button>
            </Grid>
            <Grid item>
                <Button 
                startIcon={<Warning style={{color: '#FFA631' }} />} 
                variant='outlined' 
                style={{borderColor: '#FFA631' }}
                >{t('canada')}</Button>
            </Grid>
            <Grid item>
                <Button startIcon={<BuildIcon style={{color: '#7E9EF5' }}/>} 
                variant='outlined' 
                style={{borderColor: '#7E9EF5'}}
                >{t('europe')}</Button>
            </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <FeedbackForm/> 

            </GridListTile> 
            <GridListTile>
            <Typography variant="h2" color='primary'>
              {t('countries')}
            </Typography>
            <br/>
            <List 
          component="nav" 
          aria-label="country list"
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <BuildIcon style={{ color: "#7E9EF5" }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('canada')} 
                primaryTypographyProps={{color:'primary'}} 
                secondary={t('undergoingMain')}
                secondaryTypographyProps={{color:'secondary'}}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText primary={t("system2avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t('system3GettingFixed')} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
              <CheckCircle style={{ color: successGreen }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('mexico')}
                primaryTypographyProps={{color:'primary'}} 
                secondary={t('systemsGood')}
                secondaryTypographyProps={{color:'secondary'}}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system2avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system3avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}} 
                  />
                </ListItem>
              </List>
            </Collapse>
            
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
              <CheckCircle style={{ color: successGreen }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('europe')}
                secondary={t('systemsGood')}
                primaryTypographyProps={{color:'primary'}} 
                secondaryTypographyProps={{color:'secondary'}}
                />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system2avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system3avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
              <CheckCircle style={{ color: successGreen }}/>
              </ListItemIcon>
              <ListItemText 
                primary={t('unitedStates')} 
                secondary={t('systemsGood')}
                primaryTypographyProps={{color:'primary'}} 
                secondaryTypographyProps={{color:'secondary'}}
                />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system1avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system2avail")}
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                  <CheckCircle style={{ color: successGreen }}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={t("system3avail")} 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}} 
                    />
                </ListItem>
              </List>
            </Collapse>

        </List>
            </GridListTile>
        </GridList>
        <br/>
        <br/>
        <Footer/>
        </Media>
        </MediaContextProvider>
        </React.Fragment>

}

export default withLocale(Dashboard) 