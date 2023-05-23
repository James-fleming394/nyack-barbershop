import React from "react";
import './Header.css';
import Logo from '../assets/logo-large.png';

const Header = () => {

    return(
        <div className="header">
            <div className="logo">
                <img src={Logo} className="logo-img" alt="Logo" />
            </div>
            <div className="hours">
                <h4 className="h4">Hours of Operation</h4>
                <h6 className="h6">Monday-Friday: 9:00AM - 7:00PM</h6>
                <h6 className="h6">Saturday: 9:00AM - 6:00PM</h6>
                <h6 className="h6">Sunday: 10:00AM - 3:00PM</h6>
            </div>
            <div className="appointment">
                <h6 className="h6">Schedule an Appointment Today!</h6>
                <h4 className="h4"><a className="tel-link" href="tel:+18453582030">(845) 358-2030</a></h4>
            </div>
            <div className="directions">
                <h4 className="h4">Directions</h4>
                <h6 className="h6"><a className="direction-link" href="https://www.google.com/maps?um=1&fb=1&gl=us&sa=X&geocode=Kc_LIfkN6sKJMdqIIglked4X&daddr=69+Main+St,+Nyack,+NY+10960&ved=0CBAQiBNqFwoTCKD44aPui_8CFQAAAAAdAAAAABAY">69 Main St Nyack, NY 10960</a></h6>
            </div>
        </div>
    )
}

export default Header;