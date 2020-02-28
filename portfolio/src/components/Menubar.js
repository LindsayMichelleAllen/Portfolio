import React from 'react';
import AppMode from '../AppModes';
import '../style/Menubar.css';
import Navbar from 'react-bootstrap/Navbar';



class Menubar extends React.Component {

    render() {
        return(
            <div className="Navbar">
                <a onClick={() => this.props.changeMode(AppMode.AboutMe)}>About Me</a>
                <a onClick={() => this.props.changeMode(AppMode.Experience)}>Experience</a>
                <a onClick={() => this.props.changeMode(AppMode.Projects)}>Projects</a>
                <a onClick={() => this.props.changeMode(AppMode.Contact)}>Contact Me</a>
            </div>
        );
    }

}

export default Menubar;