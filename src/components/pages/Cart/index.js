import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";

import emptyCart from "../../../Utils/images/empty-cart.png";

import { Link } from 'react-router-dom';
import CommonSection from '../../CommonSection';

import { removeFromCart } from '../../../Store/Action/cart';
const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);


  const handleRemoveFromCart =(id) =>{
    dispatch(removeFromCart(id))
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
    <CommonSection title="Cart" />
    <div className="cart">
        {cart.length===0?
        <div className="emptyCart">
        <img src={emptyCart} alt="empty cart"/>
        </div>
        :
        <div className="cartContainer">
        <table>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>

        {cart.map(item => (
          <tr>
            <td>

              <Link to ={`/shop/${item.id}`}><img src={item.imgUrl} alt="product" width="50px" height="50px" /></Link>
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}pc</td>
            <td><i class="fa-solid fa-trash" onClick={() => handleRemoveFromCart(item.id)}></i></td>

          </tr>
        ))}
      </table>
       <div className="orderSummary">
       <p>Number of Items : {totalItems}</p>
       <p>Amount : ${totalPrice}</p>
       <button>Place Order</button>
     </div>
        </div>
      
      }
    </div>
   
    </>
    
  )
}

export default Cart;
