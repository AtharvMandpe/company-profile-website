import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faClock,
  faPaperPlane,
  faBuilding,
  faGlobe,
  faIndustry
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in Touch with Our Expert Team</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>We're here to help with your chemical manufacturing needs</p>
          </div>
          <div className="grid grid-3">
            <div className="info-card">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
              <h3>Visit Us</h3>
              <p>
                OM Chemicals Pvt. Ltd.<br />
                Industrial Area, Phase II<br />
                Mumbai, Maharashtra 400001<br />
                India
              </p>
            </div>
            <div className="info-card">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <h3>Call Us</h3>
              <p>
                +91 22 1234 5678<br />
                +91 22 8765 4321<br />
                <span className="info-note">Mon-Fri: 9AM-6PM IST</span>
              </p>
            </div>
            <div className="info-card">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <h3>Email Us</h3>
              <p>
                info@omchemicals.com<br />
                sales@omchemicals.com<br />
                support@omchemicals.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="quality">Quality Assurance</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements or questions..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-map">
              <h2>Our Location</h2>
              <div className="map-placeholder">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
                <p>Interactive Map</p>
                <p className="map-address">
                  OM Chemicals Pvt. Ltd.<br />
                  Industrial Area, Phase II<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours">
        <div className="container">
          <div className="section-title">
            <h2>Business Hours</h2>
            <p>We're available to assist you during these hours</p>
          </div>
          <div className="grid grid-2">
            <div className="hours-content">
              <div className="hours-item">
                <FontAwesomeIcon icon={faClock} className="hours-icon" />
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 9:00 AM - 1:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="hours-item">
                <FontAwesomeIcon icon={faIndustry} className="hours-icon" />
                <div>
                  <h4>Manufacturing</h4>
                  <p>24/7 Production Facility</p>
                  <p>Emergency Support Available</p>
                </div>
              </div>
            </div>
            <div className="departments">
              <h3>Contact Departments</h3>
              <div className="department-list">
                <div className="department-item">
                  <h4>Sales Department</h4>
                  <p>sales@omchemicals.com | +91 22 1234 5678</p>
                </div>
                <div className="department-item">
                  <h4>Technical Support</h4>
                  <p>support@omchemicals.com | +91 22 1234 5679</p>
                </div>
                <div className="department-item">
                  <h4>Quality Assurance</h4>
                  <p>quality@omchemicals.com | +91 22 1234 5680</p>
                </div>
                <div className="department-item">
                  <h4>Human Resources</h4>
                  <p>hr@omchemicals.com | +91 22 1234 5681</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help you achieve your chemical manufacturing goals</p>
            <div className="cta-buttons">
              <a href="tel:+912212345678" className="btn btn-primary">
                <FontAwesomeIcon icon={faPhone} className="btn-icon" />
                Call Now
              </a>
              <a href="mailto:info@omchemicals.com" className="btn btn-secondary">
                <FontAwesomeIcon icon={faEnvelope} className="btn-icon" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

