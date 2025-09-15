import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">&copy; 2025 Srinivas Krishna. All rights reserved.</p>
          <div className="contact-links">
            <a href="mailto:contact@srinivaskrishna.dev" className="contact-link">
              Email
            </a>
            <a href="https://linkedin.com/in/srinivaskrishna97" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/srinivaskrishna97" className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
