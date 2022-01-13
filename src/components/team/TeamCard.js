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
    </div>
  );
};

export default TeamCard;