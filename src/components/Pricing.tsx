import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section section-bg-dark">
      <h2>💰 Packages That Prioritize Flow</h2>
      <div className="grid-container">
        <div className="price-card">
          <h3>The Starter Spark (4 Hours)</h3>
          <p className="price-tag">CHF 600</p>
          <ul>
            <li>Initial Audit & Assessment</li>
            <li>4 Hours Focused Decluttering</li>
            <li>Perfect for a single zone (desk or pantry).</li>
          </ul>
        </div>
        <div className="price-card recommended">
          <h3>The Flow System (12 Hours)</h3>
          <p className="price-tag">CHF 1,680</p>
          <ul>
            <li>Full Room Transformation</li>
            <li>Custom Labeling System</li>
            <li>30-Day Digital Check-in</li>
          </ul>
        </div>
      </div>
      <button className="cta-primary">View Full Availability</button>
    </section>
  );
};

export default Pricing;
