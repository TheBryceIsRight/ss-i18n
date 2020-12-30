import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VerticalLinearStepper from '../../components/VerticalLinearStepper';


//Random String Generator


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


function Finish_registration() {

    const { locale, t } = useTranslation();
    
    const classes = useStyles();

    return <React.Fragment>
      <Head>
        <title>
        {t("finish_signing_up")}
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
            {t("finish_signing_up")}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t("finish_signing_up")}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepper/>
            </Grid>
        </Grid>
          

        </Media>

        {/*Tablet */}
        <Media at='md'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            {t("finish_signing_up")}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t("finish_signing_up")}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepper/>
            </Grid>
        </Grid>
          
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            {t("finish_signing_up")}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t("finish_signing_up")}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepper/>
            </Grid>
        </Grid>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <br/>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
            {t("finish_signing_up")}
            </Typography>
          </Breadcrumbs>
        <br/>
        <Grid container spacing={4} direction='column'  alignItems='center' justify='center' className={classes.root} >
            <Grid item>
            <Typography variant='h3'>{t("finish_signing_up")}</Typography>
            </Grid>
            <Grid item>
            <VerticalLinearStepper/>
            </Grid>
        </Grid>
       
        </Media>
        </MediaContextProvider>
    </React.Fragment> 
}


export default withLocale(Finish_registration) 