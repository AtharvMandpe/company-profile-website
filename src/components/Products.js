import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faSearch, 
  faFilter,
  faDownload,
  faEye,
  faIndustry,
  faLeaf,
  faShieldAlt,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: faFlask },
    { id: 'pharmaceuticals', name: 'Pharmaceuticals', icon: faIndustry },
    { id: 'agriculture', name: 'Agriculture', icon: faLeaf },
    { id: 'industrial', name: 'Industrial', icon: faCogs },
    { id: 'specialty', name: 'Specialty', icon: faShieldAlt }
  ];

  const products = [
    {
      id: 1,
      name: 'Isopropyl Alcohol (IPA)',
      category: 'pharmaceuticals',
      description: 'High-purity isopropyl alcohol for pharmaceutical and industrial applications',
      purity: '99.9%',
      grade: 'Pharmaceutical Grade',
      applications: ['Pharmaceuticals', 'Cosmetics', 'Electronics Cleaning']
    },
    {
      id: 2,
      name: 'Ethyl Acetate',
      category: 'industrial',
      description: 'Versatile solvent for paints, coatings, and chemical synthesis',
      purity: '99.5%',
      grade: 'Industrial Grade',
      applications: ['Paints & Coatings', 'Adhesives', 'Chemical Synthesis']
    },
    {
      id: 3,
      name: 'Methanol',
      category: 'industrial',
      description: 'High-purity methanol for fuel and chemical manufacturing',
      purity: '99.8%',
      grade: 'Industrial Grade',
      applications: ['Fuel Additive', 'Chemical Synthesis', 'Formaldehyde Production']
    },
    {
      id: 4,
      name: 'Acetonitrile',
      category: 'pharmaceuticals',
      description: 'Ultra-pure acetonitrile for HPLC and analytical applications',
      purity: '99.9%',
      grade: 'HPLC Grade',
      applications: ['HPLC Analysis', 'Pharmaceuticals', 'Research']
    },
    {
      id: 5,
      name: 'Toluene',
      category: 'industrial',
      description: 'High-quality toluene for industrial and commercial applications',
      purity: '99.5%',
      grade: 'Industrial Grade',
      applications: ['Paints & Coatings', 'Adhesives', 'Rubber Industry']
    },
    {
      id: 6,
      name: 'Mono Ethylene Glycol (MEG)',
      category: 'industrial',
      description: 'High-purity MEG for antifreeze and polyester production',
      purity: '99.9%',
      grade: 'Industrial Grade',
      applications: ['Antifreeze', 'Polyester Production', 'Cooling Systems']
    },
    {
      id: 7,
      name: 'Diethylene Glycol (DEG)',
      category: 'industrial',
      description: 'Specialty glycol for industrial applications',
      purity: '99.5%',
      grade: 'Industrial Grade',
      applications: ['Plasticizers', 'Humectants', 'Chemical Intermediates']
    },
    {
      id: 8,
      name: 'Triethylene Glycol (TEG)',
      category: 'industrial',
      description: 'High-purity TEG for gas dehydration and industrial uses',
      purity: '99.5%',
      grade: 'Industrial Grade',
      applications: ['Gas Dehydration', 'Plasticizers', 'Humectants']
    },
    {
      id: 9,
      name: 'Glycerin',
      category: 'pharmaceuticals',
      description: 'Pharmaceutical grade glycerin for medical and cosmetic applications',
      purity: '99.7%',
      grade: 'Pharmaceutical Grade',
      applications: ['Pharmaceuticals', 'Cosmetics', 'Food Industry']
    },
    {
      id: 10,
      name: 'N-Methyl Pyrrolidone (NMP)',
      category: 'specialty',
      description: 'High-purity NMP for electronics and specialty applications',
      purity: '99.9%',
      grade: 'Electronic Grade',
      applications: ['Electronics', 'Pharmaceuticals', 'Chemical Processing']
    },
    {
      id: 11,
      name: 'Tetrahydrofuran (THF)',
      category: 'specialty',
      description: 'Ultra-pure THF for polymer and pharmaceutical applications',
      purity: '99.9%',
      grade: 'Analytical Grade',
      applications: ['Polymer Industry', 'Pharmaceuticals', 'Research']
    },
    {
      id: 12,
      name: 'N-Heptane',
      category: 'industrial',
      description: 'High-purity n-heptane for analytical and industrial applications',
      purity: '99.5%',
      grade: 'Analytical Grade',
      applications: ['Analytical Chemistry', 'Solvent Extraction', 'Research']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>High-Quality Chemical Solutions for Every Industry</p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <div className="container">
          <div className="section-title">
            <h2>Product Categories</h2>
            <p>Browse our comprehensive range of chemical products</p>
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        <div className="container">
          <div className="products-header">
            <h2>Available Products</h2>
            <div className="products-actions">
              <div className="search-box">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Search products..." />
              </div>
              <button className="btn btn-secondary">
                <FontAwesomeIcon icon={faDownload} className="btn-icon" />
                Download Catalog
              </button>
            </div>
          </div>
          <div className="products-container">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-header">
                  <FontAwesomeIcon icon={faFlask} className="product-icon" />
                  <div className="product-badge">{product.grade}</div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-specs">
                    <div className="spec-item">
                      <span className="spec-label">Purity:</span>
                      <span className="spec-value">{product.purity}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Grade:</span>
                      <span className="spec-value">{product.grade}</span>
                    </div>
                  </div>
                  <div className="product-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {product.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn btn-outline">
                    <FontAwesomeIcon icon={faEye} className="btn-icon" />
                    View Details
                  </button>
                  <button className="btn btn-primary">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="product-features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Products?</h2>
            <p>Quality, reliability, and performance you can trust</p>
          </div>
          <div className="grid grid-3">
            <div className="feature-card">
              <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
              <h3>Quality Assured</h3>
              <p>Every product undergoes rigorous testing and quality control to ensure the highest standards.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faCogs} className="feature-icon" />
              <h3>Custom Formulations</h3>
              <p>We can develop custom chemical formulations to meet your specific requirements.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faIndustry} className="feature-icon" />
              <h3>Bulk Supply</h3>
              <p>Large-scale production capabilities ensure consistent supply for your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>Our R&D team can develop specialized chemical formulations for your unique requirements</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Contact R&D Team</a>
              <a href="/services" className="btn btn-secondary">View Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

