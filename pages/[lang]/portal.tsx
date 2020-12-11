
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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SendIcon from '@material-ui/icons/Send';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import WeeklySales from "../../components/WeeklySales";
import CustomizedDialogs from '../../components/CustomizedDialogs';
import OrderPreview from '../../components/OrderPreview';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

function Portal() {

  const { t, locale } = useTranslation()
  
    const useStyles = makeStyles({
        root: {
        minWidth: 275,
        
        },
        bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        },
        title: {
        fontSize: 14,
        },
        pos: {
        marginBottom: 12,
        },
        
    });
    const classes = useStyles();
    const card_width = '588px';
    const card_half_width = '286px';

    return <React.Fragment>
      <Head>
        <title>
        Portal
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('dashboard')}
            </Typography>
          </Breadcrumbs>
        <br/>

        <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>

            <Typography variant="h3" component="h2">
            {t('welcome')}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3">
            {t('today')}
            </Typography>
            <br/>

            <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5">
                        {t('gross_sales')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $2,178.67
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.root}>
                    <CardContent>
                    <Typography variant="h5">
                    {t('transactions')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $198.37
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <WeeklySales/>
            <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}>
                    <CardContent >
                    <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                        <Grid item>
                        <HelpIcon fontSize="large"/>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">
                        {t('covid')}
                        </Typography>
                        <Typography variant="subtitle1">
                        {t('here_for_you')}
                        </Typography>
                        </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('learn_more')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                  <OrderPreview/>
                </Grid>
                <Grid item>
                <Card className={classes.root}>
            <CardHeader
                title={t('top_discussions')}
            />
                <CardContent >
                <List>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('cashflow')}
                        secondary={t('author_1')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('invoice_question')}
                        secondary={t('author_2')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_converge')}
                        secondary={t('author_3')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_talech')}
                        secondary={t('author_4')}
                    />
                    </ListItem>
                </List>
                    </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    <Grid item>
    <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
            <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
              <Button variant="outlined" size='large' startIcon={<AttachMoneyIcon />}> {t('take_a_payment')} </Button>
            </Link>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<SendIcon />}>{t('send_an_invoice')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<AddShoppingCartIcon />}>{t('add_an_item')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<BuildIcon />}> {t('read_the_set_up_guide')}  </Button>
            </Grid>
            <Grid item>
            <CustomizedDialogs/>
            </Grid>
            <Grid item>
            <br/>
            <br/>
            
            <List>
                <ListItem>
                <Typography variant='h4'> {t('last_thirty_days')} </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('total_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('new_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('returning_customers')}
                    secondary='1'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_spending')}
                    secondary='$0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_visits')}
                    secondary='3'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('positive_feedback')}
                    secondary='13'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('negative_feedback')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
    
            </List>

            </Grid>
        </Grid>
        </Grid>
        
    </Grid>
            
        </Media>

        {/*Tablet */}
        <Media at='md'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('dashboard')}
            </Typography>
          </Breadcrumbs>
        <br/>

        <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>

            <Typography variant="h3" component="h2">
            {t('welcome')}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3">
            {t('today')}
            </Typography>
            <br/>

            <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}  style={{minWidth:card_half_width}}>
                    <CardContent>
                        <Typography variant="h5">
                        {t('gross_sales')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $2,178.67
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.root}  style={{minWidth:card_half_width}}>
                    <CardContent>
                    <Typography variant="h5">
                    {t('transactions')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $198.37
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction='column' alignItems='flex-start'>
                <Grid item>
                    <WeeklySales/>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}>
                    <CardContent style={{minWidth: card_width}} >
                    <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                        <Grid item>
                        <HelpIcon fontSize="large"/>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">
                        {t('covid')}
                        </Typography>
                        <Typography variant="subtitle1">
                        {t('here_for_you')}
                        </Typography>
                        </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('learn_more')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                  <OrderPreview/>
                </Grid>
                <Grid item>
                <Card className={classes.root} style={{minWidth:card_width}} >
            <CardHeader
                title={t('top_discussions')}
            />
                <CardContent >
                <List>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('cashflow')}
                        secondary={t('author_1')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('invoice_question')}
                        secondary={t('author_2')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_converge')}
                        secondary={t('author_3')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_talech')}
                        secondary={t('author_4')}
                    />
                    </ListItem>
                </List>
                    </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    <Grid item>
    <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
            <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
              <Button variant="outlined" size='large' startIcon={<AttachMoneyIcon />}> {t('take_a_payment')} </Button>
            </Link>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<SendIcon />}>{t('send_an_invoice')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<AddShoppingCartIcon />}>{t('add_an_item')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<BuildIcon />}> {t('read_the_set_up_guide')}  </Button>
            </Grid>
            <Grid item>
            <CustomizedDialogs/>
            </Grid>
            <Grid item>
            <br/>
            <br/>
            
            <List>
                <ListItem>
                <Typography variant='h4'> {t('last_thirty_days')} </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('total_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('new_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('returning_customers')}
                    secondary='1'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_spending')}
                    secondary='$0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_visits')}
                    secondary='3'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('positive_feedback')}
                    secondary='13'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('negative_feedback')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
    
            </List>

            </Grid>
        </Grid>
        </Grid>
        
    </Grid>
            
        </Media>

        {/*Desktop */}
        <Media at='lg'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('dashboard')}
            </Typography>
          </Breadcrumbs>
        <br/>

        <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>

            <Typography variant="h3" component="h2">
            {t('welcome')}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3">
            {t('today')}
            </Typography>
            <br/>

            <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}  style={{minWidth:card_half_width}}>
                    <CardContent>
                        <Typography variant="h5">
                        {t('gross_sales')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $2,178.67
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.root}  style={{minWidth:card_half_width}}>
                    <CardContent>
                    <Typography variant="h5">
                    {t('transactions')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $198.37
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction='column' alignItems='flex-start'>
                <Grid item>
                    <WeeklySales/>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}>
                    <CardContent style={{minWidth:card_width}} >
                    <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                        <Grid item>
                        <HelpIcon fontSize="large"/>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">
                        {t('covid')}
                        </Typography>
                        <Typography variant="subtitle1">
                        {t('here_for_you')}
                        </Typography>
                        </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('learn_more')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                  <OrderPreview/>
                </Grid>
                <Grid item>
                
                <Card className={classes.root} style={{minWidth:card_width}} >
            <CardHeader
                title={t('top_discussions')}
            />
                <CardContent >
                <List>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('cashflow')}
                        secondary={t('author_1')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('invoice_question')}
                        secondary={t('author_2')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_converge')}
                        secondary={t('author_3')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_talech')}
                        secondary={t('author_4')}
                    />
                    </ListItem>
                </List>
                    </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    <Grid item>
    <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
            <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
              <Button variant="outlined" size='large' startIcon={<AttachMoneyIcon />}> {t('take_a_payment')} </Button>
            </Link>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<SendIcon />}>{t('send_an_invoice')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<AddShoppingCartIcon />}>{t('add_an_item')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<BuildIcon />}> {t('read_the_set_up_guide')}  </Button>
            </Grid>
            <Grid item>
            <CustomizedDialogs/>
            </Grid>
            <Grid item>
            <br/>
            <br/>
            
            <List>
                <ListItem>
                <Typography variant='h4'> {t('last_thirty_days')} </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('total_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('new_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('returning_customers')}
                    secondary='1'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_spending')}
                    secondary='$0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_visits')}
                    secondary='3'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('positive_feedback')}
                    secondary='13'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('negative_feedback')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
    
            </List>

            </Grid>
        </Grid>
        </Grid>
        
    </Grid>
            
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('dashboard')}
            </Typography>
          </Breadcrumbs>
        <br/>

        <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>

            <Typography variant="h3" component="h2">
            {t('welcome')}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3">
            {t('today')}
            </Typography>
            <br/>

            <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root} style={{minWidth:card_half_width}} >
                    <CardContent >
                        <Typography variant="h5">
                        {t('gross_sales')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $2,178.67
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.root} style={{minWidth:card_half_width}}>
                    <CardContent >
                    <Typography variant="h5">
                    {t('transactions')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $198.37
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction='column' alignItems='flex-start'>
                <Grid item>
                    <WeeklySales/>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}>
                    <CardContent style={{minWidth: card_width}} >
                    <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                        <Grid item>
                        <HelpIcon fontSize="large"/>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">
                        {t('covid')}
                        </Typography>
                        <Typography variant="subtitle1">
                        {t('here_for_you')}
                        </Typography>
                        </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('learn_more')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                  <OrderPreview/>
                </Grid>
                <Grid item>
                
                <Card className={classes.root} style={{minWidth:card_width}} >
            <CardHeader
                title={t('top_discussions')}
            />
                <CardContent >
                <List>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('cashflow')}
                        secondary={t('author_1')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('invoice_question')}
                        secondary={t('author_2')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_converge')}
                        secondary={t('author_3')}
                    />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={t('getting_started_talech')}
                        secondary={t('author_4')}
                    />
                    </ListItem>
                </List>
                    </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    <Grid item>
    <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
            <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
              <Button variant="outlined" size='large' startIcon={<AttachMoneyIcon />}> {t('take_a_payment')} </Button>
            </Link>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<SendIcon />}>{t('send_an_invoice')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<AddShoppingCartIcon />}>{t('add_an_item')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<BuildIcon />}> {t('read_the_set_up_guide')}  </Button>
            </Grid>
            <Grid item>
            <CustomizedDialogs/>
            </Grid>
            <Grid item>
            <br/>
            <br/>
            
            <List>
                <ListItem>
                <Typography variant='h4'> {t('last_thirty_days')} </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('total_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('new_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('returning_customers')}
                    secondary='1'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_spending')}
                    secondary='$0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_visits')}
                    secondary='3'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('positive_feedback')}
                    secondary='13'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('negative_feedback')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
    
            </List>

            </Grid>
        </Grid>
        </Grid>
        
    </Grid>
            
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('dashboard')}
            </Typography>
          </Breadcrumbs>
        <br/>

        <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
            <Grid item>

            <Typography variant="h3" component="h2">
            {t('welcome')}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3">
            {t('today')}
            </Typography>
            <br/>

            <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}  style={{minWidth:card_half_width}}>
                    <CardContent>
                        <Typography variant="h5">
                        {t('gross_sales')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $2,178.67
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.root}  style={{minWidth:card_half_width}}>
                    <CardContent>
                    <Typography variant="h5">
                    {t('transactions')}
                        </Typography>
                        <br/>
                        <Typography variant='h3'>
                        $198.37
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('details')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction='column' alignItems='flex-start'>
                <Grid item>
                    <WeeklySales/>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
                <Grid item>
                <Card className={classes.root}>
                    <CardContent style={{minWidth:card_width}} >
                    <Grid container spacing={2} direction='row' alignItems='flex-start' justify='flex-start' className={classes.root} >
                        <Grid item>
                        <HelpIcon fontSize="large"/>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">
                        {t('covid')}
                        </Typography>
                        <Typography variant="subtitle1">
                        {t('here_for_you')}
                        </Typography>
                        </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button size="small" >{t('learn_more')}</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                  <OrderPreview/>
                </Grid>
                <Grid item>
                <Card className={classes.root} style={{minWidth:card_width, maxWidth: card_width}} >
              <CardHeader
                  title={t('top_discussions')}
              />
                  <CardContent >
                    <List>
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={t('cashflow')}
                            secondary={t('author_1')}
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={t('invoice_question')}
                            secondary={t('author_2')}
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={t('getting_started_converge')}
                            secondary={t('author_3')}
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={t('getting_started_talech')}
                            secondary={t('author_4')}
                        />
                        </ListItem>
                    </List>
                      </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    <Grid item>
    <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-start' className={classes.root} >
        <Grid item>
            <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
              <Button variant="outlined" size='large' startIcon={<AttachMoneyIcon />}> {t('take_a_payment')} </Button>
            </Link>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<SendIcon />}>{t('send_an_invoice')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<AddShoppingCartIcon />}>{t('add_an_item')} </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" size='large' startIcon={<BuildIcon />}> {t('read_the_set_up_guide')}  </Button>
            </Grid>
            <Grid item>
            <CustomizedDialogs/>
            </Grid>
            <Grid item>
            
            <br/>
            <br/>
            
            <List>
                <ListItem>
                <Typography variant='h4'> {t('last_thirty_days')} </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('total_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('new_customers')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('returning_customers')}
                    secondary='1'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_spending')}
                    secondary='$0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('average_visits')}
                    secondary='3'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('positive_feedback')}
                    secondary='13'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={t('negative_feedback')}
                    secondary='0'
                  />
                  <ListItemSecondaryAction>

                    <IconButton edge="end" aria-label="details">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
    
            </List>

            </Grid>
        </Grid>
        </Grid>
        
    </Grid>
            
          
          
          <br/>

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

export default withLocale(Portal) 