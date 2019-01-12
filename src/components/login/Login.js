import React, { Component } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';
import './Login.css';

class Login extends Component {

  formSubmit = async (e) => {
    try {
      e.preventDefault();
      const credentials = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const { data } = await axios.post(`${API_URI}/admin/login`, credentials);
      localStorage.setItem('_id', data._id);
      this.props.history.push('/');
    }
    catch(e) {
      alert('invalid credentials');
    }
  };

  render() {
    return (
      <div className="container login-container">
          
          <form className="add-product-form" id="orderForm" onSubmit={this.formSubmit.bind(this)}>
            <h2>Login</h2>
            <div className="form-group">
              <input
                type="text" 
                name="email" 
                placeholder="Email" 
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password" 
                name="password" 
                placeholder="Password" 
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>  

      </div>
    );
  }
}

export default Login;
