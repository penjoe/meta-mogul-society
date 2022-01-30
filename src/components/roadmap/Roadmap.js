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
                    <div className='status'>
                        <div className='dot completed'>
                            <div className='textcard'>
                                <h1>first</h1>
                                <p> small </p>
                            </div>
                        </div>
                    </div>

                    <div className='status'>
                        <div className='dot completed'>
                        <div className='textcard'>
                                <h1>second</h1>
                                <p> small </p>
                            </div>
                        </div>
                    </div>
                        
                    <div className='status'>
                        <div className='dot current'>
                        <div className='textcard'>
                                <h1>third</h1>
                                <p> small </p>
                            </div>
                        </div>
                    </div>
                        
                    <div className='status'>
                        <div className='dot'>
                        <div className='textcard'>
                                <h1>fourth</h1>
                                <p> small </p>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>

        
        );
    }


export default Roadmap;
