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
                        <article className="about__summary">
                            <p>
                                Hi! My name is Jordan Lamoreaux and I am a self-taught full-stack web developer based in Austin, TX.
                                I currently work for a company that provides custom websites for K-12 schools built on our in-house CMS software.
                            </p>
                            <p>
                                Having spent many years in customer-facing roles, I take a customer-first approach to my work.
                                I am a motivated student, having learned both American Sign Language and Web Development outside of a classroom,
                                I appreciate the value of critical thinking and using as many educational resources available to us as possible.
                            </p>
                            <p>
                                When I’m not debugging code, I am spending time with <a href="http://penelopelamore.com">my wife</a> and my baby daughter.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}

export default About;