import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';

class Confirmation extends Component {
  render() {
    return (
      <div className="container confirmation-container">
        <h2>Your order has been placed!</h2>
        <h5>You will recieve an email confirmation with your order number</h5>
        <Link to="/" className="btn btn-primary">Continue shopping</Link>
      </div>
    );
  }
}

export default Confirmation;
