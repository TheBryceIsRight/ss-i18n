import Product, { IProduct } from "./Product"
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <GridList className="product-list" cellHeight='auto' spacing={20}>
        {props.products.map((product, index) => (
            <GridListTile key={index}>
                 <Product product={product} key={index}/>
            </GridListTile>
        ))}
    </GridList>
  )
}
export default ProductList