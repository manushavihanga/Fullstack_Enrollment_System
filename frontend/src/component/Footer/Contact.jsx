import React from 'react'
import './Footer.css'
import { assets } from '../../assets/asset'

const Contact = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src="#" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem nulla maxime omnis impedit, tenetur sapiente itaque quisquam praesentium vitae ullam aut vero quis nostrum reprehenderit eos quas. Similique, ad!
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Lectures</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                 <h2>
                    GET IN TOUCH
                 </h2>
                 <ul>
                    <li>+9476-4689602</li>
                    <li>contact@evolution.com</li>
                 </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 @ evolution.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Contact
