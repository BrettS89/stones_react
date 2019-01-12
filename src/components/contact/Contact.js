import React, { Component } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';
import './Contact.css';

class Contact extends Component {

  formSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    try {
      await axios.post(`${API_URI}/admin/contact`, body);
      alert('Thank you, your message was sent!');
      this.props.history.push('/');
    }
    catch(e) {
      alert('An error occured, please try again');
    }
  };

  render() {
    return (
      <div className="container contact-container">
        <h2>Get in touch</h2>
        <hr/>

        <form className="add-product-form" id="orderForm" onSubmit={this.formSubmit.bind(this)}>
          <h4>Send a message and I'll be in touch shortly</h4>
          <div className="form-group">
            <input
              type="text" 
              name="name" 
              placeholder="Name" 
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email" 
              name="email" 
              placeholder="Email" 
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message" 
              placeholder="Type your message..." 
              className="form-control"
              rows={5}
              required
            />
          </div>
          <button className="btn btn-primary">Send message</button>
        </form> 

      </div>
    );
  }
}

export default Contact;
