
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ThemeContext from '../../components/Theme';
import Link from 'next/link';
import { Button } from '@material-ui/core';

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

class Hero extends React.Component {
    static contextType = ThemeContext;

    render() {
      const heroImage = this.context ? '/Sucker_Punch.png' : '/New_Hero_Dark.png' ;
      const text_width = "300px";
      const text_width_tablet = "400px";
      const text_width_desktop = "500px";

      return <React.Fragment>
        <MediaContextProvider>
           {/*Mobile */}
        <Media lessThan='md'>
        <div style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          
          <img src={heroImage} alt='Elavon' width="100%"/>
        </div>
        <div style={{position: 'relative', top: 80, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
          <Grid item style={{maxWidth:text_width}}>
          <Typography variant='h3'>Start Taking Payments Quickly</Typography>
          </Grid>
          <Grid item style={{maxWidth:text_width}}>
          <Typography variant='subtitle1'> You can accept payment transactions quickly, easily and securely wherever you are with talech Mobile.</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1' style={{maxWidth:text_width}}>There are no costly hardware or software commitments so your business can hit the ground running.</Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' size='large'>Try talech mobile now</Button>
          </Grid>
        </Grid>          
        </div>
        </Media>

        {/*Tablet */}
        <Media at='md'>
        <div style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          
          <img src={heroImage} alt='Elavon' width="100%"/>
        </div>
        <div style={{position: 'relative', top: 90, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
          <Grid item>
          <Typography variant='h3' style={{maxWidth:text_width_tablet}}>Start Taking Payments Quickly</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>You can accept payment transactions quickly, easily and securely wherever you are with talech Mobile.</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>There are no costly hardware or software commitments so your business can hit the ground running.</Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' size='large'>Try talech mobile now</Button>
          </Grid>
        </Grid>          
        </div>
          
        </Media>

        {/*Desktop */}
        <Media at='lg'>
        <div style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          
          <img src={heroImage} alt='Elavon' width="100%"/>
        </div>
        <div style={{position: 'relative', top: 120, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
          <Grid item>
          <Typography variant='h3' style={{maxWidth:text_width_tablet}}>Start Taking Payments Quickly</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>You can accept payment transactions quickly, easily and securely wherever you are with talech Mobile.</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>There are no costly hardware or software commitments so your business can hit the ground running.</Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' size='large'>Try talech mobile now</Button>
          </Grid>
        </Grid>          
        </div>
          
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <div style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          
          <img src={heroImage} alt='Elavon' width="100%"/>
        </div>
        <div style={{position: 'relative', top: 180, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
          <Grid item>
          <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Start Taking Payments Quickly</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>You can accept payment transactions quickly, easily and securely wherever you are with talech Mobile.</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>There are no costly hardware or software commitments so your business can hit the ground running.</Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' size='large'>Try talech mobile now</Button>
          </Grid>
        </Grid>          
        </div>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <div style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          
          <img src={heroImage} alt='Elavon' width="100%"/>
        </div>
        <div style={{position: 'relative', top: 220, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
          <Grid item>
          <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Start Taking Payments Quickly</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>You can accept payment transactions quickly, easily and securely wherever you are with talech Mobile.</Typography>
          </Grid>
          <Grid item>
          <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>There are no costly hardware or software commitments so your business can hit the ground running.</Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' size='large'>Try talech mobile now</Button>
          </Grid>
        </Grid>          
        </div>
        </Media>
        </MediaContextProvider>
        
      </React.Fragment>;
      
      
    }
    
  }

function LearnMore() {

  const { locale, t } = useTranslation();
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
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Talech Mobile
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Typography variant="h3" component="h2">
            Talech Mobile
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h4">
            Revenue optimization in the palm of your hand
            </Typography>
            </Grid>
            <Grid item>
                <Hero/>
            </Grid>
          </Grid>
        </Media>

        {/*Tablet */}
        <Media at='md'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Talech Mobile
            </Typography>
          </Breadcrumbs>
          <br/>
        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Typography variant="h3" component="h2">
            Talech Mobile
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h4">
            Revenue optimization in the palm of your hand
            </Typography>
            </Grid>
            <Grid item>
                  <Hero/>
            </Grid>
          </Grid>
          
          
        </Media>

        {/*Desktop */}
        <Media at='lg'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Talech Mobile
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Typography variant="h3" component="h2">
            Talech Mobile
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h4">
            Revenue optimization in the palm of your hand
            </Typography>
            </Grid>
            <Grid item>
                <Hero/>
            </Grid>
          </Grid>
          
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Talech Mobile
            </Typography>
          </Breadcrumbs>
        <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Typography variant="h3" component="h2">
            Talech Mobile
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h4">
            Revenue optimization in the palm of your hand
            </Typography>
            </Grid>
            <Grid item>
                <Hero/>
            </Grid>
          </Grid>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            Talech Mobile
            </Typography>
          </Breadcrumbs>
          <br/>
          <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Typography variant="h3" component="h2">
            Talech Mobile
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h4">
            Revenue optimization in the palm of your hand
            </Typography>
            </Grid>
          </Grid>
          <Hero/>

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

export default withLocale(LearnMore) 