import CustomTable from '../components/customTable';
import { Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BuildIcon from '@material-ui/icons/Build';
import Head from 'next/head'
import { makeStyles} from '@material-ui/core/styles'
import React from 'react'

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


function ActiveMaintenance() {
  
    const classes = useStyles();

    return <React.Fragment><Head>
          <title>Scheduled maintenance for all systems</title>
        </Head>
        <br/>
        
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link color="primary" href="/" className={classes.link}>
            <HomeIcon className={classes.icon} />
            Home
        </Link>
        <Typography color="textPrimary" className={classes.link}>
            <BuildIcon className={classes.icon} />
            Active Maintenance
        </Typography>
        </Breadcrumbs>
        <br/>
        <br/>
          <Typography variant='h1'>Active Maintenance</Typography>
        <br/>
        <br/>
        <CustomTable/>
        </React.Fragment>
}

export default ActiveMaintenance