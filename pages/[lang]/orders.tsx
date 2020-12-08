
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
import OrderGrid from '../../components/OrderGrid';
import Link from 'next/link';
import Button from '@material-ui/core/Button';





// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

function Orders() {

  const { t, locale } = useTranslation();


    return <React.Fragment>
      <Head>
        <title>
        Your Orders
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>

          <br/>

        </Media>

        {/*Tablet */}
        <Media at='md'>
          <br/>

        </Media>

        {/*Desktop */}
        <Media at='lg'>
          <br/>
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link href="/[lang]/portal" as={`/${locale}/portal`} passHref >
            <Button>{t('home')}</Button>
            </Link>
            <Typography color="textPrimary">
                Your Orders
            </Typography>
          </Breadcrumbs>
        <br/>
          <OrderGrid/>
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

export default withLocale(Orders) 