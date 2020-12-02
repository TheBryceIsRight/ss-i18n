import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useTranslation from '../hooks/useTranslation';


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

export default function StandardBundle() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {t('talech_premium')}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {t('growing_business')}
        </Typography>
        <Typography variant="h6" component='h3'>
        {t('reporting')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('sales')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('profit_margin')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('advanced_inventory')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('security')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('encryption')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('light_touch')}
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
        {t('settlement')}
        </Typography>
        <Typography variant="body2" component="p">
        {t('same_day')}
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
        <Button size="small" startIcon={<AddShoppingCartIcon />}>{t('apply_now')}</Button>
        <Button size="small" >{t('learn_more')}</Button>
      </CardActions>
    </Card>
  );
}