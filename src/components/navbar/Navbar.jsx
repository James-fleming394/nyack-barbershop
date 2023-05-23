import React from "react";
import '../navbar/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="Navbar">
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links" to="/services">Services</Link>
                <Link className="nav-links" to="/staff">Staff</Link>
                <Link className="nav-links" to="/gallery">Gallery</Link>
                <Link className="nav-links" to="/products">Products</Link>
                <Link className="nav-links" to="/about">About</Link>
        </div>
    )
}

export default Navbar;