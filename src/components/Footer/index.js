import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className = "footer">
      <div className = "footerLists">
      <div className = "footerLogoContainer">
            <div>
                <h1>Multimart</h1>
            </div>
            <p className="footerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo possimus consectetur tempore reprehenderit esse, molestiae ullam tenetur
            </p>
      </div>
      <div className="footerLinks">
        <h2>Top Categories</h2>
        <ul>
          <li><Link to="">Modern Sofa</Link></li>
          <li><Link to="">Chair</Link></li>
          <li><Link to="">Mobile</Link></li>
          <li><Link to="">Watch</Link></li>
          <li><Link to="">Wireless</Link></li>

        </ul>
      </div>
      <div className="footerUsefulLinks">
        <h2>Useful Links</h2>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footerContactInfo">
        <h2>Contact</h2>
        <ul>
          <li><span><i class="fa-solid fa-address-book"></i></span> 135-a Street abc</li>
          <li><span><i class="fa-solid fa-phone"></i></span> +91 1234567890</li>
          <li><span><i class="fa-solid fa-envelope"></i></span> multimart@gmail.com</li>
        </ul>
      </div>
      </div>
        <div>
          <p className="copyrightInfo">Copyright 2024. Alli right reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
