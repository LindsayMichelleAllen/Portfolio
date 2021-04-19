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
                    I received a Bachelors of Science in Computer Science from Washington State University in December of 2020. I initially began my degree path in Neuroscience, but an intro
                    to programming class led me to change my career path. I had the opportunity to intern for 3 years in the Research & Development department at Schweitzer Engineering 
                    Laboratories where I was exposed to all different types of programming from microcontrollers to web development. Upon graduation, I was promoted to a Fullstack engineer where 
                    I continue to maintain and enhance a React based requirements management tool. On my free time I play guitar, ride motorcycles, and teach my dog new party tricks. Our latest 
                    feat was a full round of patty cake.
                </div>
            </div>
        );
    }

}

export default About;