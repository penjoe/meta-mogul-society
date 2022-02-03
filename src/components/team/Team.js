// dependencies
import React from 'react';

// assets
import images from '../../assets/images.js';

// components
import TeamCard from './TeamCard.js';

const Team = () => {
  return(
    <div className='team-wrap'>
        <div className='team-hero-image'></div>
      <h1 className='team-header'>Meet the Moguls</h1>
      <h4 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at justo ut </h4>
      <div className='team'>
        <TeamCard order={'order1'} 
            img={images.burlmanTeamAvatar} 
            name={'Burlman'} 
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at justo ut ex commodo volutpat.'} 
            />
        <TeamCard order={'order2'} 
            img={images.mikeTeamAvatar} 
            name={'mogulMike'} 
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at justo ut ex commodo volutpat.'} 
            />
      </div>
    </div>
  );
};

export default Team;
