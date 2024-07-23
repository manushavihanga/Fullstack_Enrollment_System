import React, { useState, useEffect } from 'react';
import './Header.css';
import header_img1 from '../../assets/header_img1.jpg';
import header_img2 from '../../assets/header_img2.jpg';
import header_img3 from '../../assets/header_img3.jpg';

const Header = () => {
    const [heroCount, setHeroCount] = useState(0);
    let heroData = [
        {text1: "Unlock Your Potential", text2: "Join us on a journey of lifelong learning."},
        {text2: "Pursue Your Passions", text1: "Discover opportunities for success."},
        {text1: "Join Our Community", text2: "learners who are shaping the future."},
    ];

    let backgroundImage;
    if(heroCount === 0) {
        backgroundImage = header_img1;
    } else if(heroCount === 1) {
        backgroundImage = header_img2;
    } else {
        backgroundImage = header_img3; 
    }

useEffect(() => {
        const interval = setInterval(() => {
            setHeroCount(prevCount => (prevCount + 1) % heroData.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className='header' id='header' style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            <div className="backimg">
            <div className="hero-text">
                 <p>{heroData[heroCount].text1}</p>
                 <p>{heroData[heroCount].text2}</p>
                </div>
                <div className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot black" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot black" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot black" : "hero-dot"}></li>
                </div>
                
            </div>
        </div>
    );
}

export default Header;
