import React from 'react';
import '../style/Projects.css';
import Publication from '../attachments/IEEE_CoG_Submission.pdf';

class Projects extends React.Component {

    render() {
        return(
            <div className="full-wrap">
                <div style={{paddingTop: "20px"}}></div>
                <h3>Publications</h3>
                <p></p>
                    <div className="project">
                        <div className="reference">
                            <a href={Publication} target="_blank" >An Upper Bound on the State-Space Complexity of Brandubh</a>
                            <p></p>
                            <div className="summary">The purpose of this paper is to study the combinatorial 
                            state-space complexity of an Irish 
                            variation of Taﬂ called Brandubh. Brandubh was chosen not only because of its asymmetric goals 
                            for the two players, but its overall complexity is well below that of chess, which 
                            should make it tractable for strong solving. Brandubh’s rules and characteristics are 
                            used to gain an understanding of the overall state-space complexity of the game. 
                            State-spaces will consider valid piece positions, a generalized rule set, and accepted ﬁnal 
                            state conditions. From these states the upper bound for the complexity of strongly solving 
                            Brandubh is derived.</div>
                        </div>
                        <div className="line"></div>
                    </div>
               <h3>Professional</h3>
               <p></p>
                    <div className="project">
                        <div className="title">Documentation Hosting Web Application (Linux)</div>
                        <div className="tools">MongoDB | Express.js | Angular 8 | Node.js</div>
                        <div className="summary">This M.E.A.N. application displays documentation created
                                                 during the development process. It is used to aid in communication during 
                                                 product integration amongst an infrastructure team in the Research & Development 
                                                 department. The frontend was created using Angular 8, and the server was developed 
                                                 with a combination of Express.js and Node.js. MongoDB was used to create the database 
                                                 on server startup and modify the database in the case of documentation changes.
                                                 The server manages the documentation by storing static links to files downloaded from 
                                                 Artifactory, and accepts post requests issued during a Jenkins build. </div>
                        <br></br>
                        <div className="link">**unable to provide code samples due to confidentiality agreement**</div>
                        <div className="line"></div>
                    </div>
                    <p></p>
               <h3>Academic</h3>
               <p></p>
                    <div className="project">
                        <div className="title">Database Management Term Project - Yelp Challenge (Windows)</div>
                        <div className="tools">C# | SQL | Postgres | Python</div>
                        <div className="summary">This project's UI is developed using WPF and C#, and it allows users to perform 
                                                 different types of queries on the dataset provided by Yelp. The standalone application 
                                                 uses a parser built in Python to organize datasets of over 200,000 yelp reviews and
                                                 user accounts. The information is then stored in the database managed by Postgres, and is
                                                 queried using SQL.</div>
                        <br></br>
                        <div className="link"><a href="https://github.com/LindsayMichelleAllen/DatabaseManagement"  target="_blank">Github Repo</a></div>
                        <div className="line"></div>
                    </div>
                    <p></p>
                    <div className="project">
                        <div className="title">Data Mining Term Project - Predicting Game Sales Using A Recommender System (Windows)</div>
                        <div className="tools">Python</div>
                        <div className="summary">This algorithm is used to predict game sales and suggest design modifications based on 
                                                 descriptive attributes. In order to find the most commonly occuring attributes in games 
                                                 with high sales, the apriori algorithm is used to determine frequent item sets. 
                                                 More details and results can be reviewed in the project proposal found in the repo.</div>
                        <br></br>
                        <div className="link"><a href="https://github.com/LindsayMichelleAllen/DataMining"  target="_blank">Github Repo</a></div>
                        <div className="line"></div>
                    </div>
                    <p></p>
                <h3>Private</h3>
               <p></p>
                    <div className="project">
                        <div className="title">The Signal (Windows)</div>
                        <div className="tools">C# | Unity Editor</div>
                        <div className="summary">I am in the design stages of a PC-based RPG game. Current documentation 
                                                 can be found in the github link below.</div>
                        <br></br>
                        <div className="link"><a href="https://github.com/LindsayMichelleAllen/TheSignal"  target="_blank">Github Repo</a></div>
                        <div className="line"></div>
                    </div>
                    <p></p>
                    <div className="project">
                        <div className="title">Portfolio (Windows)</div>
                        <div className="tools">MongoDB | Express.js | Reactjs | Node.js</div>
                        <div className="summary">The source code for this single page web application can be found in the following 
                                                 link</div>
                        <br></br>
                        <div className="link"><a href="https://github.com/LindsayMichelleAllen/Portfolio"  target="_blank">Github Repo</a></div>
                        <div className="line"></div>
                    </div>
                    <p></p>
            </div>
        );
    }

}

export default Projects;