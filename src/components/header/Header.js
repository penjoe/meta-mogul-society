// dependencies
import React from 'react';

// assets
import images from '../../assets/images.js';

const Header = () => {
  return(
    <div className='header'>
      <img className='hero-image' src={images.heroImage} alt='hero'/>
      <h1>Meta Mogul Society</h1>
    </div>
  );
};

export default Header;