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
import Grid from '@material-ui/core/Grid'
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
import Error from '@material-ui/icons/Error';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';


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


  const useStyles1 = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });

  const useStyles3 = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const StyledRating = withStyles({
    iconFilled: {
      color: '#40BBEF'
    },
    iconHover: {
      color: '#73D6F9',
    },
  })(Rating);
  
  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const StyledButton = withStyles(() => ({
    root: {
      color: 'primary',
      backgroundColor: 'primary',
      borderRadius: 3,
      border: 2,
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

  const DynamicComponentWithNoSSR = dynamic(() => import('../components/mexicoMap' ), {
    ssr: false
  });

  
function Dashboard(props : any) {
    const { loading = false } = props;
    const classes = useStyles();
    const classes1 = useStyles1();
    const classes3 = useStyles3();
    const [value, setValue] = React.useState<number | null>(3);
    const [open, setOpen] = React.useState(true);
    const [hover, setHover] = React.useState(-1);
    const [openSnack, setOpenSnack] = React.useState(false);

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
        <Typography variant='h1'>{loading ? <Skeleton /> : 'Dashboard'}</Typography>
        <br/>
        <br/>
        <Grid container spacing={1} direction='row' alignItems='center' >
        <Grid item>
          <Typography variant="h2" color='primary'>
              {loading ? <Skeleton /> : 'Summary'}
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
                {/* How to pass a dynamically generated link through a material ui button
                <Link
                href={'/static/[dynamic]'}
                as={'/static/' + someJsString}
                passHref>
                <Button
                    component="a">
                    // other component ...
                </Button>
                </Link>
                
                */}

                {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
                <StyledButton>1</StyledButton>   
                )}
                <Typography variant="body2" align='center' color='primary'>
                    {loading ? <Skeleton /> : 'Active Issues'}
                </Typography>
                
            </Grid>
                <Grid item>

            {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
                <StyledButton>2</StyledButton>
                )}
                <Typography variant="body2" align='center' color='primary'>
                    {loading ? <Skeleton /> : 'Active Maintenance'}
                </Typography>
                </Grid>
                <Grid item>
                
                {loading ? (
                <Skeleton animation="wave" variant="rect" width={180} height={180} />
            ) : (
                <StyledButton>3</StyledButton>
                )}
                <Typography variant="body2" align='center' color='primary'>
                    {loading ? <Skeleton /> : 'Scheduled Maintenance'}
                </Typography>
                </Grid>
            </Grid>
        <br/>
        <br/>
      <br/>
        <Typography variant="h2" color='primary'>
            {loading ? <Skeleton /> : 'Regions'}
        </Typography>
      <br/>
      <br/>
      <Typography variant="h3" color='primary'>
        {loading ? <Skeleton /> : 'System 1'}
      </Typography>
        <Grid container direction={'column'} spacing={1}  alignItems='baseline'>
            <Grid item>
            <Typography variant="body1" color='primary'>
                {loading ? <Skeleton /> : 'Experiencing a service disruption'}
            </Typography>
        </Grid>
        </Grid>
        <br/>
        <Grid container direction={'row'} spacing={1}>
            <Grid item>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  startIcon={<CheckCircle />}>
                {'United States'}
                </Button>
        </Grid>
        <Grid item>
            <Button 
              startIcon={<Warning/>} 
              variant='outlined' 
              style={{borderColor: '#FFA631', 
              backgroundColor: '#FFA631', 
              color: "#1A1B36" }}
              >Mexico</Button>
        </Grid>
        <Grid item>
            <Button 
              startIcon={<Error style={{color: '#FFA631' }} />} 
              variant='outlined' 
              style={{borderColor: '#FFA631' }}
              >Canada</Button>
        </Grid>
        <Grid item>
          <Button 
            startIcon={<BuildIcon style={{color: '#7E9EF5' }}/>} 
            variant='outlined' 
            style={{borderColor: '#7E9EF5'}}
            >Europe</Button>
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
                {loading ? <Skeleton /> : 'Experiencing a service disruption'}
            </Typography>
        </Grid>
        </Grid>
        <br/>
        <Grid container direction={'row'} spacing={1}>
            <Grid item>
                <Button variant="outlined" startIcon={<CheckCircle />}>
                {'United States'}
                </Button>
        </Grid>
        <Grid item>
          <Button 
            startIcon={<Warning/>} 
            variant='outlined' 
            style= {{borderColor: '#FFA631', 
                    backgroundColor: '#FFA631', 
                    color: "#1A1B36" }}
            >Mexico</Button>
        </Grid>
        <Grid item>
            <Button 
            startIcon={<Error style={{color: '#FFA631' }} />} 
            variant='outlined' 
            style={{borderColor: '#FFA631' }}
            >Canada</Button>
        </Grid>
        <Grid item>
            <Button startIcon={<BuildIcon style={{color: '#7E9EF5' }}/>} 
            variant='outlined' 
            style={{borderColor: '#7E9EF5'}}
            >Europe</Button>
        </Grid>
        </Grid>
        <br/>
        <br/>

        <Typography variant='h2'>{loading ? <Skeleton /> : 'Locations'}</Typography>
        {/*Mapbox */}
        <DynamicComponentWithNoSSR/>
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
                primary="Canada" 
                primaryTypographyProps={{color:'primary'}} 
                secondary="1 system undergoing maintenance" 
                secondaryTypographyProps={{color:'secondary'}}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 1 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText primary="System 2 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 3 is undgergoing maintenance" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                    <CheckCircle color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary="Mexico" 
                primaryTypographyProps={{color:'primary'}} 
                secondary="All systems nominal"
                secondaryTypographyProps={{color:'secondary'}}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 1 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 2 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                  />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 3 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}} 
                  />
                </ListItem>
              </List>
            </Collapse>
            
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                    <CheckCircle color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary="Europe" 
                secondary="All systems nominal" 
                primaryTypographyProps={{color:'primary'}} 
                secondaryTypographyProps={{color:'secondary'}}
                />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 1 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 2 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 3 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <CheckCircle color='primary'/>
              </ListItemIcon>
              <ListItemText 
                primary="United States" 
                secondary="All systems nominal" 
                primaryTypographyProps={{color:'primary'}} 
                secondaryTypographyProps={{color:'secondary'}}
                />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 1 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 2 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}}
                    />
                </ListItem>
                <ListItem button >
                  <ListItemIcon>
                    <CheckCircle color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary="System 3 is available" 
                    primaryTypographyProps={{color:'primary'}} 
                    secondaryTypographyProps={{color:'secondary'}} 
                    />
                </ListItem>
              </List>
            </Collapse>

        </List>
        <br/>
        <br/>
        <Grid container spacing={1}  direction="column">
            <Grid item>
            
              <ThumbsUpDown color='primary'/>
              <Typography variant="body1" color='primary'>
                {loading ? <Skeleton /> : 'Was this page helpful?'}
              </Typography>
            </Grid>
            <Grid item>
            <div className={classes1.root}>
            <StyledRating
              name="customized-hover-feedback"
              defaultValue={2}
              value={value}
              getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<StarIcon fontSize="inherit" />}
              onChange={(_event, newValue) => {
                setValue(newValue);
                console.log('User rated this page ',newValue,' stars');
              }}
              onChangeActive={(_event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>
            
            </Grid>
          </Grid>
        </React.Fragment>
}

export default Dashboard