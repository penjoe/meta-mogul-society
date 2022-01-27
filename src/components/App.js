// dependencies
import React from 'react';

// stylesheets
import '../styles/App.scss';
import '../styles/Header.scss';
import '../styles/About.scss';
import '../styles/Roadmap.scss';
import '../styles/Team.scss';
import '../styles/Footer.scss';

// custom modules
import Header from './header/Header.js';
import About from './about/About.js';
import Roadmap from './roadmap/Roadmap.js';
import Team from './team/Team.js';
import Footer from './footer/Footer.js';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default App;