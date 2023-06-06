import React from "react";
import './Services.css';
import Barbershop from '../../assets/barbershop1.png';
import { useNavigate } from "react-router-dom";

const Services = () => {

    let navigate = useNavigate();

    const bookClick = () => {
        navigate("/booking");
    };

    return (
        <div className="services">
            <div className="service-img">
                <img className="barber-img" src={Barbershop} alt="barbershop" />
            </div>
            <div className="service-info">
                <h1 className="h1-services">Our Services</h1>
                <h4 className="h4-services">
                Discover the art of grooming mastery at our barbershop, where exceptional services 
                blend with unmatched skill. 
                <br></br>
                Experience the epitome of style, precision, and satisfaction 
                as our expert barbers cater to your every grooming need.
                </h4>
            </div>
            <div className="book-now">
                <h2 className="h2-welcome" onClick={bookClick}>Book Now</h2>
            </div>
            <div className="barber-services">
                <div className="classic">
                    <h3 className="h3-services-cut">Classic Cut</h3>
                    <p className="p-services-cut">
                        A timeless scissor or clipper cut with expert styling and finishing for a polished and confident look.
                    </p>
                    <h6 className="h6-services-cut">
                        $25
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Beard Trim</h3>
                    <p className="p-services-cut">
                    Achieve a well-groomed beard with precise shaping and trimming, including the option for a clean line-up and additional grooming.
                    </p>
                    <h6 className="h6-services-cut">
                        $15
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Hot Towel Shave</h3>
                    <p className="p-services-cut">
                    Indulge in a relaxing experience with a hot towel treatment followed by a smooth straight razor shave, 
                    finished with moisturizing and soothing aftershave application.
                    </p>
                    <h6 className="h6-services-cut">
                        $30
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Beard Trim</h3>
                    <p className="p-services-cut">
                    Achieve a well-groomed beard with precise shaping and trimming, including the option for a clean line-up and additional grooming.
                    </p>
                    <h6 className="h6-services-cut">
                        $15
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Style and Design</h3>
                    <p className="p-services-cut">
                    Elevate your haircut experience with a customized style and personalized design, showcasing creative and intricate hair patterns.
                    </p>
                    <h6 className="h6-services-cut">
                        $25
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Luxury Package</h3>
                    <p className="p-services-cut">
                    Pamper yourself with the ultimate luxury package, including a premium haircut, 
                    a rejuvenating hot towel shave, an energizing scalp massage, and a facial treatment for exfoliation and moisturization.
                    </p>
                    <h6 className="h6-services-cut">
                        $50
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Kids Cut</h3>
                    <p className="p-services-cut">
                    Create a positive and comfortable environment for children (12 years and under) with gentle and patient styling to ensure a happy haircut experience.
                    </p>
                    <h6 className="h6-services-cut">
                        $15
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Senior Cut</h3>
                    <p className="p-services-cut">
                    Special pricing exclusively for senior clients (60+ years) who desire a tailored haircut and grooming experience.
                    </p>
                    <h6 className="h6-services-cut">
                        $15
                    </h6>
                </div>
                <div className="classic">
                    <h3 className="h3-services-cut">Express Trim</h3>
                    <p className="p-services-cut">
                    A quick touch-up service designed for existing customers, providing neck and sideburn clean-up to 
                    maintain a well-groomed appearance between full haircuts.
                    </p>
                    <h6 className="h6-services-cut">
                        $10
                    </h6>
                </div>
            </div>
            <div className="policy-service">
                <h1 className="h1-services">Shop Policy</h1>
                <h4 className="h4-services">
                    Our commitment is to provide you with exceptional service from the moment you schedule your appointment.
                </h4>
                <h2 className="h2-services">Prices and Services</h2>
                <h4 className="h4-services">
                Prices and services are subject to change without notice. We will do our best to keep our clients up to 
                date on any changes that may occur but encourage all clients to inquire about pricing and available services when booking your appointment. 
                </h4>
                <h2 className="h2-services">Cancellation Policy</h2>
                <h4 className="h4-services">
                Your spa treatments are reserved especially for you. We value your business and ask that you respect the spa's scheduling policies. 
                Should you need to cancel or reschedule, please notify us at least 24 hours in advance. Any cancellations (and no-shows)
                with less than 24 hours of notice are subject to a cancelation fee amounting to the 50% of the cost of the scheduled service.
                </h4>
                <h2 className="h2-services">Gratuity</h2>
                <h4 className="h4-services">
                Please be advised, gratuity is not included in service pricing.
                </h4>
            </div>
        </div>
    )
}

export default Services;