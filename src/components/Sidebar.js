import React from 'react';
// import nav from '../nav';
import SVG from './SVG';

// let svgs = {};
// nav.main.forEach(svg => {
//     svgs[svg] = (require(`../svg/${svg}.svg`));
// });


class Header extends React.Component {
    render() {
        const nav = this.props.nav;

      return (
          <nav className={`sidebar ${this.props.status}`}>
            <ul className="nav__items clean__list">
              {nav.main.map((key) => (
                <li className="nav__item" key={key} index={key}>
                  <a href={`${key.link}`} className="nav__item__link">
                    <SVG fileName={key.name} />
                    {/* <img src={svgs[key]} alt={key} className="svg" /> */}
                    <span className="link__label">{key.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="social__items clean__list">
              {Object.keys(nav.social).map((key) => (
                <li className="social__item" key={key} index={key}>
                  <a href={`${nav.social[key]}`} className="social__item__link">
                    <SVG fileName={key} />
                    <span className="link__label">{key}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        );
    }
}

export default Header;