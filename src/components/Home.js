import React from 'react';
import SVG from './SVG';
import VisAware from './VisAware';

class Home extends React.Component {
  isScrolling() {
    console.log(window.pageYOffset);
  }
  render() {
    return (
      <div className="main page__section">
        <VisAware />
        <button
          className={`mobile__nav__button ${this.props.status}`}
          onClick={this.props.toggleMenu}
        >
          <span className="nav__button__inner"></span>
          <span className="nav__button__inner"></span>
          <span className="nav__button__inner"></span>
          <span className="nav__button__inner"></span>
          Menu
        </button>
        <main className="page__content">
          <h1 className="greeting">{this.props.headline}</h1>
          <h2 className="tagline">{this.props.tagline}</h2>
        <button className="scroll" onClick={this.props.scrollPage}>
          <SVG fileName="double-down" />
          See More
        </button>
        </main>
      </div>
    );
  }
}

export default Home;