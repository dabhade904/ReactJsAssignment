import React from "react";
import '../appbar/appbar.css'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaRocket,
} from "react-icons/fa";
import Home from "../home/home";
import Favicon from './../../img/favicon.png'
const appbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          {/* <li>
            <FaRocket style={{width:""}} />
          </li> */}
          <img src={Favicon} alt="" style={{width:"40px"}}/>
        </div>
        <div className="menu-link">
          <ul>
            <h3>
              <a href="#" onClick={Home}>HOME</a>
            </h3>
            <h3>
              <a href="#">SERVICES</a>
            </h3>
            <h3>
              <a href="#">PRICING</a>
            </h3>
            <h3>
              <a href="#">TESTIMONIAL</a>
            </h3>
            <h3>
              <a href="#">CONTACT</a>
            </h3>
          </ul>
        </div>
        <div className="social-media">
        
          <ul className="social-media-desktop">
          <h3>FOLLOW SS </h3>
            <li>
              <a href="https://www.Facebook.com">
                <FaFacebook className="facebook " />
              </a>
            </li>
            <li>
              <a href="https://www.Instagram.com ">
                {" "}
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.Instagram.com ">
                {" "}
                <FaTwitter className="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.LinkedIn.com">
                <FaLinkedinIn className="linkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default appbar;
