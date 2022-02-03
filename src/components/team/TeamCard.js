// dependencies
import React from 'react';

// assets
import images from '../../assets/images.js';

const TeamCard = ({ order, img, name, text }) => {
  return(
    <div className={`team-card ${order}`}>
      <img className='team-avatars' src={img} alt=''/>
      <h3>{name}</h3>
      <p>{text}</p>

      <div className='team-socials'>
        <a href='#'>
          <img className='social-icons discord-icon' src={images.discordLogo} alt='' />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href='#'>
          <img className='social-icons twitter-icon' src={images.twitterLogo} alt='' />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;