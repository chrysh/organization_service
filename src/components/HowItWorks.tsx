import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works-section section-bg-dark">
      <h2>🛠️ The 3-Step NeuroFlow Process</h2>
      <div className="grid-container">
        <div className="step-card">
          <h3>Step 1: The Sensory Audit</h3>
          <p>We assess your space for **sensory needs** (light, texture, noise) and create a custom functional map of your room.</p>
        </div>
        <div className="step-card">
          <h3>Step 2: Micro-Task Momentum</h3>
          <p>We use **time-boxing** and task decomposition to focus on tiny, achievable zones, delivering momentum and the necessary **dopamine reward**.</p>
        </div>
        <div className="step-card">
          <h3>Step 3: System Sustain</h3>
          <p>We build robust, **label-heavy systems** designed to be used on autopilot, ensuring the order lasts long after we leave.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
