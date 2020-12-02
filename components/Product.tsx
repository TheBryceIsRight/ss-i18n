/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import {withRouter} from 'next/router';
import {Router} from 'next/router';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExploreIcon from '@material-ui/icons/Explore';
import useTranslation from '../hooks/useTranslation';

export interface IProduct {
  id: string
  name: string
  price: number
  url: string  
  description: string
  image: string
  reporting: string
  security: string
  settlement: string
  card_types: string
  rates: string
}
interface IProductProps {
  product: IProduct
  router: Router
}



function Product(props: IProductProps) {

const { t } = useTranslation();

  return (
    <div className="product">
    <br/>
    <Card>
      <CardContent>
        <Typography variant='h4' className="product__title">{props.product.name}</Typography>
        <Typography variant='body1' className="product__description">{props.product.description}</Typography>
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
          PCI Compliance Tools
        </Typography>
        <br/>
        <Typography variant="h6" component='h3'>
            Settlement
        </Typography>
        <Typography variant="body2" component="p">
        {props.product.settlement}
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
        <div className="product__price-button-container">
        <Typography variant='body1' className="product__price">${props.product.price.toFixed(2)}</Typography></div>
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
        {/* 
        <Button
        size="small" 
        startIcon={<AddShoppingCartIcon />}
        className="snipcart-add-item product__button"
        data-item-id={props.product.id}
        data-item-name={props.product.name}
        data-item-price={props.product.price}
        data-item-url={props.router.pathname}
        data-item-image={props.product.image}>
        Apply Now</Button>
        */}
        <Button
        size="small" 
        startIcon={<AddShoppingCartIcon />}>
        Apply Now</Button>
        <Button startIcon={<ExploreIcon />}>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}
export default withRouter(Product)