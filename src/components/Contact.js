import React from 'react';
import ContactForm from './ContactForm';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact page__section" id="contact">
                <div className="page__content">
                    <h2 className="page__title">{this.props.title}</h2>
                    <ContactForm/>
                </div>
            </div>
        )
    }
}

export default Contact;