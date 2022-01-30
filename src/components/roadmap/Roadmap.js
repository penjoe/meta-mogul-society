// dependencies
import React from 'react';

// components
import RoadmapCard from './RoadmapCard.js';


const Roadmap = () => {
        return(

        <div className='roadmap'>
            <h1 style={{textAlign: "center"}}>Roadmap</h1>
            
            <div className='lineContainer'>

                <div className='progressLine'>
                    <div className='progress' style={{width: "68%"}}>
                    </div>
                        

                    <RoadmapCard
                        styleName='completed'
                        title='first'
                        >
                        description
                    </RoadmapCard>

                    <RoadmapCard
                        styleName='completed'
                        title='second'
                        >
                        description
                    </RoadmapCard>

                    <RoadmapCard
                        styleName='current'
                        title='third'
                        >
                        description
                    </RoadmapCard>

                    <RoadmapCard
                        styleName=''
                        title='fourth'
                        >
                        description
                    </RoadmapCard>
                    
                    
                    
                </div>
            </div>
        </div>

        
        );
    }


export default Roadmap;
