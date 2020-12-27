
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
import WeeklySales from '../../components/WeeklySales1';
import WeeklySales2 from '../../components/WeeklySales2';
import WeeklySales3 from '../../components/WeeklySales3';
import {Circle} from '../../components/Circle';
import {Circle1} from '../../components/Circle1';
import {Circle2} from '../../components/Circle2';
//Form Imports
import {
  LinearProgress,
  MenuItem,
  FormControlLabel
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Switch,
} from 'formik-material-ui';

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Formik, Form, Field} from 'formik';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hybrid from 'react-syntax-highlighter/dist/cjs/styles/hljs/hybrid';



// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

interface Values {
  email: string;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const ranges = [
  {
    value: 'United States',
    label: 'United States',
  },
  {
    value: 'Canada',
    label: 'Canada',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
];

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: {setFieldValue},
    field: {name},
  } = props;
  const onChange = React.useCallback(
    event => {
      const {value} = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}


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

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">POST JSON API Call</DialogTitle>
      <SyntaxHighlighter language="JSON" style={hybrid}>
      {selectedValue}
    </SyntaxHighlighter>
    </Dialog>
  );
}

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
        <div style={{position: 'absolute', top: 200, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          
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
        </MediaContextProvider>
        
      </React.Fragment>;
      
      
    }
    
  }

