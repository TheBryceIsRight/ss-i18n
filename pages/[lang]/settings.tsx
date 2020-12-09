
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import Grid from '@material-ui/core/Grid';
import {Circle} from '../../components/Circle';
import {Circle1} from '../../components/Circle1';
import {Circle2} from '../../components/Circle2';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Formik, Form, Field} from 'formik';
import {
  Button,
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

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import VerticalTabs from '../../components/VerticalTabs';
 

interface Values {
    email: string;
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


function Settings() {

    const { locale, t } = useTranslation();
    const classes = useStyles();


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
            alert(JSON.stringify(values, null, 2));
            }, 500);
            fetch(`https://hooks.zapier.com/hooks/catch/8157500/okazqvp/`, {
            method: 'POST',
            body: JSON.stringify(values, null, 2),
            });
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
        </Card>

        
    );

    return <React.Fragment>
      <Head>
        <title>
        {t('registration')}
        </title>

      </Head>
      
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/diy" as={`/${locale}/diy`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Settings
            </Typography>
          </Breadcrumbs>
        <br/>
       <VerticalTabs/>

        </Media>

        {/*Tablet */}
        <Media at='md'>

        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/diy" as={`/${locale}/diy`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Settings
            </Typography>
          </Breadcrumbs>
        <br/>
       <VerticalTabs/>

        </Media>

        {/*Desktop */}
        <Media at='lg'>

        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/diy" as={`/${locale}/diy`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Settings
            </Typography>
          </Breadcrumbs>
        <br/>
       <VerticalTabs/>
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/diy" as={`/${locale}/diy`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Settings
            </Typography>
          </Breadcrumbs>
        <br/>
       <VerticalTabs/>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        
        <Link href="/[lang]/diy" as={`/${locale}/diy`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Settings
            </Typography>
          </Breadcrumbs>
        <br/>
       <VerticalTabs/>
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

export default withLocale(Settings) 