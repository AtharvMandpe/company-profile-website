import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faAward, 
  faMicroscope,
  faFlask,
  faCheckCircle,
  faCertificate,
  faCogs,
  faLeaf,
  faUsers,
  faGlobe,
  faChartLine,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import './Quality.css';

const Quality = () => {
  return (
    <div className="quality-page">
      {/* Hero Section */}
      <section className="quality-hero">
        <div className="container">
          <h1>Quality & Safety</h1>
          <p>Excellence in Every Process, Safety in Every Product</p>
        </div>
      </section>

      {/* Quality Overview */}
      <section className="quality-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Commitment to Quality</h2>
              <p>
                At OM Chemicals, quality is not just a goal—it's our foundation. We maintain 
                the highest standards throughout our entire manufacturing process, from raw 
                material selection to final product delivery. Our comprehensive quality 
                management system ensures that every product meets or exceeds industry 
                specifications and regulatory requirements.
              </p>
              <p>
                Our state-of-the-art testing laboratories, staffed by experienced chemists 
                and technicians, perform rigorous quality control tests at every stage of 
                production. This commitment to quality has earned us the trust of clients 
                worldwide and numerous industry certifications.
              </p>
            </div>
            <div className="overview-image">
              <div className="image-placeholder">
                <FontAwesomeIcon icon={faMicroscope} className="placeholder-icon" />
                <p>Advanced Quality Testing Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="container">
          <div className="section-title">
            <h2>Certifications & Standards</h2>
            <p>Recognized excellence in quality management and safety standards</p>
          </div>
          <div className="grid grid-3">
            <div className="cert-card">
              <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System certification ensuring consistent quality in all our processes</p>
            </div>
            <div className="cert-card">
              <FontAwesomeIcon icon={faShieldAlt} className="cert-icon" />
              <h3>ISO 14001:2015</h3>
              <p>Environmental Management System certification for sustainable operations</p>
            </div>
            <div className="cert-card">
              <FontAwesomeIcon icon={faAward} className="cert-icon" />
              <h3>OHSAS 18001</h3>
              <p>Occupational Health and Safety Management System certification</p>
            </div>
            <div className="cert-card">
              <FontAwesomeIcon icon={faFlask} className="cert-icon" />
              <h3>FDA Approved</h3>
              <p>Food and Drug Administration approval for pharmaceutical-grade products</p>
            </div>
            <div className="cert-card">
              <FontAwesomeIcon icon={faGlobe} className="cert-icon" />
              <h3>REACH Compliant</h3>
              <p>European Union REACH regulation compliance for chemical safety</p>
            </div>
            <div className="cert-card">
              <FontAwesomeIcon icon={faCheckCircle} className="cert-icon" />
              <h3>GMP Certified</h3>
              <p>Good Manufacturing Practice certification for pharmaceutical products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="quality-process">
        <div className="container">
          <div className="section-title">
            <h2>Quality Control Process</h2>
            <p>Multi-stage quality assurance ensuring product excellence</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Raw Material Testing</h4>
                <p>Comprehensive analysis of incoming raw materials to ensure purity and quality standards</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>In-Process Monitoring</h4>
                <p>Continuous monitoring and testing during manufacturing to maintain quality parameters</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Final Product Analysis</h4>
                <p>Comprehensive testing of finished products against specifications and standards</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Documentation & Release</h4>
                <p>Complete documentation and quality certificates before product release</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="testing-capabilities">
        <div className="container">
          <div className="section-title">
            <h2>Testing Capabilities</h2>
            <p>Advanced analytical equipment and testing methods</p>
          </div>
          <div className="grid grid-2">
            <div className="testing-content">
              <div className="testing-item">
                <FontAwesomeIcon icon={faMicroscope} className="testing-icon" />
                <div>
                  <h4>Chemical Analysis</h4>
                  <p>HPLC, GC-MS, FTIR, and NMR analysis for chemical composition and purity</p>
                </div>
              </div>
              <div className="testing-item">
                <FontAwesomeIcon icon={faFlask} className="testing-icon" />
                <div>
                  <h4>Physical Properties</h4>
                  <p>Density, viscosity, melting point, boiling point, and refractive index testing</p>
                </div>
              </div>
              <div className="testing-item">
                <FontAwesomeIcon icon={faShieldAlt} className="testing-icon" />
                <div>
                  <h4>Safety Testing</h4>
                  <p>Flash point, toxicity, and environmental impact assessment</p>
                </div>
              </div>
              <div className="testing-item">
                <FontAwesomeIcon icon={faChartLine} className="testing-icon" />
                <div>
                  <h4>Stability Studies</h4>
                  <p>Long-term stability testing under various environmental conditions</p>
                </div>
              </div>
            </div>
            <div className="testing-image">
              <div className="image-placeholder">
                <FontAwesomeIcon icon={faCogs} className="placeholder-icon" />
                <p>Advanced Testing Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="safety-standards">
        <div className="container">
          <div className="section-title">
            <h2>Safety & Environmental Standards</h2>
            <p>Protecting people, environment, and communities</p>
          </div>
          <div className="grid grid-3">
            <div className="safety-card">
              <FontAwesomeIcon icon={faUsers} className="safety-icon" />
              <h3>Worker Safety</h3>
              <p>Comprehensive safety protocols, training programs, and protective equipment for all employees</p>
            </div>
            <div className="safety-card">
              <FontAwesomeIcon icon={faLeaf} className="safety-icon" />
              <h3>Environmental Protection</h3>
              <p>Eco-friendly manufacturing processes and waste management systems</p>
            </div>
            <div className="safety-card">
              <FontAwesomeIcon icon={faShieldAlt} className="safety-icon" />
              <h3>Product Safety</h3>
              <p>Rigorous safety testing and hazard assessment for all chemical products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="quality-metrics">
        <div className="container">
          <div className="section-title">
            <h2>Quality Performance</h2>
            <p>Our commitment to excellence reflected in numbers</p>
          </div>
          <div className="metrics-grid">
            <div className="metric-item">
              <FontAwesomeIcon icon={faCheckCircle} className="metric-icon" />
              <h3>99.8%</h3>
              <p>Quality Rating</p>
            </div>
            <div className="metric-item">
              <FontAwesomeIcon icon={faAward} className="metric-icon" />
              <h3>25+</h3>
              <p>Years Zero Defects</p>
            </div>
            <div className="metric-item">
              <FontAwesomeIcon icon={faCertificate} className="metric-icon" />
              <h3>6</h3>
              <p>Industry Certifications</p>
            </div>
            <div className="metric-item">
              <FontAwesomeIcon icon={faEye} className="metric-icon" />
              <h3>100%</h3>
              <p>Batch Testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="quality-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Quality You Can Trust</h2>
            <p>Experience the difference that uncompromising quality makes in your chemical solutions</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Request Quality Certificate</a>
              <a href="/products" className="btn btn-secondary">View Product Specifications</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;

