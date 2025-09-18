import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faShieldAlt, 
  faCogs, 
  faAward,
  faIndustry,
  faUsers,
  faGlobe,
  faLeaf,
  faEye,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About OM Chemicals</h1>
          <p>Pioneering Excellence in Chemical Manufacturing Since 1998</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Story</h2>
              <p>
                Founded in 1998, OM Chemicals has grown from a small chemical trading company 
                to a leading manufacturer and distributor of specialty chemicals. Our journey 
                began with a simple vision: to provide high-quality chemical solutions that 
                meet the evolving needs of industries worldwide.
              </p>
              <p>
                Over the past 25+ years, we have built a reputation for excellence, innovation, 
                and reliability. Our state-of-the-art manufacturing facilities, combined with 
                our team of experienced chemists and engineers, enable us to deliver products 
                that consistently exceed industry standards.
              </p>
              <p>
                Today, we serve clients across 50+ countries, manufacturing over 500 different 
                chemical products for industries including pharmaceuticals, agriculture, 
                textiles, automotive, and specialty chemicals.
              </p>
            </div>
            <div className="overview-image">
              <div className="image-placeholder">
                <FontAwesomeIcon icon={faIndustry} className="placeholder-icon" />
                <p>Our Modern Manufacturing Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mission-vision">
        <div className="container">
          <div className="section-title">
            <h2>Our Foundation</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="grid grid-3">
            <div className="mv-card">
              <FontAwesomeIcon icon={faEye} className="mv-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the global leader in specialty chemical manufacturing, 
                recognized for innovation, quality, and environmental responsibility.
              </p>
            </div>
            <div className="mv-card">
              <FontAwesomeIcon icon={faFlask} className="mv-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide innovative chemical solutions that enhance our clients' 
                success while maintaining the highest standards of safety, quality, 
                and environmental stewardship.
              </p>
            </div>
            <div className="mv-card">
              <FontAwesomeIcon icon={faHandshake} className="mv-icon" />
              <h3>Our Values</h3>
              <p>
                Integrity, innovation, excellence, and environmental responsibility 
                form the core of our company culture and business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="achievements">
        <div className="container">
          <div className="section-title">
            <h2>Key Achievements</h2>
            <p>Milestones that define our journey of excellence</p>
          </div>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-year">1998</div>
              <div className="achievement-content">
                <h4>Company Founded</h4>
                <p>Started as a chemical trading company with a vision for growth</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2005</div>
              <div className="achievement-content">
                <h4>First Manufacturing Plant</h4>
                <p>Established our first state-of-the-art manufacturing facility</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2010</div>
              <div className="achievement-content">
                <h4>ISO Certification</h4>
                <p>Achieved ISO 9001:2008 certification for quality management</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2015</div>
              <div className="achievement-content">
                <h4>Global Expansion</h4>
                <p>Expanded operations to serve clients in 30+ countries</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2020</div>
              <div className="achievement-content">
                <h4>R&D Center</h4>
                <p>Opened advanced research and development facility</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2023</div>
              <div className="achievement-content">
                <h4>50+ Countries</h4>
                <p>Now serving clients across 50+ countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership">
        <div className="container">
          <div className="section-title">
            <h2>Leadership Team</h2>
            <p>Meet the experts driving our success</p>
          </div>
          <div className="grid grid-3">
            <div className="leader-card">
              <div className="leader-image">
                <FontAwesomeIcon icon={faUsers} className="leader-placeholder" />
              </div>
              <h4>Dr. Rajesh Kumar</h4>
              <p className="leader-title">Chief Executive Officer</p>
              <p className="leader-bio">
                PhD in Chemical Engineering with 30+ years of experience in 
                chemical manufacturing and business leadership.
              </p>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <FontAwesomeIcon icon={faUsers} className="leader-placeholder" />
              </div>
              <h4>Dr. Priya Sharma</h4>
              <p className="leader-title">Chief Technology Officer</p>
              <p className="leader-bio">
                Leading our R&D initiatives with expertise in specialty 
                chemicals and process optimization.
              </p>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <FontAwesomeIcon icon={faUsers} className="leader-placeholder" />
              </div>
              <h4>Mr. Amit Patel</h4>
              <p className="leader-title">Operations Director</p>
              <p className="leader-bio">
                Overseeing manufacturing operations with focus on 
                efficiency, quality, and safety excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose OM Chemicals?</h2>
            <p>Our competitive advantages that set us apart</p>
          </div>
          <div className="grid grid-2">
            <div className="advantage-content">
              <div className="advantage-item">
                <FontAwesomeIcon icon={faAward} className="advantage-icon" />
                <div>
                  <h4>25+ Years of Experience</h4>
                  <p>Decades of expertise in chemical manufacturing and industry best practices</p>
                </div>
              </div>
              <div className="advantage-item">
                <FontAwesomeIcon icon={faCogs} className="advantage-icon" />
                <div>
                  <h4>Advanced Technology</h4>
                  <p>State-of-the-art manufacturing facilities with cutting-edge equipment</p>
                </div>
              </div>
              <div className="advantage-item">
                <FontAwesomeIcon icon={faShieldAlt} className="advantage-icon" />
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Rigorous quality control processes and multiple industry certifications</p>
                </div>
              </div>
              <div className="advantage-item">
                <FontAwesomeIcon icon={faLeaf} className="advantage-icon" />
                <div>
                  <h4>Environmental Responsibility</h4>
                  <p>Commitment to sustainable practices and eco-friendly manufacturing</p>
                </div>
              </div>
            </div>
            <div className="advantage-stats">
              <div className="stat-box">
                <h3>500+</h3>
                <p>Chemical Products</p>
              </div>
              <div className="stat-box">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Countries Served</p>
              </div>
              <div className="stat-box">
                <h3>99.8%</h3>
                <p>Quality Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

