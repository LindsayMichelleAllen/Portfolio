import React from 'react';
import '../style/Projects.css';

class Projects extends React.Component {

    render() {
        return(
            <div className="full-wrap">
                <div style={{paddingTop: "20px"}}></div>
               <h3>Professional</h3>
               <p></p>
                    <div className="project">
                        <div className="title">Title</div>
                        <div className="tools">Languages, OS, frameworks, or libraries used</div>
                        <div className="summary">Summary of project</div>
                        <div className="link">**unable to provide code samples due to confidentiality agreement</div>
                        <div className="line"></div>
                    </div>
                    <p></p>
               <h3>Private</h3>
               <p></p>
                    <div className="project">
                        <div className="title">Title</div>
                        <div className="tools">Languages, OS, frameworks, or libraries used</div>
                        <div className="summary">Summary of project</div>
                        <div className="link">link to code if it exists</div>
                        <div className="line"></div>
                    </div>
                    <p></p>
                    <div className="project">
                        <div className="title">Title</div>
                        <div className="tools">Languages, OS, frameworks, or libraries used</div>
                        <div className="summary">Summary of project</div>
                        <div className="link">link to code if it exists</div>
                        <div className="line"></div>
                    </div>
                    <p></p>
               <h3>Academic</h3>
               <p></p>
                    <div className="project">
                        <div className="title">Title</div>
                        <div className="tools">Languages, OS, frameworks, or libraries used</div>
                        <div className="summary">Summary of project</div>
                        <div className="link">link to code if it exists</div>
                        <div className="line"></div>
                    </div>
                    <p></p>
                    <div className="project">
                        <div className="title">Title</div>
                        <div className="tools">Languages, OS, frameworks, or libraries used</div>
                        <div className="summary">Summary of project</div>
                        <div className="link">link to code if it exists</div>
                        <div className="line"></div>
                    </div>
                    <p></p>
            </div>
        );
    }

}

export default Projects;