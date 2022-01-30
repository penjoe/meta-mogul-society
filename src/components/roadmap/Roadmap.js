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
                        title='first event title'
                        date='20 jan 2022'
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli Aliquam et nunc urna. Aenean a porta lorem. Donec scelerisque mattis dui, eget interdum lectus fermentum et. Quisque tempus cursus finibus. Vestibulum eu placerat lacus. In ac lectus ut libero vehicula finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </RoadmapCard>

                    <RoadmapCard
                        styleName='completed'
                        title='second event title'
                        date='20 jan 2022'
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli Aliquam et nunc urna. Aenean a porta lorem. Donec scelerisque mattis dui, eget interdum lectus fermentum et. Quisque tempus cursus finibus. Vestibulum eu placerat lacus. In ac lectus ut libero vehicula finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    </RoadmapCard>

                    <RoadmapCard
                        styleName='current'
                        title='third event title'
                        date='20 jan 2022'
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli Aliquam et nunc urna. Aenean a porta lorem. Donec scelerisque mattis dui, eget interdum lectus fermentum et. Quisque tempus cursus finibus. Vestibulum eu placerat lacus. In ac lectus ut libero vehicula finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    </RoadmapCard>

                    <RoadmapCard
                        styleName=''
                        title='fourth event title'
                        date='20 jan 2022'
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing eli Aliquam et nunc urna. Aenean a porta lorem. Donec scelerisque mattis dui, eget interdum lectus fermentum et. Quisque tempus cursus finibus. Vestibulum eu placerat lacus. In ac lectus ut libero vehicula finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    </RoadmapCard>
                    
                    
                    
                </div>
            </div>
        </div>

        
        );
    }


export default Roadmap;
