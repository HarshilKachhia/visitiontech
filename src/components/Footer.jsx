import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Company Section */}
        <div className="footer-section">
          <h3 className="footer-title">Vision Tech</h3>
          <p style={{ color: "#ccc", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
            Leading manufacturer, supplier and exporter of premium quality industrial labels, barcode stickers, scanners, and custom printing solutions in India.
          </p>
        </div>

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
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Our Products Section */}
        <div className="footer-section">
          <h3 className="footer-title">Our Products</h3>
          <ul className="footer-list">
            <li>
              <Link to="/products">Industry Wise Labels</Link>
            </li>
            <li>
              <Link to="/products">Specialty Labels</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p style={{ marginBottom: "8px", lineHeight: "1.4" }}>
            <strong>Vision Tech Barcode Solution</strong><br />
            B-15, Jeevandeep Complex, Opp. J.K Tower, Ring Road, Surat - 395002, Gujarat, India.
          </p>
          <p style={{ marginBottom: "6px" }}>
            Email:{" "}
            <a href="mailto:info@visiontechbarcode.com" style={{ color: "#00AEEF" }}>
              info@visiontechbarcode.com
            </a>
          </p>
          <p style={{ marginBottom: "6px" }}>
            Phone: <a href="tel:+919925209252" style={{ color: "#00AEEF" }}>+91 99252 09252</a>
          </p>
          <div style={{ marginTop: "12px" }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vision+Tech+Barcode+Solution+Jeevandeep+Complex+Surat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#00AEEF",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "background-color 0.3s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#008ec4"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#00AEEF"}
            >
              📍 View on Google Maps
            </a>
          </div>
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
