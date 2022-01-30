// dependencies
import React, {Component} from 'react';

// assets
import images from '../../assets/images.js';


class RoadmapCard extends Component {
    render(){
        return(
        <div className='status'>
            <div className={ "dot " + ( this.props.styleName || "") }>
                <div className='textcard'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.children}</p>
                </div>
            </div>
            
        
        
        </div>
        )
    }
    
        
}
  

export default RoadmapCard;