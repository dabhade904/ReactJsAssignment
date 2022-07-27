import React from "react";
import TextField from "@mui/material/TextField";
import Favicon from "./../../img/favicon.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "../footer/footer.css";
function footer() {
  return (
    <div className="footer-main-div">
      <div>
        <div style={{ marginLeft: "130px", marginTop: "50px" }}>
          <img src={Favicon} alt="" />
          <FaFacebook href="www.facebook.com" />
          <FaInstagram href="www.instagram.com" />
          <FaLinkedinIn href="www.linkedin.com" />
          <FaTwitter href="www.twitter.com" />
        </div>
      </div>
      <div className="main-div">
        <div>
          <p>Company</p>
          <p>About</p>
          <p>Contact</p>
          <p>Career</p>
        </div>
        <div>
          <p>Product & Services</p>
          <p>Product</p>
          <p>Business</p>
          <p>Developer</p>
        </div>
        <div>
          <p>Help & Suport</p>
          <p>Suport Center</p>
          <p>FAQ</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p>Subscribe Newsletter</p>
          <TextField
            label="Your Email"
            style={{
              width: "350px",
              borderRadius: "40vh",
              backgroundColor: "gray",
            }}
          />
          <p>
            Subscribe weekly newsletter to stay upto date.
            <br />
            We don’t send spam.
          </p>
        </div>
      </div>
      <div className="footer-last">
        <p>Template Crafted by UIdeck - UI Powered by AyroUI</p>
      </div>
    </div>
  );
}

export default footer;
