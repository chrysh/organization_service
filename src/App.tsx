import React from 'react';
import Header from './components/Header.tsx';
import Pricing from './components/Pricing.tsx';
import Victories from './components/Victories.tsx';
import './styles/main.css';

// Define App as a Function Component (FC)
const App: React.FC = () => {
  return (
    <div className="landing-page-container">
      {/* The main focus is the visually engaging header/hero section */}
      <Header />
      {/*<Quests />*/}
      <Pricing />
      <Victories />
      {/* Placeholder for the rest of your scrolling page components */}
      {/* <ProblemSolution /> */}
      {/* ...etc. */}
    </div>
  );
};

export default App;
