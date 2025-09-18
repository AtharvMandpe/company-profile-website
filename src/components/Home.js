import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faShieldAlt, 
  faCogs, 
  faAward,
  faIndustry,
  faUsers,
  faGlobe,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to OM Chemicals</h1>
          <p>Your Trusted Partner in Chemical Solutions & Manufacturing Excellence</p>
          <p className="hero-subtitle">
            Leading the industry with innovative chemical solutions, advanced manufacturing capabilities, 
            and unwavering commitment to quality and safety.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <FontAwesomeIcon icon={faIndustry} className="stat-icon" />
              <h3>25+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faFlask} className="stat-icon" />
              <h3>500+</h3>
              <p>Chemical Products</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faUsers} className="stat-icon" />
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faGlobe} className="stat-icon" />
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Services</h2>
            <p>Comprehensive chemical solutions tailored to meet your specific industry requirements</p>
          </div>
          <div className="grid grid-3">
            <div className="service-card">
              <FontAwesomeIcon icon={faCogs} className="service-icon" />
              <h3>Custom Manufacturing</h3>
              <p>Specialized chemical manufacturing services with state-of-the-art facilities and advanced technology.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faFlask} className="service-icon" />
              <h3>Research & Development</h3>
              <p>Innovative R&D solutions to develop new chemical formulations and improve existing products.</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes ensuring the highest standards and regulatory compliance.</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose OM Chemicals?</h2>
            <p>We combine decades of expertise with cutting-edge technology to deliver exceptional results</p>
          </div>
          <div className="grid grid-2">
            <div className="feature-content">
              <div className="feature-item">
                <FontAwesomeIcon icon={faAward} className="feature-icon" />
                <div>
                  <h4>Industry Leadership</h4>
                  <p>25+ years of proven expertise in chemical manufacturing and distribution</p>
                </div>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
                <div>
                  <h4>Safety First</h4>
                  <p>Comprehensive safety protocols and environmental compliance in all operations</p>
                </div>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faCogs} className="feature-icon" />
                <div>
                  <h4>Advanced Technology</h4>
                  <p>State-of-the-art manufacturing facilities with cutting-edge equipment</p>
                </div>
              </div>
              <div className="feature-item">
                <FontAwesomeIcon icon={faLeaf} className="feature-icon" />
                <div>
                  <h4>Environmental Responsibility</h4>
                  <p>Commitment to sustainable practices and eco-friendly manufacturing processes</p>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <div className="image-placeholder">
                <FontAwesomeIcon icon={faIndustry} className="placeholder-icon" />
                <p>Modern Chemical Manufacturing Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner with Us?</h2>
            <p>Let's discuss how OM Chemicals can meet your specific chemical manufacturing needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Start a Project</Link>
              <Link to="/products" className="btn btn-secondary">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

