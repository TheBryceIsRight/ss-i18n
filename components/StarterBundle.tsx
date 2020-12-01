import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Talech Starter
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Great for a new business
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            Reporting
        </Typography>
        <Typography variant="body2" component="p">
          Basic Sales
        </Typography>
        <Typography variant="body2" component="p">
          Basic Reporting
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            Security
        </Typography>
        <Typography variant="body2" component="p">
          PCI Compliance Tools
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            Settlement
        </Typography>
        <Typography variant="body2" component="p">
          2 business days
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            All card types supported?
        </Typography>
        <Typography variant="body2" component="p">
          Yes
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            Rental Fee
        </Typography>
        <Typography variant="body2" component="p">
          $XX a month
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            Rates
        </Typography>
        <Typography variant="body2" component="p">
            Clear and Simple Pricing (in-person)
        </Typography>
        <Typography variant="body2" component="p">
            Clear and Simple Pricing (keyed)
        </Typography>
        <Typography variant="body2" component="p">
            Clear and Simple Pricing (online)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}