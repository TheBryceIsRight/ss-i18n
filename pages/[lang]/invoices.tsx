import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import {
  Button
} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InvoiceTabs from '../../components/InvoiceTabs';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SendInvoice from '../../components/SendInvoice';

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

function Invoices() {

    const { locale, t } = useTranslation();
    const classes = useStyles();

    return <React.Fragment>
      <Head>
        <title>
        Invoices
        </title>

      </Head>
      
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Invoices
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-start' className={classes.root} >
          <Grid item>
            <SendInvoice/>
          </Grid>
        </Grid>
          <InvoiceTabs/>

        </Media>

        {/*Tablet */}
        <Media at='md'>

        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Invoices
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-end' justify='center' className={classes.root} >
          <Grid item>
            <SendInvoice/>
          </Grid>
        </Grid>
          <InvoiceTabs/>

        </Media>

        {/*Desktop */}
        <Media at='lg'>

        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Invoices
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-end' justify='center' className={classes.root} >
          <Grid item>
            <SendInvoice/>
          </Grid>
        </Grid>
          <InvoiceTabs/>
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Invoices
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-end' justify='center' className={classes.root} >
          <Grid item>
            <SendInvoice/>
          </Grid>
        </Grid>
          <InvoiceTabs/>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Invoices
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={2} direction='column' alignItems='flex-end' justify='center' className={classes.root} >
          <Grid item>
            <SendInvoice/>
          </Grid>
        </Grid>
        <InvoiceTabs/>
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

export default withLocale(Invoices) 