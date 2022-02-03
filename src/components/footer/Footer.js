// dependencies
import React from 'react';

//assets
import images from '../../assets/images.js';

const Footer = () => {
  return(
    <div className='footer'>
        
      <div className='footer-left'>
        <p>We are</p>
        <h2>Meta Mogul society</h2>
        <p>Connect with us!</p>
      </div>
      <div className='footer-right'>
        <a href='#'>
          <img className='social-icons discord-icon' src={images.discordLogo} alt='' />
        </a>
        <a href='#'>
          <img className='social-icons twitter-icon' src={images.twitterLogo} alt='' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
