import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useTranslation from '../hooks/useTranslation';
import Link from 'next/link'


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

export default function StarterBundle() {
  const classes = useStyles();
  const { locale, t } = useTranslation()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {t('talech_starter')}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {t('new_business')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
          {t('reporting')}
        </Typography>
        <Typography variant="body2" component="p">
          {t('basic_sales')}
        </Typography>
        <Typography variant="body2" component="p">
          {t('basic_reporting')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('security')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('compliance_tools')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('settlement')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('two_days')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('cards_supported')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('yes')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('rental_fee')} 
        </Typography>
        <Typography variant="body2" component="p">
        {t('price')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('rates')} 
        </Typography>
        <Typography variant="body2" component="p">
        {t('clear_inperson')} 
        </Typography>
        <Typography variant="body2" component="p">
        {t('clear_keyed')} 
        </Typography>
        <Typography variant="body2" component="p">
        {t('clear_online')} 
        </Typography>
      </CardContent>
      <CardActions>
            <Typography variant='body1'>
            <Link href="/[lang]/registration" as={`/${locale}/registration`}>
            <Button size="small" startIcon={<AddShoppingCartIcon />} variant='outlined'>{t('apply_now')}</Button>
            </Link>
            </Typography>
            
            <Link href="/[lang]/learn_more_starter" as={`/${locale}/learn_more_starter`}>
            <Button size="small" variant='text'>{t('learn_more')}</Button>
            </Link>
      </CardActions>
    </Card>
  );
}