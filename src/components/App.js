import React from 'react';
import '../style/main.css';

import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import nav from '../nav';
import projects from '../projects';

class App extends React.Component {
  targetRef = React.createRef();
  state = {
    nav: nav,
    projects: projects,
    menuStatus: "closed",
  };

  toggleMenu = (event) => {
    const menuStatus = this.state.menuStatus;
    // menuStatus = menuStatus === 'open' ? menuStatus = 'closed' : menuStatus = 'open';
    this.setState({ menuStatus: menuStatus === "open" ? "closed" : "open" });
  };

  scrollPage = (event) => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
    console.log(window.pageYOffset);
  };

  isScrolling= (event) => {
    console.log(window.pageYOffset);
  }

  render() {
    return (
      <div className="jlmx" onChange={this.isScrolling}>
        <Sidebar nav={this.state.nav} status={this.state.menuStatus}></Sidebar>
        <Home
          headline="Hi, I'm Jordan!"
          tagline="I build cool things for the internet."
          toggleMenu={this.toggleMenu}
          status={this.state.menuStatus}
          scrollPage={this.scrollPage}
        />
        <About
          title="About Me"
          content="My name is Jordan and I'm here to say..."
          ref={this.targetRef}
        />
        <Portfolio
          title="The Cool Things I Have Built"
          projects={this.state.projects}
        ></Portfolio>
        {/* <Resume
          title="Resume"
          link="/resume.pdf"
          thumbnail="/img/resume.png"
        ></Resume> */}
        <Contact title="Let's get in touch!" />
      </div>
    );
  }
}

export default App;
