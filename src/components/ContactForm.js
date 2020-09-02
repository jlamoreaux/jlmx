import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
    state = {
        name: "",
        phone: "",
        email: "",
        message: "",
    };
  name = React.createRef();
  email = React.createRef();
  phone = React.createRef();
  message = React.createRef();

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

    submitResponse = (event) => {
      event.preventDefault();
      if (this.state.email === '') {
        alert("Please enter an email address");
      } else if (this.state.message === '') {
        alert("Please add a message");
      } else if (this.state.name === '') {
        alert("Please enter a name");
      } else {
        emailjs.sendForm('postmark', 'contact_form', event.target, process.env.REACT_APP_EMAILJS_ID)
          .then((result) => {
            alert("Message Sent.");
            this.resetForm();
          }, (error) => {
            console.error(error.text);
            alert("Sorry, the message failed to send. Please try again later.");
          });
      }
    };
    resetForm = () => {
        this.setState({name: '', email: '', message: ''})
    };
    
  render() {
    return (
      <form onSubmit={this.submitResponse} className="contact__form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="contat__name"
          value={this.state.name}
          onChange={this.onNameChange.bind(this)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="contact__email"
          value={this.state.email}
          onChange={this.onEmailChange.bind(this)}
        />
        <label htmlFor="tel">Phone</label>
        <input
          type="tel"
          name="phone"
          id="contact__phone"
          value={this.state.phone}
          onChange={this.onPhoneChange.bind(this)}
        />
        <label htmlFor="message">Enter your message:</label>
        <textarea
          name="message"
          id="contact__message"
          cols="30"
          rows="10"
          value={this.state.message}
          onChange={this.onMessageChange.bind(this)}
        ></textarea>
        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    );
  }
}

export default ContactForm;