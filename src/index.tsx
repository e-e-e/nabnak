import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { installApp } from './App';

const App = installApp();

App && ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
