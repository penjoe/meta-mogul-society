// dependencies
import React from 'react';
import reactDom from 'react-dom';

// root App component
import App from './components/App.js';

// render to root div in public/index.html
reactDom.render(
  <App />,
  document.querySelector('#root')
);