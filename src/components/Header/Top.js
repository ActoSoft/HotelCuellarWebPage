import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Top = () => {
  return (
    <div className="top">
      <h2>
        Contáctanos directamente al 775 679 3825
      </h2>
      <div className="social-icons">
        <a href="facebook.com"><FaFacebookF /></a>
        <a href="twitter.com"><FaTwitter /></a>
        <a href="youtube.com"><FaYoutube /></a>
        <a href="instagram.com"><FaInstagram /></a>
      </div>
    </div>
  )
};

export default Top;