import React from 'react';
import '../styles/main.css';

const Header: React.FC = () => {
  return (
    // 1. Full-screen header section
    <header className="header-section header-anchor">
      
      {/* Navigation Bar (Fixed at the top, optional) */}
      <nav className="nav-bar">
        <span className="logo">Dopamine Declutter</span>
        <div className="nav-links">
          <a href="#pricing">Pricing</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Reviews</a>
        </div>
      </nav>

      {/* 2. Hero Content (Centered) */}
      <div className="header-content">
        {/* H1: Strong, direct, benefit-focused headline */}
        <h1>Finally, a Home System That Works With Your Brain.</h1>
        
        {/* Sub-headline: Location and specific focus */}
        <p className="tagline">
          Stop fighting clutter paralysis. Start building sustainable **NeuroFlow Systems** in your Zurich home.
        </p>
        
        {/* CTA: Large, primary action */}
        <button className="cta-primary cta-large">
          Book Your Sensory Audit & Start Flow Today
        </button>
      </div>
      
      {/* Optional: Add a subtle visual cue for scrolling */}
      <div className="scroll-indicator">
        <a href="#problem-solution">Scroll to Learn More ↓</a>
      </div>

    </header>
  );
};

export default Header;
