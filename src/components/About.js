import React from 'react';

class About extends React.Component {
    state = {
        profile: '/img/profile.png',
        alt: 'Jordan Lamoreaux'
    }
    render() {
        return (
            <div className="about page__section" id="about">
                <div className="page__content">
                    <aside className="profile__photo__container">
                        <img src={this.state.profile} alt={this.state.alt} className="profile__photo" />
                    </aside>
                    <section className="about__content">
                        <h2 className="page__title">{this.props.title}</h2>
                        <article className="about__summary">{this.props.content}</article>
                    </section>
                </div>
            </div>
        )
    }
}

export default About;