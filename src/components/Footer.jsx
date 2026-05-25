import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [productStructure, setProductStructure] = useState([]);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const response = await fetch("/product-structure.json");
        const data = await response.json();
        setProductStructure(data);
      } catch (error) {
        console.error("Error fetching product structure for footer:", error);
      }
    };
    fetchStructure();
  }, []);

  // Helpers to find the categories
  const industryProducts = productStructure.find(cat => cat.slug === "industry-wise-labels")?.items || [];
  const specialtyProducts = productStructure.find(cat => cat.slug === "specialty-labels")?.items || [];
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Industry Wise Labels Section */}
        <div className="footer-section">
          <h3 className="footer-title">Industry Wise Labels</h3>
          <ul className="footer-list">
            {industryProducts.map((product) => (
              <li key={product.slug}>
                <Link to={`/product/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialty Labels Section */}
        <div className="footer-section">
          <h3 className="footer-title">Specialty Labels</h3>
          <ul className="footer-list">
            {specialtyProducts.map((product) => (
              <li key={product.slug}>
                <Link to={`/product/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p>
            Sr. No. 35/1, Kolewadi Road, Jambhulwadi, Pune - 411046,
            Maharashtra, India
          </p>
          <p>
            Email:{" "}
            <a href="mailto:umesh.dongre@shreemultigroup.com">
              umesh.dongre@shreemultigroup.com
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:shreemultigroups@gmail.com">
              shreemultigroups@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+919822468634">+91 9822468634</a>
          </p>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h3 className="footer-title">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7440.579526805542!2d72.829602!3d21.1806451!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740814778927!5m2!1sen!2sin"
            width="200"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          All Rights Reserved. Vision Tech Barcode Solution. Designed
          By:{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Infoline Digital Media
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
