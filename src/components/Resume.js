import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume page__section">
                <div className="page__content">
                    <h2 className="page__title">{this.props.title}</h2>
                    <a href={this.props.link} className="resume__link">
                        <img src={this.props.thumbnail} alt="Resume" className="resume__thumbnail" />
                    </a>
                    <span className="resume__tagline">Click to Download</span>
                </div>
            </div>
        )
    }
}

export default Resume;