function LearnMore() {

  const { locale, t } = useTranslation();
  const classes = useStyles();
  const text_width_small = "150px";
  const text_width = "300px";
  const text_width_tablet = "400px";
  const text_width_desktop = "450px";

  //Dialog Controls
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("Example String");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  ///////////////////

  const NewForm = () => (
    <Card>
        <CardContent>
        <Formik
    initialValues={{
        email: '',
        email_confirm: '',
        password: '',
        select: 'United States',
        tags: [],
        terms: false,
        date: new Date(),
        time: new Date(),
        dateTime: new Date(),
    }}
    validate={values => {
        const errors: Partial<Values> = {};
        if (!values.email ) {
        errors.email = 'Required';
        } 
        else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
        errors.email = 'Invalid email address';
        }
        return errors;
    }}
    onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
        setSubmitting(false);
        setSelectedValue(JSON.stringify(values, null, 2));
        handleClickOpen();
        }, 500);
        
        // fetch(`https://hooks.zapier.com/hooks/catch/8157500/okazqvp/`, {
        // method: 'POST',
        // body: JSON.stringify(values, null, 2),
        // });
    }}
    render={({submitForm, isSubmitting}) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form>
            <Box margin={1}>
            <Field
                component={UpperCasingTextField}
                name="email"
                type="email"
                label={t('email')}
                variant='outlined'
            />
            </Box>
            <Box margin={1}>
            <Field
                component={UpperCasingTextField}
                name="email_confirm"
                type="email"
                label={t('confirm_email')}
                variant='outlined'
            />
            </Box>
            <Box margin={1}>
            <Field
                component={TextField}
                type="password"
                label={t('password')}
                name="password"
                variant='outlined'
            />
            </Box>
            <Box margin={1}>
            <Field
                component={TextField}
                type="text"
                name="select"
                label={t('country')}
                select
                variant="outlined"
                helperText={t('where_you_live')}
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
            >
                {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </Field>
            </Box>
            <Box margin={1}>
            <FormControlLabel
                control={
                <Field component={Switch} type="checkbox" name="terms" />
                }
                label={t('i_accept')}
            />
            </Box>
            {isSubmitting && <LinearProgress />}
            <br/>
            <Box margin={1}>
            <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
            >
                {t('continue')}
            </Button>
            </Box>
        </Form>
        </MuiPickersUtilsProvider>
    )}
    />
        </CardContent>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Card>

    
);

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
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid item >
              <Grid container spacing={5} direction='row' alignItems='center' justify='center'>
                <Grid item>
                  <WeeklySales3/>
                </Grid>
                <Grid item>
                <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                      <Grid item>
                      <Typography variant='h3' style={{maxWidth:text_width_small}}>By Your Side As You Grow</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_small}}>As your business grows, talech can support you with features and hardware suited to your needs.</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_small}}>Upgrade seamlessly, keep your historical data, and give your staff a familiar product to help deliver an excellent customer experience.</Typography>
                      </Grid>
                    </Grid> 
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item>

              <br/>
              <br/>
              <br/>
              <br/>
            <Grid container spacing={5} direction='row' alignItems='center' justify='center' className={classes.root} >
                <Grid item>
                <Typography variant='h3'>Big Features, compact design</Typography>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                  <Grid item>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  </Grid>
                    <Grid item>
                    <Grid container spacing={4} direction='row' alignItems='center' justify='center' className={classes.root} >
                      <Grid item>
                        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                          <Grid item>
                          <Typography variant='h3' style={{maxWidth:text_width_tablet}}>Get Started with talech Mobile</Typography>
                          <br/>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>talech Mobile is free, but to get started, we need to get some things set up on our end.</Typography>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>Simply give us a few details, and our sales team will contact you soon to help.</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant='body2' style={{maxWidth:text_width_tablet}}>*By providing us with an email address you are expressly consenting to receiving email communications — including but not limited to Marketing material/Advertising, 
                            Promotions, Sales Campaigns, and Questionnaires/Research Surveys</Typography>
                          </Grid>
                        </Grid> 
                      </Grid>
                      <Grid item>
                      <NewForm/>
                      </Grid>
                    </Grid>
                        
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Media>

        {/*Tablet */}
        <Media at='md'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
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
            <Grid item >
              <Grid container spacing={5} direction='row' alignItems='center' justify='center'>
                <Grid item>
                  <WeeklySales3/>
                </Grid>
                <Grid item>
                <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                      <Grid item>
                      <Typography variant='h3' style={{maxWidth:text_width}}>By Your Side As You Grow</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width}}>As your business grows, talech can support you with features and hardware suited to your needs.</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width}}>Upgrade seamlessly, keep your historical data, and give your staff a familiar product to help deliver an excellent customer experience.</Typography>
                      </Grid>
                    </Grid> 
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Grid container spacing={5} direction='row' alignItems='center' justify='center' className={classes.root} >
                <Grid item>
                <Typography variant='h3'>Big Features, compact design</Typography>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                  <Grid item>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  </Grid>
                    <Grid item>
                    <Grid container spacing={4} direction='row' alignItems='center' justify='center' className={classes.root} >
                      <Grid item>
                        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                          <Grid item>
                          <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Get Started with talech Mobile</Typography>
                          <br/>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>talech Mobile is free, but to get started, we need to get some things set up on our end.</Typography>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>Simply give us a few details, and our sales team will contact you soon to help.</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant='body2' style={{maxWidth:text_width_desktop}}>*By providing us with an email address you are expressly consenting to receiving email communications — including but not limited to Marketing material/Advertising, 
                            Promotions, Sales Campaigns, and Questionnaires/Research Surveys</Typography>
                          </Grid>
                        </Grid> 
                      </Grid>
                      <Grid item>
                      <NewForm/>
                      </Grid>
                    </Grid>
                        
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          
        </Media>

        {/*Desktop */}
        <Media at='lg'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
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
            <Grid item >
              <Grid container spacing={5} direction='row' alignItems='center' justify='center'>
                <Grid item>
                  <WeeklySales2/>
                </Grid>
                <Grid item>
                <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                      <Grid item>
                      <Typography variant='h3' style={{maxWidth:text_width_tablet}}>By Your Side As You Grow</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>As your business grows, talech can support you with features and hardware suited to your needs.</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_tablet}}>Upgrade seamlessly, keep your historical data, and give your staff a familiar product to help deliver an excellent customer experience.</Typography>
                      </Grid>
                    </Grid> 
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Grid container spacing={5} direction='row' alignItems='center' justify='center' className={classes.root} >
                <Grid item>
                <Typography variant='h3'>Big Features, compact design</Typography>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                  <Grid item>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  </Grid>
                    <Grid item>
                    <Grid container spacing={4} direction='row' alignItems='center' justify='center' className={classes.root} >
                      <Grid item>
                        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                          <Grid item>
                          <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Get Started with talech Mobile</Typography>
                          <br/>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>talech Mobile is free, but to get started, we need to get some things set up on our end.</Typography>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>Simply give us a few details, and our sales team will contact you soon to help.</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant='body2' style={{maxWidth:text_width_desktop}}>*By providing us with an email address you are expressly consenting to receiving email communications — including but not limited to Marketing material/Advertising, 
                            Promotions, Sales Campaigns, and Questionnaires/Research Surveys</Typography>
                          </Grid>
                        </Grid> 
                      </Grid>
                      <Grid item>
                      <NewForm/>
                      </Grid>
                    </Grid>
                        
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
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
            <br/>
            <Grid item >
              <Grid container spacing={5} direction='row' alignItems='center' justify='center'>
                <Grid item>
                  <WeeklySales/>
                </Grid>
                <Grid item>
                <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                      <Grid item>
                      <Typography variant='h3' style={{maxWidth:text_width_desktop}}>By Your Side As You Grow</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>As your business grows, talech can support you with features and hardware suited to your needs.</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>Upgrade seamlessly, keep your historical data, and give your staff a familiar product to help deliver an excellent customer experience.</Typography>
                      </Grid>
                    </Grid> 
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Grid container spacing={5} direction='row' alignItems='center' justify='center' className={classes.root} >
                <Grid item>
                <Typography variant='h3'>Big Features, compact design</Typography>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                  <Grid item>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  </Grid>
                    <Grid item>
                    <Grid container spacing={4} direction='row' alignItems='center' justify='center' className={classes.root} >
                      <Grid item>
                        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                          <Grid item>
                          <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Get Started with talech Mobile</Typography>
                          <br/>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>talech Mobile is free, but to get started, we need to get some things set up on our end.</Typography>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>Simply give us a few details, and our sales team will contact you soon to help.</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant='body2' style={{maxWidth:text_width_desktop}}>*By providing us with an email address you are expressly consenting to receiving email communications — including but not limited to Marketing material/Advertising, 
                            Promotions, Sales Campaigns, and Questionnaires/Research Surveys</Typography>
                          </Grid>
                        </Grid> 
                      </Grid>
                      <Grid item>
                      <NewForm/>
                      </Grid>
                    </Grid>
                        
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/" as={`/${locale}/`} passHref >
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
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid item >
              <Grid container spacing={5} direction='row' alignItems='center' justify='center'>
                <Grid item>
                  <WeeklySales/>
                </Grid>
                <Grid item>
                <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                      <Grid item>
                      <Typography variant='h3' style={{maxWidth:text_width_desktop}}>By Your Side As You Grow</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>As your business grows, talech can support you with features and hardware suited to your needs.</Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>Upgrade seamlessly, keep your historical data, and give your staff a familiar product to help deliver an excellent customer experience.</Typography>
                      </Grid>
                    </Grid> 
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <Grid container spacing={5} direction='row' alignItems='center' justify='center' className={classes.root} >
                <Grid item>
                <Typography variant='h3'>Big Features, compact design</Typography>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container spacing={5} direction='row' alignItems='flex-start' justify='center' className={classes.root} >
                
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('payment_acceptance')}
                    </Typography>
                    
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('take_cash')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle1/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('menu_management')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('build_a_catalog')}                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Grid container spacing={1} direction='column' alignItems='center' justify='center' className={classes.root} >
                    <Grid item>
                    <Circle2/>
                    </Grid>
                    <Grid item>
                    <Typography variant="h6">
                    {t('discounts')}
                    </Typography>
                    </Grid>
                    <Grid item wrap='wrap' style = {{maxWidth: "250px"}}>
                        <Typography variant='body1'>
                        {t('easily_add_discounts')}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={4} direction='column' alignItems='center' justify='center' className={classes.root} >
                  <Grid item>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  </Grid>
                    <Grid item>
                    <Grid container spacing={4} direction='row' alignItems='center' justify='center' className={classes.root} >
                      <Grid item>
                        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' >
                          <Grid item>
                          <Typography variant='h3' style={{maxWidth:text_width_desktop}}>Get Started with talech Mobile</Typography>
                          <br/>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>talech Mobile is free, but to get started, we need to get some things set up on our end.</Typography>
                          </Grid>
                          <Grid item>
                          <Typography variant='subtitle1' style={{maxWidth:text_width_desktop}}>Simply give us a few details, and our sales team will contact you soon to help.</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant='body2' style={{maxWidth:text_width_desktop}}>*By providing us with an email address you are expressly consenting to receiving email communications — including but not limited to Marketing material/Advertising, 
                            Promotions, Sales Campaigns, and Questionnaires/Research Surveys</Typography>
                          </Grid>
                        </Grid> 
                      </Grid>
                      <Grid item>
                      <NewForm/>
                      </Grid>
                    </Grid>
                        
                    </Grid>
                    <Grid item>
                        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
                            <Button variant='outlined'>{t('skip')} </Button>
                        </Link>
                    </Grid>
                </Grid>
              </Grid>
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

export default withLocale(LearnMore) 