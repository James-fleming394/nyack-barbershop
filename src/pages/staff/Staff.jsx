import React from "react";
import './Staff.css';
import Barbershop2 from '../../assets/barbershop2.png';
import Vlad from '../../assets/Home4.png';
import Joe from '../../assets/joe-barbershop.png';
import Jenny from '../../assets/jenny-barbershop.png';
import Arthur from '../../assets/arthur-barbershop.png';
import { useNavigate } from "react-router-dom";

const Staff = () => {

    let navigate = useNavigate();

    const bookClick = () => {
        navigate("/booking");
    };

    return (
        <div className="staff">
            <div className="service-img">
                <img className="barber-img" src={Barbershop2} alt="barbershop" />
            </div>
            <div className="tagline-staff">
                <h1 className="h1-staff">Meet Our Team</h1>
                <h4 className="h4-staff">
                    Owned and operated by Vlad Muratov for the last decade and a half, <br></br>
                    The Nyack Barbershop has been a staple of service and barbering in Nyack since 1931.
                </h4>
            </div>
            <div className="staff-section">
                <div className="staff-individual">
                    <img className="staff-photo" alt="staff barbershop" src={Vlad} />
                    <div className="staff-info">
                        <h2 className="staff-name">Vlad</h2>
                        <h3 className="staff-desc">
                            Vlad Muratov is the owner of Nyack Barbershop. Trained in New York City, he bought the shop from its original owners 15 years ago. 
                            He brought the storefront back to its original splendor, just as it looked when tourists came by steamship from Manhattan. 
                            Vlad is a master barber with experience with all different types of cuts and services. 
                            <br></br>
                            <br></br>
                            Come see Vlad and say hello!
                        </h3>
                    </div>
                </div>
                <div className="staff-individual">
                    <img className="staff-photo" alt="staff barbershop" src={Joe} />
                    <div className="staff-info">
                        <h2 className="staff-name">Joe</h2>
                        <h3 className="staff-desc">
                        Meet Joe, the seasoned barber with a passion for crafting exceptional styles. With years of experience in the industry, 
                        he possesses the expertise to deliver precision cuts tailored to each client's unique personality. 
                        From classic trims to modern trends, Joe's attention to detail and friendly demeanor ensure a satisfying grooming experience every time.
                        </h3>
                    </div>
                </div>
                <div className="staff-individual">
                    <img className="staff-photo" alt="staff barbershop" src={Jenny} />
                    <div className="staff-info">
                        <h2 className="staff-name">Jenny</h2>
                        <h3 className="staff-desc">              
                        Introducing Jenny, the skilled barber who combines creativity and precision to create stunning looks. 
                        With a keen eye for detail and a passion for her craft, she specializes in trendy and edgy hairstyles that make a statement. 
                        Jenny's friendly personality and dedication to client satisfaction ensure a personalized and enjoyable experience at the barbershop.
                        </h3>
                    </div>
                </div>
                <div className="staff-individual">
                    <img className="staff-photo" alt="staff barbershop" src={Arthur} />
                    <div className="staff-info">
                        <h2 className="staff-name">Arthur</h2>
                        <h3 className="staff-desc">
                        Meet Arthur, the talented barber who brings a blend of artistry and expertise to every haircut. With a knack 
                        for understanding his clients' individual styles, Arthur effortlessly delivers impeccable trims and stylish 
                        grooming solutions. Known for his friendly demeanor and commitment to customer satisfaction, 
                        Eugene creates an inviting atmosphere where clients can trust they'll leave with a fresh and confident look.
                        </h3>
                    </div>
                </div>
                <div className="book-now">
                    <h2 className="h2-welcome" onClick={bookClick}>Book Now</h2>
                </div>
            </div>
        </div>
    )
}

export default Staff;