/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useTranslation from '../hooks/useTranslation';



export default function ComboBox() {
  const {  t } = useTranslation();

  const orders = [
    { title: t('product_name'), shipping_price: t('shipping_price'), order_no: t('order_number') },
    { title: t('talech_starter'), shipping_price: t('shipping_price'), order_no: t('order_number')  },
    { title: t('talech_standard'), shipping_price: t('shipping_price'), order_no: t('order_number') },
    { title: t('talech_premium'), shipping_price: t('shipping_price'), order_no: t('order_number') },
  ];

  return (
    <Autocomplete
      id="search-orders-demo"
      options={orders}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
