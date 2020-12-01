
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';

import StarterBundle from '../../components/StarterBundle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import StandardBundle from '../../components/StandardBundle';
import PremiumBundle from '../../components/PremiumBundle';
import { Media, MediaContextProvider } from "../../utils/media";



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
      width: 'auto',
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

  
 

function DIY() {

  const classes1 = useStyles1();

    return <React.Fragment>
      <Head>
        <title>
        DIY Sales Demo Testing
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Tablet & Mobile version */}
        <Media lessThan='md'>
          <Typography variant="h3" component="h2">
              Offerings
          </Typography>

          <Typography variant="h5" component="h3">
              Introducing Talech Mobile
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
              $0 in software fees
          </Typography>
          <Typography variant="body2" component="h4">
              Use your own mobile device
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <GridList cellHeight='auto' className={classes1.gridList} spacing={20} cols={1}>
              <GridListTile>
                <StarterBundle/>
              </GridListTile>
              <GridListTile>
                <StandardBundle/>
              </GridListTile>
              <GridListTile>
                <PremiumBundle/>
              </GridListTile>
              </GridList>
        </Media>
        <Media at='md'>
          <Typography variant="h3" component="h2">
              Offerings
          </Typography>

          <Typography variant="h5" component="h3">
              Introducing Talech Mobile
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
              $0 in software fees
          </Typography>
          <Typography variant="body2" component="h4">
              Use your own mobile device
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <GridList cellHeight='auto' className={classes1.gridList} spacing={20} cols={2}>
              <GridListTile>
                <StarterBundle/>
              </GridListTile>
              <GridListTile>
                <StandardBundle/>
              </GridListTile>
              <GridListTile>
                <PremiumBundle/>
              </GridListTile>
              </GridList>
        </Media>
        <Media at='lg'>
          <Typography variant="h3" component="h2">
              Offerings
          </Typography>

          <Typography variant="h5" component="h3">
              Introducing Talech Mobile
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
              $0 in software fees
          </Typography>
          <Typography variant="body2" component="h4">
              Use your own mobile device
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <GridList cellHeight='auto' className={classes1.gridList} spacing={20} cols={3}>
              <GridListTile>
                <StarterBundle/>
              </GridListTile>
              <GridListTile>
                <StandardBundle/>
              </GridListTile>
              <GridListTile>
                <PremiumBundle/>
              </GridListTile>
              </GridList>
        </Media>
        <Media at='xl'>
          <Typography variant="h3" component="h2">
              Offerings
          </Typography>

          <Typography variant="h5" component="h3">
              Introducing Talech Mobile
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
              $0 in software fees
          </Typography>
          <Typography variant="body2" component="h4">
              Use your own mobile device
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <GridList cellHeight='auto' className={classes1.gridList} spacing={20} cols={4}>
              <GridListTile>
                <StarterBundle/>
              </GridListTile>
              <GridListTile>
                <StandardBundle/>
              </GridListTile>
              <GridListTile>
                <PremiumBundle/>
              </GridListTile>
              </GridList>
        </Media>
        <Media greaterThanOrEqual='el'>
          <Typography variant="h3" component="h2">
              Offerings
          </Typography>

          <Typography variant="h5" component="h3">
              Introducing Talech Mobile
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
              $0 in software fees
          </Typography>
          <Typography variant="body2" component="h4">
              Use your own mobile device
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <GridList cellHeight='auto' className={classes1.gridList} spacing={20} cols={4}>
              <GridListTile>
                <StarterBundle/>
              </GridListTile>
              <GridListTile>
                <StandardBundle/>
              </GridListTile>
              <GridListTile>
                <PremiumBundle/>
              </GridListTile>
              </GridList>
        </Media>
        </MediaContextProvider>

      

        <br/>
      
    </React.Fragment> 
}

export default DIY