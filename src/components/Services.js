import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCogs, 
  faFlask, 
  faShieldAlt, 
  faIndustry,
  faMicroscope,
  faTruck,
  faAward,
  faLeaf,
  faCog,
  faVial,
  faChartLine,
  faRecycle
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Chemical Solutions for Every Industry Need</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="section-title">
            <h2>Core Services</h2>
            <p>Expert chemical manufacturing and processing solutions tailored to your requirements</p>
          </div>
          <div className="grid grid-2">
            <div className="service-card main-service">
              <FontAwesomeIcon icon={faCogs} className="service-icon" />
              <h3>Custom Manufacturing</h3>
              <p>
                Specialized chemical manufacturing services with state-of-the-art facilities. 
                We produce high-quality chemicals according to your exact specifications, 
                ensuring consistency and reliability in every batch.
              </p>
              <ul className="service-features">
                <li>Bulk chemical production</li>
                <li>Custom formulations</li>
                <li>Batch processing</li>
                <li>Quality control testing</li>
              </ul>
            </div>
            <div className="service-card main-service">
              <FontAwesomeIcon icon={faFlask} className="service-icon" />
              <h3>Research & Development</h3>
              <p>
                Our advanced R&D facility develops innovative chemical solutions and 
                improves existing formulations. We work closely with clients to create 
                products that meet specific industry requirements.
              </p>
              <ul className="service-features">
                <li>Product development</li>
                <li>Formulation optimization</li>
                <li>Process improvement</li>
                <li>Technical support</li>
              </ul>
            </div>
            <div className="service-card main-service">
              <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
              <h3>Quality Assurance</h3>
              <p>
                Comprehensive quality control processes ensure every product meets 
                the highest standards. Our certified laboratories perform rigorous 
                testing and analysis throughout the manufacturing process.
              </p>
              <ul className="service-features">
                <li>ISO 9001:2015 certified</li>
                <li>In-process testing</li>
                <li>Final product analysis</li>
                <li>Documentation & certification</li>
              </ul>
            </div>
            <div className="service-card main-service">
              <FontAwesomeIcon icon={faTruck} className="service-icon" />
              <h3>Logistics & Distribution</h3>
              <p>
                Reliable supply chain management and distribution services ensure 
                timely delivery of your chemical products. We handle packaging, 
                storage, and transportation with utmost care.
              </p>
              <ul className="service-features">
                <li>Safe packaging solutions</li>
                <li>Temperature-controlled storage</li>
                <li>Global shipping</li>
                <li>Tracking & monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="specialized-services">
        <div className="container">
          <div className="section-title">
            <h2>Specialized Processing Services</h2>
            <p>Advanced chemical processing techniques for complex manufacturing requirements</p>
          </div>
          <div className="grid grid-3">
            <div className="specialized-card">
              <FontAwesomeIcon icon={faCog} className="specialized-icon" />
              <h4>Azeotropic Distillation</h4>
              <p>Specialized plant for handling azeotropic distillation of complex mixtures including IPA+Water, EA+Methanol, and ACN+Toluene.</p>
            </div>
            <div className="specialized-card">
              <FontAwesomeIcon icon={faVial} className="specialized-icon" />
              <h4>High Vacuum Fractional Distillation</h4>
              <p>Distillation at high vacuum up to 1 Torr for MEG+DEG+TEG, Glycerin, and NMP+Water mixtures.</p>
            </div>
            <div className="specialized-card">
              <FontAwesomeIcon icon={faMicroscope} className="specialized-icon" />
              <h4>Extractive Distillation</h4>
              <p>Specialized equipment for extractive distillation of THF+MDC, N-Heptane+Toluene, and Ethanol+Water.</p>
            </div>
            <div className="specialized-card">
              <FontAwesomeIcon icon={faChartLine} className="specialized-icon" />
              <h4>Highly Volatile Solvents Distillation</h4>
              <p>High theoretical stages and efficient cooling for separation of THF, IPE, Acetone, MDC with maximum yield.</p>
            </div>
            <div className="specialized-card">
              <FontAwesomeIcon icon={faRecycle} className="specialized-icon" />
              <h4>Reactive Distillation</h4>
              <p>Reactive distillation of Ethyl Acetate and Ethanol using Acetic Acid for optimal process efficiency.</p>
            </div>
            <div className="specialized-card">
              <FontAwesomeIcon icon={faIndustry} className="specialized-icon" />
              <h4>Contract Manufacturing</h4>
              <p>Complete contract manufacturing services for pharmaceuticals, refineries, fertilizers, and specialty chemicals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="industry-applications">
        <div className="container">
          <div className="section-title">
            <h2>Industry Applications</h2>
            <p>Our chemicals serve diverse industries with specialized requirements</p>
          </div>
          <div className="grid grid-4">
            <div className="industry-card">
              <FontAwesomeIcon icon={faFlask} className="industry-icon" />
              <h4>Pharmaceuticals</h4>
              <p>High-purity chemicals for pharmaceutical manufacturing and research applications.</p>
            </div>
            <div className="industry-card">
              <FontAwesomeIcon icon={faIndustry} className="industry-icon" />
              <h4>Refineries</h4>
              <p>Specialized chemicals for petroleum refining and petrochemical processes.</p>
            </div>
            <div className="industry-card">
              <FontAwesomeIcon icon={faLeaf} className="industry-icon" />
              <h4>Fertilizers</h4>
              <p>Agricultural chemicals and fertilizer components for enhanced crop production.</p>
            </div>
            <div className="industry-card">
              <FontAwesomeIcon icon={faCogs} className="industry-icon" />
              <h4>Specialty Chemicals</h4>
              <p>Custom formulations for specialized industrial and commercial applications.</p>
            </div>
            <div className="industry-card">
              <FontAwesomeIcon icon={faAward} className="industry-icon" />
              <h4>Paints & Coatings</h4>
              <p>Chemical additives and components for paint and coating formulations.</p>
            </div>
            <div className="industry-card">
              <FontAwesomeIcon icon={faShieldAlt} className="industry-icon" />
              <h4>Amines</h4>
              <p>Specialized amine compounds for various industrial and chemical processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="process-flow">
        <div className="container">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>From concept to delivery - our streamlined approach ensures quality and efficiency</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Consultation & Planning</h4>
                <p>Understanding your requirements and developing a customized solution</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>R&D & Formulation</h4>
                <p>Developing and testing formulations to meet your specifications</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Manufacturing</h4>
                <p>Production using advanced equipment and strict quality controls</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Quality Testing</h4>
                <p>Comprehensive testing and analysis to ensure product quality</p>
              </div>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Delivery</h4>
                <p>Safe packaging and timely delivery to your location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discuss Your Project?</h2>
            <p>Our team of experts is ready to help you find the perfect chemical solution for your needs</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Quote</a>
              <a href="/products" className="btn btn-secondary">View Products</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
