import React from "react";
import './Footer.css';
import { useState } from "react";
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Yelp from '../../assets/yelp.png';
import Logo from '../../assets/logo-small.png';

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for joining our community!');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return(
        <div className="footer">
            <div className="footer-signup">
                <h5>Sign up to stay up to deal with our weekly deals!</h5>
                <form className="newsletter form">
                    <input className="footer-input" 
                        type="email"
                        placeholder="Enter Your Email Here"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button className="footer-btn" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
            <div className="footer-links">
                <div className="logo">
                    <img src={Logo} className="logo-img1" alt="logo" />
                </div>
                <div className="footer-last">
                    <h4>Contact Us Here:</h4>
                    <h4><a className="tel-link" href="tel:+18453582030">(845) 358-2030</a></h4>
                    <h4>Copyright (C) 2023 Nyack Barbershop - All Rights Reserved</h4>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/nyackbarbershop"><img className="social-img" src={Facebook} alt="icon" /></a>
                    <a href="https://www.instagram.com/nyackbarbershop/"><img className="social-img" src={Instagram} alt="icon" /></a>
                    <a href="https://www.yelp.com/biz/nyack-barbershop-nyack"><img className="social-img" src={Yelp} alt="icon" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;