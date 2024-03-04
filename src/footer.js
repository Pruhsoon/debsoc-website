

import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Address:Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078</p>

          <p>Phone: Kabir +91 98711 96238</p>
        </div>
        <div className="social-media">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/debsocnsut/" target="_blank" rel="noopener noreferrer">
              <img src="images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedIn.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
