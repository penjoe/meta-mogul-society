// dependencies
import React from 'react';

//stylesheets
import './Header.css';

// assets
import images from '../../assets/images.js';
console.log(images);

const Header = () => {
  return(
    <div className='header'>
      <img src={images.heroImage} alt='hero'/>
      <h1>Meta Mogul Society</h1>
    </div>
  );
};

export default Header;
