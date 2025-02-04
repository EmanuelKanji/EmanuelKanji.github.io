import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Asegúrate de que el basename coincide con el nombre de tu repositorio en GitHub Pages
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/kanjiro34.github.io">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
