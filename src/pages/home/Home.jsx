import React from "react";
import '../home/Home.css';
import Home1 from '../../assets/Home.png';
import { useNavigate } from "react-router-dom";
import Home01 from '../../assets/Home1.png';

const Home = () => {

    let navigate = useNavigate();

    const bookClick = () => {
        navigate("/booking");
    };

    const staffClick = () => {
        navigate("/staff");
    };

    const serviceClick = () => {
        navigate("/services")
    };

    return(
        <div className="Home">
            <div className="welcome">
                <h1>Welcome to Nyack Barbershop</h1>
                <p>Cutting Edge Styles for Every Generation</p>
            </div>
            <div className="image-home">
                <img className="image" src={Home1} alt="Home" />
            </div>
            <div className="book-now">
                <h2 onClick={bookClick}>Our Staff</h2>
                <h2 onClick={staffClick}>Book Now</h2>
                <h2 onClick={serviceClick}>Our Services</h2>
            </div>
            <div className="showoff">
                <div className="left-side">
                    <h6>
                        At Nyack Barbershop, we pride ourselves on being a barbershop that caters to the entire family. 
                        Our mission is to create a welcoming and comfortable environment where everyone can enjoy their 
                        grooming experience. With a team of highly skilled barbers, we offer top-notch service that ensures 
                        every customer leaves feeling confident and satisfied.
                    </h6>
                    <h3>To avoid a wait, please call for an appointment. Walk-ins always welcome. </h3>
                </div>
                <div className="right-side">
                    <img className="right-img" src={Home01} alt="home right" />
                </div>
            </div>
            <div className="yelp">
                <div className="elfsight-app-63c859e2-7023-41bd-804a-b8d1727cc51e"></div>
            </div>
        </div>
    )
}

export default Home;