
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>MegaTrove</h3>
         <p>Your ultimate destination for trendy and unique online shopping</p>
        <p>Follow us</p>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>

      </div>
      <div className="help-center">
        <h3>Help</h3>
        <p>Help Centre</p>
        <p>Contact Us</p>
        <p>Shipping & Delivery</p>
        <p>Returns</p>
        </div>

        <div className='account-details'>
        <h3>Account</h3>
        <p>My Account</p>
        <p>Track Order</p>
        <p>Returns</p>
        <p>Personal Details</p>
        </div>

      <div className="company-details">
      <h3>Company</h3>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Human Rights Statement</p>
        </div>
      
    </footer>
  );
};

export default Footer;





