import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
