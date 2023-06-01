import React from "react";
import './Footer.css';
import { useState } from "react";

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
        </div>
    )
}

export default Footer;