import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/" className="brand-link">
                <FontAwesomeIcon icon={faFlask} className="brand-icon" />
                <span className="brand-text">OM Chemicals</span>
              </Link>
              <p className="brand-description">
                Leading manufacturer of specialty chemicals with 25+ years of 
                excellence in quality, innovation, and customer satisfaction.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/quality">Quality & Safety</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="/services">Custom Manufacturing</a></li>
              <li><a href="/services">Research & Development</a></li>
              <li><a href="/services">Quality Assurance</a></li>
              <li><a href="/services">Logistics & Distribution</a></li>
              <li><a href="/services">Contract Manufacturing</a></li>
              <li><a href="/services">Technical Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <div>
                  <p>OM Chemicals Pvt. Ltd.</p>
                  <p>Industrial Area, Phase II</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <div>
                  <p>+91 22 1234 5678</p>
                  <p>+91 22 8765 4321</p>
                </div>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <div>
                  <p>info@omchemicals.com</p>
                  <p>sales@omchemicals.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 OM Chemicals Pvt. Ltd. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
