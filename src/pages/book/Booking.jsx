import React from "react";
import './Booking.css';
import { useState } from "react";
import Vlad from '../../assets/vlad-icon.png';
import Joe from '../../assets/joe-barbershop.png';
import Jenny from '../../assets/jenny-barbershop.png';
import Arthur from '../../assets/arthur-barbershop.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';


const Booking = () => {

    const [selectedBarber, setSelectedBarber] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleBarberChange = (event) => {
        setSelectedBarber(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
    
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const Popup = ( {onClose} ) => {
        return (
            <div className="popup-overlay">
                <div className="popup-content">
                <h2>Thank you for your appointment!</h2>
                <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    };

    const [showPopup, setShowPopup] = useState(false);

    return(
        <div className="booking">
            <h1 className="book-h1">Book an Appointment</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="form-label">Barber:</label>
            <select className="form-select" value={selectedBarber} onChange={handleBarberChange}>
            <option value="">Select a barber</option>
            <option value="barber1">Vlad</option>
            <option value="barber2">Joe </option>
            <option value="barber3">Jenny</option>
            <option value="barber3">Arthur</option>
            </select>
        </div>
        <div className="form-group">
            <label className="form-label">Time:</label>
            <input type="time" className="form-input" value={selectedTime} onChange={handleTimeChange} />
        </div>
        <div className="form-group">
            <label className="form-label">Date:</label>
            <input type="date" className="form-input" value={selectedDate} onChange={handleDateChange} />
        </div>
        <button className="form-button" type="submit">Book Appointment</button>
        </form>
        {showPopup && <Popup onClose={handleClosePopup} />}
        <h1 className="icon-h1">Our Staff</h1>
        <div className="barber-icons">
                <div className="barber-card">
                    <img className="barber-card-img" src={Vlad} alt="barber card" />
                    <h2 className="barber-icon-name">Vlad</h2>
                    <p className="barber-icon-p">Owner <br></br> Master Barber</p>
                    <a href="https://www.facebook.com/nyackbarbershop"><img className="social-img-icon" src={Facebook} alt="icon" /></a>
                    <a href="https://www.instagram.com/nyackbarbershop/"><img className="social-img-icon" src={Instagram} alt="icon" /></a>
                </div>
                <div className="barber-card">
                    <img className="barber-card-img" src={Arthur} alt="barber card" />
                    <h2 className="barber-icon-name">Arthur</h2>
                    <p className="barber-icon-p">Barber</p>
                    <a href="https://www.facebook.com/nyackbarbershop"><img className="social-img-icon" src={Facebook} alt="icon" /></a>
                    <a href="https://www.instagram.com/nyackbarbershop/"><img className="social-img-icon" src={Instagram} alt="icon" /></a>
                </div>
                <div className="barber-card">
                    <img className="barber-card-img" src={Joe} alt="barber card" />
                    <h2 className="barber-icon-name">Joe</h2>
                    <p className="barber-icon-p">Master Barber</p>
                    <a href="https://www.facebook.com/nyackbarbershop"><img className="social-img-icon" src={Facebook} alt="icon" /></a>
                    <a href="https://www.instagram.com/nyackbarbershop/"><img className="social-img-icon" src={Instagram} alt="icon" /></a>
                </div>
                <div className="barber-card">
                    <img className="barber-card-img" src={Jenny} alt="barber card" />
                    <h2 className="barber-icon-name">Jenny</h2>
                    <p className="barber-icon-p">Barber <br></br> Hair Stylist</p>
                    <a href="https://www.facebook.com/nyackbarbershop"><img className="social-img-icon" src={Facebook} alt="icon" /></a>
                    <a href="https://www.instagram.com/nyackbarbershop/"><img className="social-img-icon" src={Instagram} alt="icon" /></a>
                </div>
            </div>
        </div>
        
    )
}

export default Booking;