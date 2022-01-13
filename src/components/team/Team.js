// dependencies
import React from 'react';

// assets
import images from '../../assets/images.js';

// components
import TeamCard from './TeamCard.js';

const Team = () => {
  return(
    <div className='team-wrap' style={{ backgroundColor: '#ffffff' }}>
      <h1 className='team-header'>Meet the team</h1>
      <div className='team'>
        <TeamCard order={'order1'} img={images.burlmanTeamAvatar} name={'Burlman'} text={'this is burlman'} />
        <TeamCard order={'order2'} img={images.mikeTeamAvatar} name={'mogulMike'} text={'this is mike'} />
      </div>
    </div>
  );
};

export default Team;
