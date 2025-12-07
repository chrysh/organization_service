import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="problem-solution-section section-bg-light">
      <h2>Tired of Clutter Paralysis? We Understand.</h2>
      <div className="flex-container">
        <div className="problem-box">
          <h3>The Neurodivergent Struggle:</h3>
          <ul>
            <li>**Initiation Block:** Knowing what to do but feeling paralyzed to start.</li>
            <li>**Sensory Overload:** Visual chaos makes your brain feel noisy.</li>
            <li>**Shame Cycle:** Organizing methods that don't stick lead to guilt.</li>
          </ul>
        </div>
        <div className="solution-box">
          <h3>The Dopamine Declutter Solution:</h3>
          <p>We use **neuroscience-backed systems** to break down the task, turning organization into a series of achievable, rewarding steps that deliver that necessary **dopamine hit**.</p>
          <button className="cta-secondary">Learn How We're Different</button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
