
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import StarterBundle from '../../components/StarterBundle';
import StandardBundle from '../../components/StandardBundle';
import PremiumBundle from '../../components/PremiumBundle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';




// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

function DIY() {

  const { t } = useTranslation();
  const classes = useStyles();


    return <React.Fragment>
      <Head>
        <title>
        DIY Sales Demo
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
          <Typography variant="h3" component="h2">
              {t('offerings')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <StarterBundle/>
            </Grid>
            <Grid item>
            <StandardBundle/>
            </Grid>
            <Grid item>
            <PremiumBundle/>
            </Grid>
          </Grid>
        </Media>

        {/*Tablet */}
        <Media at='md'>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <StarterBundle/>
            </Grid>
            <Grid item>
            <StandardBundle/>
            </Grid>
            <Grid item>
            <PremiumBundle/>
            </Grid>
          </Grid>
        </Media>

        {/*Desktop */}
        <Media at='lg'>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
              <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <StarterBundle/>
            </Grid>
            <Grid item>
            <StandardBundle/>
            </Grid>
            <Grid item>
            <PremiumBundle/>
            </Grid>
          </Grid>
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <StarterBundle/>
            </Grid>
            <Grid item>
            <StandardBundle/>
            </Grid>
            <Grid item>
            <PremiumBundle/>
            </Grid>
          </Grid>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('home')}
            </Typography>
          </Breadcrumbs>
        <br/>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <Grid container spacing={5} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <StarterBundle/>
            </Grid>
            <Grid item>
            <StandardBundle/>
            </Grid>
            <Grid item>
            <PremiumBundle/>
            </Grid>
          </Grid>
        </Media>
        </MediaContextProvider>
    </React.Fragment> 
}

{/*In case I want to turn on eCommerce in the future */}
{/*  
DIY.getInitialProps = async () => {

  return {
    products: [
      {id: "test_product", name: "Talech Starter", price: 25.00, description: "Great for a new business", settlement: "2 Days"} as IProduct,
      {id: "test_product2", name: "Talech Standard", price: 50.00, description: "Great for an existing business", settlement:'Next Day'} as IProduct,
      {id: "test_product3", name: "Talech Premium", price: 75.00, description: "Great for an growing business", settlement:'Same Day'} as IProduct,
      
    ]
  }
}

*/}

export default withLocale(DIY) 