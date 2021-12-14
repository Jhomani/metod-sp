import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';

// global css
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
