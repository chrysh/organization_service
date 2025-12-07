import React from 'react';
import Header from './components/Header.tsx';
import ProblemSolution from './components/ProblemSolution.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import UniqueValue from './components/UniqueValue.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

// Define App as a Function Component (FC)
const App: React.FC = () => {
  return (
    <div className="landing-page-container">
      <Header />
      <ProblemSolution />
      <HowItWorks />
      <UniqueValue />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
