import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SendIcon from '@material-ui/icons/Send';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';



const useStyles = makeStyles({
  root: {
    minWidth: 200,
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



export default function QuickActionsMobile() {
  const classes = useStyles();
  const { locale, t } = useTranslation();


  return ( <Card className={classes.root}>
            <CardHeader
                title="Quick Actions"
                subheader=""
            />
            <CardContent>
            <List component="nav" aria-label="main mailbox folders">
                <Link href="/[lang]/take_a_payment" as={`/${locale}/take_a_payment`} passHref >
                <ListItem button>
                <ListItemIcon>
                    <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary={t('take_a_payment')} />
                </ListItem>
                </Link>
                <Link href="/[lang]/send_an_invoice" as={`/${locale}/send_an_invoice`} passHref >
                <ListItem button>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary={t('send_an_invoice')} />
                </ListItem>
                </Link>
                <ListItem>
                <ListItemIcon>
                    <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={t('add_an_item')} />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                    <BuildIcon />
                </ListItemIcon>
                <ListItemText primary={t('read_the_set_up_guide')}  />
                </ListItem>
                <Link href="/[lang]/finish_registration" as={`/${locale}/finish_registration`} passHref >
                <ListItem button >
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Finish signing up" />
                </ListItem>
                </Link>
            </List>
               
            </CardContent>
        <CardActions>
            <Button size="small" >{t('archive_order')}</Button>
        </CardActions>
    </Card>
    
  );
}