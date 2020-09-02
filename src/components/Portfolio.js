import React from 'react';
import Project from './Project';
import VisAware from './VisAware';

class Portfolio extends React.Component {
    state = {
        flippedCard: {}
    }
    flipCard = card => {
        if (this.state.flippedCard === {} || this.state.flippedCard !== card) {
            this.setState({ flippedCard: card });
        } else {
            this.setState({ flippedCard: {} });
        }
    }
    render(project) {
        const projects = this.props.projects;
        return (
            <div className="portfolio page__section" id="work">
                <VisAware />
                <div className="page__content">
                    <h2 className="page__title">{this.props.title}</h2>                 
                    <div className="projects">
                        {Object.keys(projects).map(key => (
                            <Project flipCard={this.flipCard} flippedCard={this.state.flippedCard} key={key} index={key} details={projects[key]} />
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio