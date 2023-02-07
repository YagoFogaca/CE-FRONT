import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './global.styled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
