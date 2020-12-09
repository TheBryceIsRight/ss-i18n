
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import {
  Button
} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import VerticalTabs from '../../components/VerticalTabs';


function Settings() {

    const { locale, t } = useTranslation();


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