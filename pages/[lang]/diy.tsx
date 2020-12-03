
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import CheckboxesGroup from '../../components/CheckboxesGroup';
import { Media, MediaContextProvider } from "../../utils/media";
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import StarterBundle from '../../components/StarterBundle';
import StandardBundle from '../../components/StandardBundle';
import PremiumBundle from '../../components/PremiumBundle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'; 
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



// eslint-disable-next-line @typescript-eslint/interface-name-prefix
{/*
interface IIndexProps {
  products: IProduct[]
} 
*/}

function DIY() {

  const { t } = useTranslation()

    return <React.Fragment>
      <Head>
        <title>
        DIY Sales Demo
        </title>
      </Head>
      <MediaContextProvider>
        
        {/*Mobile */}
        <Media lessThan='md'>
          <Typography variant="h3" component="h2">
              {t('offerings')}
          </Typography>

          <Typography variant="h5" component="h3">
            {t('introducing_talech')}
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
            {t('no_fees')}
          </Typography>
          <Typography variant="body2" component="h4">
              {t('use_your_mobile')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <GridList className="product-list" cellHeight='auto' spacing={20}>
                <GridListTile>
                  <StarterBundle/>
                </GridListTile>
                <GridListTile>
                  <StandardBundle/>
                </GridListTile>
                <GridListTile>
                  <PremiumBundle/>
                </GridListTile>
              </GridList>
        </Media>

        {/*Tablet */}
        <Media at='md'>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>

          <Typography variant="h5" component="h3">
          {t('introducing_talech')}
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
          {t('no_fees')}
          </Typography>
          <Typography variant="body2" component="h4">
          {t('use_your_mobile')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <GridList className="product-list" cellHeight='auto' spacing={20}>
                <GridListTile>
                  <StarterBundle/>
                </GridListTile>
                <GridListTile>
                  <StandardBundle/>
                </GridListTile>
                <GridListTile>
                  <PremiumBundle/>
                </GridListTile>
              </GridList>
        </Media>

        {/*Desktop */}
        <Media at='lg'>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>

          <Typography variant="h5" component="h3">
          {t('introducing_talech')}
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
          {t('no_fees')}
          </Typography>
          <Typography variant="body2" component="h4">
          {t('use_your_mobile')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
              <br/>
              <GridList className="product-list" cellHeight='auto' spacing={20}>
                <GridListTile>
                  <StarterBundle/>
                </GridListTile>
                <GridListTile>
                  <StandardBundle/>
                </GridListTile>
                <GridListTile>
                  <PremiumBundle/>
                </GridListTile>
              </GridList>
        </Media>

        {/*High Resolution Desktop */}
        <Media at='xl'>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>
          <Typography variant="h5" component="h3">
          {t('introducing_talech')}
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
          {t('no_fees')}
          </Typography>
          <Typography variant="body2" component="h4">
          {t('use_your_mobile')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <GridList className="product-list" cellHeight='auto' spacing={20}>
                <GridListTile>
                  <StarterBundle/>
                </GridListTile>
                <GridListTile>
                  <StandardBundle/>
                </GridListTile>
                <GridListTile>
                  <PremiumBundle/>
                </GridListTile>
              </GridList>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} >
            <Typography color="textPrimary">
                {t('home')}
            </Typography>
          </Breadcrumbs>
        <br/>
          <Typography variant="h3" component="h2">
          {t('offerings')}
          </Typography>

          <Typography variant="h5" component="h3">
          {t('introducing_talech')}
          </Typography>
          <br/>
          <Typography variant="body2" component="h4">
          {t('no_fees')}
          </Typography>
          <Typography variant="body2" component="h4">
          {t('use_your_mobile')}
          </Typography>
          <br/>
          <CheckboxesGroup/>
          <br/>
          <GridList className="product-list" cellHeight='auto' spacing={20}>
                <GridListTile>
                  <StarterBundle/>
                </GridListTile>
                <GridListTile>
                  <StandardBundle/>
                </GridListTile>
                <GridListTile>
                  <PremiumBundle/>
                </GridListTile>
              </GridList>
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

export default withLocale(DIY) 