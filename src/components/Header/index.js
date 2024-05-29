import React from 'react'
import Navbar from '../Navbar';
import logo from "../../Utils/images/eco-logo.png";
import user from "../../Utils/images/user-icon.png";
import "./style.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cart = useSelector((state) => state.cart.cart);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header">
        <div className = "logoContainer">
            <img src={logo} alt="logo" width="50%"/>
            <div>
                <h3>Multimart</h3>
                <p>Since 1995</p>
            </div>
        </div>
            <Navbar />
        <div className="headerIcons">
            <Link to="/cart">
            <span className='cartIcon'>
                <i class="fa-solid fa-cart-shopping"></i>
                
                <span className="badge">{totalQuantity}</span>
          
            </span>
            </Link>
            <img src={user} alt="user profile" width="50%"/>
        </div>
    </div>
  )
}

export default Header;
