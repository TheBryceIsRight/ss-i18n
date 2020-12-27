
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import { Media, MediaContextProvider } from "../../utils/media";
import withLocale from '../../hocs/withLocale';
import StarterBundle from '../../components/StarterBundle';
import StandardBundle from '../../components/StandardBundle';
import PremiumBundle from '../../components/PremiumBundle';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ThemeContext from '../../components/Theme';
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
    const heroImage = this.context ? '/Main.png' : '/Main_Dark.png' ;
    const text_width_small = "200px";
    const text_width = "300px";
    const text_width_tablet = "400px";
    const text_width_desktop = "500px";

    return <React.Fragment>
      <MediaContextProvider>
          {/*Smaller than mobile */}
          <Media at='sm'>
      <div style={{position: 'absolute', top: 150, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
        <img src={heroImage} alt='Elavon' width="100%"/>
      </div>
      <div style={{position: 'relative', top: 120, left: 30, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-end' >
        <Grid item>
        <Typography variant='h3' style={{maxWidth:text_width_small}}>Flexibility to run your business better</Typography>
        </Grid>
        <Grid item>
        <Typography variant='subtitle1'  style={{maxWidth:text_width_small}}>Take every type of payment quickly and securely with AI-powered fraud prevention and 24/7 phone support.</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' size='large'>Try talech now</Button>
        </Grid>
      </Grid>          
      </div>
      </Media>

         {/*Mobile */}
      <Media at='mo'>
      <div style={{position: 'absolute', top: 150, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
        <img src={heroImage} alt='Elavon' width="100%"/>
      </div>
      <div style={{position: 'relative', top: 190, left: 70, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-end' >
        <Grid item>
        <Typography variant='h3' style={{maxWidth:text_width}}>Flexibility to run your business better</Typography>
        </Grid>
        <Grid item>
        <Typography variant='subtitle1'  style={{maxWidth:text_width}}>Take every type of payment quickly and securely with AI-powered fraud prevention and 24/7 phone support.</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' size='large'>Try talech now</Button>
        </Grid>
      </Grid>          
      </div>
      </Media>

      {/*Tablet */}
      <Media at='md'>
      <div style={{position: 'absolute', top: 150, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
        <img src={heroImage} alt='Elavon' width="100%"/>
      </div>
      <div style={{position: 'relative', top: 80, left: 260, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-end' >
        <Grid item>
        <Typography variant='h3' style={{maxWidth:text_width_tablet}}>Flexibility to run your business better</Typography>
        </Grid>
        <Grid item>
        <Typography variant='subtitle1'  style={{maxWidth:text_width_tablet}}>Take every type of payment quickly and securely with AI-powered fraud prevention and 24/7 phone support.</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' size='large'>Try talech now</Button>
        </Grid>
      </Grid>          
      </div>
        
      </Media>

      {/*Desktop */}
      <Media at='lg'>
      <div style={{position: 'absolute', top: 120, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
        <img src={heroImage} alt='Elavon' width="100%"/>
      </div>
      <div style={{position: 'relative', top: 80, left: 400, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-end' >
        <Grid item>
        <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Flexibility to run your business better</Typography>
        </Grid>
        <Grid item>
        <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>Take every type of payment quickly and securely with AI-powered fraud prevention and 24/7 phone support.</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' size='large'>Try talech now</Button>
        </Grid>
      </Grid>          
      </div>
        
      </Media>

      {/*High Resolution Desktop */}
      <Media at='xl'>
      <div style={{position: 'absolute', top: 120, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
        <img src={heroImage} alt='Elavon' width="100%"/>
      </div>
      <div style={{position: 'relative', top: 80, left: 600, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-end' >
        <Grid item>
        <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Flexibility to run your business better</Typography>
        </Grid>
        <Grid item>
        <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>Take every type of payment quickly and securely with AI-powered fraud prevention and 24/7 phone support.</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' size='large'>Try talech now</Button>
        </Grid>
      </Grid>          
      </div>
      </Media>
      
      {/*4K & Greater*/}
      <Media greaterThanOrEqual='el'>
      <div style={{position: 'absolute', top: 120, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
        <img src={heroImage} alt='Elavon' width="100%"/>
      </div>
      <div style={{position: 'relative', top: 80, left: 600, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} direction='column' alignItems='flex-end' justify='flex-end' >
        <Grid item>
        <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Flexibility to run your business better</Typography>
        </Grid>
        <Grid item>
        <Typography variant='subtitle1'  style={{maxWidth:text_width_desktop}}>Take every type of payment quickly and securely with AI-powered fraud prevention and 24/7 phone support.</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' size='large'>Try talech now</Button>
        </Grid>
      </Grid>          
      </div>
      </Media>
      </MediaContextProvider>
      
    </React.Fragment>;
    
    
  }
  
}

function DIY() {

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
        <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Hero/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
        <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Hero/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
        <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Hero/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
        <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Hero/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
          <Grid container spacing={5} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>
            <Hero/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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