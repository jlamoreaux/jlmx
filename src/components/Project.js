import React from 'react';
import SVG from './SVG';

class Project extends React.Component {
  cardRef = React.createRef();
    // state = {
    //     flipped: false
    // }
    // flip = () => {
    //     const flipped = this.state.flipped;
    //     this.setState({flipped : !flipped });
    // }
  setCard = event => {
    const card = this.cardRef;
    this.props.flipCard(card);
  }
    render() {

        const { image, name, prodLink, github, description } = this.props.details;
        return (
          <div
            className={`project__card${this.props.flippedCard === this.cardRef ? ' flipped' : ''}`}
            onClick={this.setCard}
            ref={this.cardRef}
          >
            <div className="card__front">
              <div className="image__container">
                <img src={`/img/portfolio/tn/${image}`} alt={name} />
              </div>
              <div className="card__overlay">
                <h3 className="project__name">{name}</h3>
              </div>
            </div>
            <div className="card__back">
              <div className="image__container">
                <img
                  src={`/img/portfolio/${image}`}
                  alt=""
                  className="project__hero"
                />
              </div>
              <div className="project__description">
                <span className="description__button">⌄ Description ⌄</span>
                <p>{description}</p>
                <ul className="project__links clean__list">
                  {github && (
                    <li className="project__link">
                      <a
                        href={github}
                        className="project__github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SVG fileName='github' />
                        Github
                      </a>
                    </li>
                  )}
                  {prodLink.length > 0 && (
                    <li className="project__link">
                      <a
                        href={prodLink}
                        className="project__production"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SVG fileName='public' />
                        Visit
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default Project;

