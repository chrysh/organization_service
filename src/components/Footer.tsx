import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3>Ready to Design Your Calm Space?</h3>
        <p>Email: hello@dopaminedeclutter.ch | Phone: +41 79 XXX XX XX</p>
        <div className="social-links">
          <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Dopamine Declutter. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
