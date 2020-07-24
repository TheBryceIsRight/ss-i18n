import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import PublicIcon from '@material-ui/icons/Public';
import Head from 'next/head';
import DashboardIcon from '@material-ui/icons/Dashboard';


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
    typography: {
      color: 'black',
    },


  }));

  
function Dashboard(props) {
    const { loading = false } = props;
    const classes = useStyles();

    const DynamicComponentWithNoSSR = dynamic(() => import('../components/unitedStatesMap' ), {
        ssr: false
      });

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
        <DynamicComponentWithNoSSR/>
        </React.Fragment>
}

export default Dashboard