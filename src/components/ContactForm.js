import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <form onSubmit="" className="contact__form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="contat__name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="contact__email"/>
                <label htmlFor="tel">Phone</label>
                <input type="tel" name="phone" id="contact__phone" />
                <label htmlFor="message">Enter your message:</label>
                <textarea name="message" id="contact__message" cols="30" rows="10"></textarea>
                <button type="submit" className="button">Send Message</button>
            </form>
        )
    }
}

export default ContactForm;