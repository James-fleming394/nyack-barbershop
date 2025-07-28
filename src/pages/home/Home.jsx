import React, { useEffect, useState } from "react";
import '../home/Home.css';
import Home1 from '../../assets/Home.png';
import Home01 from '../../assets/Home1.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const mapTimer = setTimeout(() => setShowMap(true), 150);
    return () => {
      clearTimeout(mapTimer);
    };
  }, []);

  const bookClick = () => navigate("/booking");
  const staffClick = () => navigate("/staff");
  const serviceClick = () => navigate("/services");

  return (
    <div className="Home">
      <div className="welcome">
        <h1 className="h1-welcome">Welcome to Nyack Barbershop</h1>
        <p className="p-welcome">Cutting Edge Styles for Every Generation</p>
      </div>

      <div className="image-home">
        <img className="image" src={Home1} alt="Home" />
      </div>

      <div className="book-now">
        <h2 className="h2-welcome" onClick={staffClick}>Our Staff</h2>
        <h2 className="h2-welcome" onClick={bookClick}>Book Now</h2>
        <h2 className="h2-welcome" onClick={serviceClick}>Our Services</h2>
      </div>

      <div className="showoff">
        <div className="left-side">
          <h6>
            At Nyack Barbershop, we pride ourselves on being a barbershop that caters to the entire family. 
            Our mission is to create a welcoming and comfortable environment where everyone can enjoy their 
            grooming experience. With a team of highly skilled barbers, we offer top-notch service that ensures 
            every customer leaves feeling confident and satisfied.
          </h6>
          <h3>To avoid a wait, please call for an appointment. Walk-ins always welcome.</h3>
        </div>
        <div className="right-side">
          <img className="right-img" src={Home01} alt="home right" />
        </div>
      </div>

      {showMap && (
        <div className="google-maps-container">
          <iframe 
            className="google-maps"
            title="Google Map Nyack Barbershop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.002785616314!2d-73.92042882372733!3d41.09078577133914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ea0df921cbcf%3A0x17de7964092288da!2sNyack%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1686690667106!5m2!1sen!2sus" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default Home;