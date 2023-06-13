import React from "react";
import './Gallery.css';
import image1 from '../../assets/Home3.png';
import image2 from '../../assets/gallery1.png';
import image3 from '../../assets/gallery2.png';
import image4 from '../../assets/gallery3.png';
import image5 from '../../assets/gallery4.png';
import image6 from '../../assets/gallery5.png';
import image7 from '../../assets/gallery6.png';
import image8 from '../../assets/Home2.png';
import image9 from '../../assets/Home1.png';
import image10 from '../../assets/gallery7.png';
import image11 from '../../assets/gallery8.png';
import image12 from '../../assets/gallery9.png';
import image13 from '../../assets/gallery10.png';
import image14 from '../../assets/gallery11.png';
import image15 from '../../assets/gallery12.png';
import image16 from '../../assets/gallery13.png';

const Gallery = () => {

    const photos = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16
    ];


    return(
        <div className="gallery">
            {photos.map((photo, index) => (
                <img key={index} className="image-gallery" src={photo} alt={`Photo ${index + 1}`} />
            ))}
        </div>
    )
}

export default Gallery;