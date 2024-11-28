import './Carousel.css'
import { useState } from 'react';

function Carousel() {
    const imgs = [
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a76db078b31108e1.jpeg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1316eb53d6f52c71.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cf3eceea3f859d00.jpeg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0511ba08d5abe9aa.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6412e295e539d1c3.jpeg?q=20'
    ]

    let [currentImg, setCurrentImg] = useState(0);

    function prevImg() {
        setCurrentImg((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    }

    function nextImg() {
        setCurrentImg((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }

    return (
        <div id='carouselContainer'>
            <button id='back' onClick={prevImg}>&lt;</button>
            <img src={imgs[currentImg]} alt='Carousel Slide' />
            <button id='next' onClick={nextImg}>&gt;</button>
        </div>
    )
}

export default Carousel;