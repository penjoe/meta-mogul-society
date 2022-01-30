// dependencies
import React from 'react';

// assets
import images from '../../assets/images.js';

import classes from '../../styles/Roadmap.scss';

const RoadmapCard = () => {
    return(
        <div className='status'>
            <div className={ "dot " + ( this.props.styleName || "") }>
                
            </div>
            <h3>{this.props.children}</h3>
        </div>
  );
}
  

export default RoadmapCard;