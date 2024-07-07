import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>What is Fundwise?</h3>
        <p>Fundwise is a crowdfunding platform that empowers individuals, businesses, and organizations to raise funds for their projects, ideas, or causes.</p>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Impact</li>
          <li>Testimonials</li>
          <li>Team members</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Resource</h3>
        <ul>
          <li>Guide</li>
          <li>FAQs</li>
          <li>Press kits</li>
          <li>Compliance</li>
          <li>Privacy Policy</li>
          <li>Terms of service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Community</h3>
        <ul>
          <li>Shop</li>
          <li>Blog</li>
          <li>Forum</li>
          <li>Membership</li>
          <li>Help center</li>
          <li>Support desk</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
