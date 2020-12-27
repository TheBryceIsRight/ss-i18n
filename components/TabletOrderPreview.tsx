import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventIcon from '@material-ui/icons/Event';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';


const useStyles = makeStyles({
  root: {
    minWidth: 250,
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

const useStyles1 = makeStyles((theme: Theme) =>
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

export default function MobileOrderPreview() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const { locale, t } = useTranslation();

  const card_width = "330px";

  return ( <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="shopping bag">
                    <LocalMallIcon/>
                </Avatar>
                }
                action={
                <Link href="/[lang]/orders" as={`/${locale}/orders`} passHref >
                    <IconButton aria-label="settings">
                        <NavigateNextIcon />
                    </IconButton>
                </Link>
                
                }
                title={t('recent_orders')}
                subheader=""
            />
            <CardContent>
            <Grid container spacing={3} direction='column' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                    <Grid item>
                        <Grid container spacing={2} direction='column' alignItems='flex-start' justify='flex-end' className={classes1.root} >
                            <Grid item>
                                <img src='/poynt.svg' alt='next' width={card_width}/>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction='column' alignItems='flex-start' justify='flex-start' className={classes1.root} >
                                    <Grid item>
                                        <Button variant='contained' style={{minWidth: card_width}}>{t('track_package')}</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' style={{minWidth: card_width}}>{t('return_items')}</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' style={{minWidth: card_width}}>{t('view_your_item')}</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Order Placed" secondary="October 22, 2020" />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                    <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Total" secondary='$20.00'/>
                </ListItem>
                <ListItem>
                <ListItemIcon>
                    <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="Ship to" secondary='Bryce Watson' />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                    <MarkunreadMailboxIcon />
                </ListItemIcon>
                <ListItemText primary="Expected Delivery" secondary="Friday before 9PM" />
                </ListItem>
            </List>
               
            </CardContent>
        <CardActions>
            <Button size="small" >{t('archive_order')}</Button>
        </CardActions>
    </Card>
    
  );
}