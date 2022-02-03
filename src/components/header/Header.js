// dependencies
import React from 'react';

// assets
import images from '../../assets/images.js';

const Header = () => {
  return(
    <div className='header'>
      <div className='header-hero-image'></div>
      {/* <img className='hero-image' src={images.heroImage} alt='hero'/> */}
      <h1 className={'main-title'}>Meta Mogul Society</h1>
    </div>
  );
};

export default Header;
