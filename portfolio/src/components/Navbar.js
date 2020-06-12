import React from 'react';
import AppMode from '../AppModes';
import '../style/Navbar.css';



class Navbar extends React.Component {

    render() {
        return(
            <div className="Navbar">
                <div className="name">Lindsay Allen - Software Engineer</div>
                <a className='icon' onClick={() => this.props.changeMode(AppMode.AboutMe)}>About Me</a>
                <a className='icon' onClick={() => this.props.changeMode(AppMode.Experience)}>Experience</a>
                <a className='icon' onClick={() => this.props.changeMode(AppMode.Projects)}>Projects</a>
                {/*<a className='icon' onClick={() => this.props.changeMode(AppMode.Contact)}>Contact Me</a>*/}
                <div className="status">Work Status: US Citizen</div>
            </div>
        );
    }

}

export default Navbar;