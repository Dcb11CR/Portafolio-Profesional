import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa ReactDOM desde 'react-dom/client'
import App from './App';

// Aquí usamos createRoot para montar la app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
