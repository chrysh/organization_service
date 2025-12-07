import React from 'react';

import '../styles/main.css';


const Pricing: React.FC = () => {
  return (
    <section id="Quests" className="pricing-section section-bg-light" id="pricing">
      <div className="pricing-wrapper">
        
        {/* === Left Side: Text Content === */}
        <div className="pricing-left">
          <h2>How It Works</h2>
          <div className="pricing-text-block">
            <h3>Spark Joy & Focus:</h3>
            <ul className="value-list">
              <li>We handle the sensory audit & planning.</li>
              <li>You get body-doubling support for momentum.</li>
              <li>We build systems that stick, not just tidy up.</li>
            </ul>
          </div>
        </div>

        {/* === Right Side: The Grid Layout === */}
        <div className="pricing-right">
          
          {/* Floating Trophy Icon */}
          <div className="floating-trophy">
            <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52 16H46V12C46 9.79 44.21 8 42 8H22C19.79 8 18 9.79 18 12V16H12C9.79 16 8 17.79 8 20V26C8 30.86 11.53 34.9 16.18 35.79C17.27 40.23 21.28 43.53 26 43.92V50H20V54H44V50H38V43.92C42.72 43.53 46.73 40.23 47.82 35.79C52.47 34.9 56 30.86 56 26V20C56 17.79 54.21 16 52 16ZM12 26V20H18V28.56C14.43 27.67 12 24.37 12 26ZM42 38C42 39.1 41.1 40 40 40H24C22.9 40 22 39.1 22 38V12H42V38ZM52 26C52 24.37 49.57 27.67 46 28.56V20H52V26Z" fill="#FFC107"/>
              <path d="M24 16H40V20H24V16Z" fill="#FFECB3"/>
            </svg>
          </div>

          {/* Top Row: 3 Step Cards */}
          <div className="steps-grid">
            {/* Step 1: Rocket */}
            <div className="step-card">
              <div className="step-icon-svg">
                 <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 4L18 28H46L32 4Z" fill="#FF5E3A"/>
                  <path d="M32 4L32 28H46L32 4Z" fill="#E04F30"/>
                  <path d="M22 28H42V52H22V28Z" fill="#F5F5F5"/>
                  <path d="M32 28V52H42V28H32Z" fill="#E0E0E0"/>
                  <circle cx="32" cy="38" r="6" fill="#4A90E2"/>
                  <path d="M18 52L12 60H26L22 52H18Z" fill="#FF5E3A"/>
                  <path d="M46 52L52 60H38L42 52H46Z" fill="#FF5E3A"/>
                </svg>
              </div>
              <span className="step-label">Step 1</span>
              <span className="step-name">The Audit</span>
            </div>

            {/* Step 2: Sorting Boxes */}
            <div className="step-card">
              <div className="step-icon-svg">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="24" width="24" height="24" rx="2" fill="#81D4FA"/>
                  <rect x="36" y="24" width="8" height="24" rx="1" fill="#4FC3F7"/>
                  <path d="M12 24L24 12L36 24H12Z" fill="#81D4FA"/>
                  <rect x="28" y="16" width="24" height="32" rx="2" fill="#B39DDB"/>
                  <rect x="32" y="22" width="16" height="4" rx="1" fill="#EDE7F6"/>
                  <rect x="32" y="30" width="16" height="4" rx="1" fill="#EDE7F6"/>
                  <rect x="32" y="38" width="10" height="4" rx="1" fill="#EDE7F6"/>
                </svg>
              </div>
              <span className="step-label">Step 2</span>
              <span className="step-name">The Sort</span>
            </div>

            {/* Step 3: Treasure Chest */}
            <div className="step-card">
              <div className="step-icon-svg">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 24H56V52C56 54.2 54.2 56 52 56H12C9.8 56 8 54.2 8 52V24Z" fill="#FFB74D"/>
                   <path d="M8 16H56V24H8V16Z" fill="#FF9800"/>
                   <rect x="26" y="20" width="12" height="8" rx="1" fill="#FDD835"/>
                   <path d="M12 16V12C12 9.8 13.8 8 16 8H48C50.2 8 52 9.8 52 12V16" stroke="#E65100" strokeWidth="4"/>
                </svg>
              </div>
              <span className="step-label">Step 3</span>
              <span className="step-name">The System</span>
            </div>
          </div>

          {/* Bottom Row: Pricing Packages */}
          <div className="packages-grid">
            
            {/* Standard Package */}
            <div className="package-card">
              <div className="pkg-header">
                <h3>The Starter Spark</h3>
                <span className="pkg-duration">(4 Hours)</span>
              </div>
              <p className="pkg-desc">Perfect for tackling one specific doom-pile or desk.</p>
              <div className="pkg-price">CHF 600</div>
            </div>

            {/* Recommended Package (Highlighted) */}
            <div className="package-card recommended-card">
              <div className="badge-recommended">RECOMMENDED</div>
              <div className="pkg-header">
                <h3>The Flow System</h3>
                <span className="pkg-duration">(12 Hours)</span>
              </div>
              <p className="pkg-desc">Full room transformation with custom labeling & binning.</p>
              <div className="pkg-price">CHF 1,680</div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom CTA Button */}
      <div className="pricing-cta-container">
        <button className="cta-primary cta-wide">View Full Availability</button>
      </div>

    </section>
  );
};

export default Pricing;
