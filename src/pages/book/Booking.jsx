import React from "react";
import './Booking.css';
import { useState } from "react";

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

        console.log('Selected Barber:', selectedBarber);
        console.log('Selected Time:', selectedTime);
        console.log('Selected Date:', selectedDate);
    }

    return(
        <div className="booking">
            <h1>Book an Appointment</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Barber:</label>
            <select value={selectedBarber} onChange={handleBarberChange}>
            <option value="">Select a barber</option>
            <option value="barber1">Vlad</option>
            <option value="barber2">Joe </option>
            <option value="barber3">Jenny</option>
            <option value="barber3">Arthur</option>
            </select>
        </div>
        <div>
            <label>Time:</label>
            <input type="time" value={selectedTime} onChange={handleTimeChange} />
        </div>
        <div>
            <label>Date:</label>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <button type="submit">Book Appointment</button>
        </form>
        </div>
    )
}

export default Booking;