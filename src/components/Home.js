import React from 'react';
import SVG from './SVG';

class Home extends React.Component {
  render() {
    return (
      <div className="main page__section">
        <button
          className={`mobile__nav__button ${this.props.status}`}
          onClick={this.props.toggleMenu}
        >
          <span class="nav__button__inner"></span>
          <span class="nav__button__inner"></span>
          <span class="nav__button__inner"></span>
          <span class="nav__button__inner"></span>
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