import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Import the global styles
import './styles/main.css';
// Note: You must ensure you run 'npm install @types/react @types/react-dom'
// if you haven't already set up a TypeScript environment.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
