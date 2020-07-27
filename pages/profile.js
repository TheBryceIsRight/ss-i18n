import CustomTable from '../components/customTable';
import Layout, { siteTitle } from '../components/layout'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ErrorIcon from '@material-ui/icons/Error';
import DescriptionIcon from '@material-ui/icons/Description';
import PublicIcon from '@material-ui/icons/Public';
import dynamic from 'next/dynamic';
import Head from 'next/head'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles, responsiveFontSizes } from '@material-ui/core/styles'
import { useFetchUser } from '../lib/user'


let responsiveTheme = createMuiTheme();
responsiveTheme = responsiveFontSizes(responsiveTheme);



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

function ProfileCard({ user }) {
    return (
      <>  
        <div>
          <h2>Name: {user.name}</h2>  
          <img src={user.picture} alt="user picture" />
          <h2>Nickname: {user.nickname}</h2>
        </div>
      </>
    )
  };

function Profile(props) {
    const { user, loading } = useFetchUser({ required: true });

    const classes = useStyles();

    return <Layout>
        <Head>
          <title>
          Profile
          </title>
        </Head>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <AccountCircle className={classes.icon} />
                Profile
            </Typography>
          </Breadcrumbs>
        <br/>
        <ThemeProvider theme={responsiveTheme}>
          <Typography variant='h1'>{loading ? <Skeleton /> : 'Profile'}</Typography>
        </ThemeProvider>
        <br/>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    
  
        
    </Layout>
}

export default Profile