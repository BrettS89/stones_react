import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: true
    }
  }

  addProduct = 
      <li className="nav-item">
        <a className="nav-link" href="#">Add Product</a>
      </li>

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Stones by Sue</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Pearl Necklaces</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gemstone Necklaces</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Metal Necklaces</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sea Glass Jewelry</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {this.state.admin ? this.addProduct : ''}
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="cart-icon"><i className="fas fa-shopping-bag fa-2x"></i></a>
              </li>
            </ul>  
          </div>      
      </nav>
    );
  }
}

export default Header;