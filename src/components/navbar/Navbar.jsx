import React from "react";
import '../navbar/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="Navbar">
            <ul className="nav">
                <li className="-nav-li"><Link to="/">Home</Link></li>
                <li className="-nav-li"><Link to="/services">Services</Link></li>
                <li className="-nav-li"><Link to="/staff">Staff</Link></li>
                <li className="-nav-li"><Link to="/gallery">Gallery</Link></li>
                <li className="-nav-li"><Link to="/products">Products</Link></li>
                <li className="-nav-li"><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;