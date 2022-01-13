// dependencies
import React from 'react';
import reactDom from 'react-dom';

// stylesheets
import './styles/App.css';
import './styles/Header.css';
import './styles/Team.css';
import './styles/Footer.css';

// root App component
import App from './components/App.js';

// render to root div in public/index.html
reactDom.render(
  <App />,
  document.querySelector('#root')
);