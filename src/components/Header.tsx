import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-section header-gamified">
      
      {/* Top Navigation Bar */}
      <nav className="nav-bar-gamified">
        <div className="logo-section">
          <span className="brain-icon">🧠</span> 
          <span className="logo-text">Neuro-Organize</span>
        </div>
        
        {/* Navigation Quest Buttons */}
        <div className="nav-quests">
          <button className="quest-btn blue-quest">Quests</button>
          <button className="quest-btn purple-quest">Toolbox</button>
          <button className="quest-btn green-quest">Victories</button>
        </div>

        {/* Cart/Nierons (Gamified Currency) */}
        <button className="currency-btn orange-currency">
          🛒 Nierons
        </button>
      </nav>

      {/* Main Hero Content and Graphics Area */}
      <div className="hero-content-gamified">
        
        {/* Text Block */}
        <div className="text-block">
          <h1>Declutter with Dopamine</h1>
          <p className="tagline">
            Spark Joy & Focus: Your Brain's Best Friend for a Tidy Space!
          </p>
        </div>

        {/* Graphics Container (Simulated Illustration) */}
        <div className="graphics-container">
          
          {/* Circular Call-to-Action */}
          <button className="circular-cta">
            Start Your Flow Quest!
          </button>
          
          {/* Graphics (Simplified representation of the scattered icons) */}
          <div className="icon-group">
            {/* These labels are placeholders for the complex background illustration */}
            <span className="icon-item book-stack">📚</span>
            <span className="icon-item timer-big">⏱️</span>
            <span className="icon-item brain-small">🧠</span>
            <span className="icon-item rocket">🚀</span>
          </div>
        </div>
      </div>

      {/* Motivation Meter (Bottom Anchor) */}
      <div className="motivation-meter-container">
        <span className="meter-icon">🧠</span>
        <div className="meter-bar">
          <div className="meter-fill"></div>
        </div>
        <span className="meter-label">Motivation Meter</span>
      </div>
      
    </header>
  );
};

export default Header;
