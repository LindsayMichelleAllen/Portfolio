import React from 'react';
import '../style/About.css';
import img from '../attachments/profile.jpg';
import img2 from '../attachments/profile2.jpg';

class About extends React.Component {

    render() {
        return(
            <div className="full-wrap">
                <div className="body-text">
                    <img style={{paddingBottom: "40px"}} src={img}></img>
                    <img style={{paddingBottom: "40px", paddingLeft: "10px"}} src={img2}></img>
                    <br></br>
                    I am expected to graduate with a BS in Computer Science from Washington State University in December of 2020. I initially began my degree path in Neuroscience, but an intro
                    to programming class was all I needed to see this was my true passion. I've had the opportunity to intern for the past 2 years in the Research & Development department at Schweitzer Engineering 
                    Laboratories where I was exposed to all different types of programming from microcontrollers to web development. On my free time I play guitar, ride motorcycles, and hang 
                    out with my fur baby.
                </div>
            </div>
        );
    }

}

export default About;