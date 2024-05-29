import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const ProductCard = ({item}) => {
  return (
    <Link to={`/shop/${item.id}`} className="productItem">
        <div className="productImage">
            <img src={item.imgUrl} alt="arm chair" width="100%"/>
        </div>

        <div className="cardHeading">
        <h3>{item.productName}</h3>
        <span>{item.category}</span>
        </div>
        
        <div className="productCardText">
            <span className="price">${item.price}</span>
        </div>
    </Link> 
  )
}

export default ProductCard;
