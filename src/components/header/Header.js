import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: true
    }
  }

  addProduct = 
      <li className="nav-item">
        <Link className="nav-link" to="/products/add">Add Product</Link>
      </li>

  renderAddProducts = () => {
    if(localStorage.getItem('_id')) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/products/add">Add Product</Link>
        </li>
      );
    }
  };

  renderOrders = () => {
    if(localStorage.getItem('_id')) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/orderlist">Orders</Link>
        </li>
      );
    }
  };

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">Stones by Susan</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products/necklaces">Jewelry</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/products/necklace-sets">Necklace Sets</Link>
              </li> */}
            </ul>
            <ul className="navbar-nav ml-auto">
              {this.renderOrders()}
              {this.renderAddProducts()}
              {/* <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" id="cart-icon"><i className="fas fa-shopping-bag fa-2x"></i></Link>
              </li>
            </ul>  
          </div>      
      </nav>
    );
  }
}

export default Header;