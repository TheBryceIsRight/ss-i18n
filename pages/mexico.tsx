import { Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PublicIcon from '@material-ui/icons/Public';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'


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

const DynamicComponentWithNoSSR = dynamic(() => import('../components/mexicoMap' ), {
    ssr: false
});


function Mexico() {
    const classes = useStyles();

    return <React.Fragment>
      <Head>
        <title>
        Mexico
        </title>
      </Head>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" href="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <PublicIcon className={classes.icon} />
                Mexico
            </Typography>
          </Breadcrumbs>
        <br/>
          <Typography variant='h1'>Mexico</Typography>
        <br/>
        <br/>
        <DynamicComponentWithNoSSR/>
    </React.Fragment> 
}

export default Mexico