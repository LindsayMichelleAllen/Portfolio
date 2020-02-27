import React from 'react';
import SideBar from './components/Sidebar';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AppMode from './AppModes';
import './App.css';

const modeHeader = {};
modeHeader[AppMode.About] = "About Me";
modeHeader[AppMode.Projects] = "Projects";
modeHeader[AppMode.Experience] = "Experience";
modeHeader[AppMode.Contact] = "Contact Me";

const modeRegister = {};
modeRegister[AppMode.About] = About;
modeRegister[AppMode.Projects] = Projects;
modeRegister[AppMode.Experience] = Experience;
modeRegister[AppMode.Contact] = Contact;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mode: AppMode.AboutMe,
      sideBarOpen: false
    }
  }

  render() {
    const ModePage = modeRegister[this.state.mode];
    return (
      <div>
        <SideBar/>
        <ModePage/>
      </div>
    );
  }
}

export default App;
