import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () =>{
    return(
        <div className="navBar">
            <ul className="navList">
                <li className="navItem"><Link to="/">HOME</Link></li>
                <li className="navItem"><Link to="/shop">SHOP</Link></li>
                <li className="navItem"><Link to="/cart">CART</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;