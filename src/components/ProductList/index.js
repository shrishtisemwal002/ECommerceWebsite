import React from 'react'
import ProductCard from '../ProductCard';
import "./style.css";

const ProductList = ({data}) => {
  return (
    <div className="productCardContainer">
        {
            data.map(item=> (
                <ProductCard item={item}/>
            ))
        }

    </div>
  )
}

export default ProductList;
