import React from "react";
import '../home/Home.css';
import Home1 from '../../assets/Home.png';

const Home = () => {

    return(
        <div className="Home">
            <div className="welcome">
                <h1>Welcome to Nyack Barbershop</h1>
                <p>Cutting Edge Styles for Every Generation</p>
            </div>
            <div className="image-home">
                <img className="image" src={Home1} alt="Home" />
            </div>
            <div className="yelp">
                
            </div>
        </div>
    )
}

export default Home;