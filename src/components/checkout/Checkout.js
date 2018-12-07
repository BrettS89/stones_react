import React, { Component } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';
import './Checkout.css';

class Checkout extends Component {
  state = {
    total: 0,
    itemIds: [],
    itemNames: [],
  };

  componentDidMount() {
    let total = 0;
    const items = [];
    const itemNames = [];

    JSON.parse(localStorage.getItem('cart')).forEach(product => {
      total += product.price;
      items.push(product._id);
      itemNames.push(<div className="item-list">${product.price} {product.name}</div>);
    });
    this.setState({ total, itemIds: items, itemNames });
  }

  renderProductDetails = detail => {
    if(detail === 'total') {
      return this.state.total;
    } else if(detail === 'items') {
      return this.state.itemNames;
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();

    const order = {
      orderDate: new Date(Date.now()).toString(),
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value,
      email: e.target.email.value,
      total: this.state.total,
      products: this.state.itemIds,
    };
    
    try {
      const { data: { status } } = await axios.post(`${API_URI}/products/save`, order);
      if(status === 'success') {
        document.querySelector('#orderForm').reset();
      }
    } catch(e) {
      alert('Something went wrong, please try again.');
    }

  };

  render() {
    return (
      <div className="container order-container">
        <h2>Your Order</h2>
        <hr/>

        <div className="shipping-form">
          <h4>Shipping address</h4>
          <form className="add-product-form" id="orderForm" onSubmit={this.handleSubmit} onSubmit={this.formSubmit.bind(this)}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" className="form-control" required/>
            </div>
            <div className="form-group">
              <input type="text" name="address" placeholder="Address" className="form-control" required/>
            </div>
            <div className="form-group">
              <input type="text" name="city" placeholder="City" className="form-control" required/>
            </div>
            <div className="form-group">
              <input type="text" name="state" placeholder="State" className="form-control" required/>
            </div>
            <div className="form-group">
              <input type="text" name="zip" placeholder="Zip code" className="form-control" required/>
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" className="form-control" required/>
            </div>

              <button className="btn btn-primary" type="submit">Place order</button>
         
          </form>
        </div>

        <div className="order-details">
          <h4>Order Details</h4>
          {this.renderProductDetails('items')}
          <p style={{ marginTop: 15 }}><strong>Sub total: ${this.renderProductDetails('total')}</strong></p>
          <p>Shipping included</p>
          <hr/>
          <h5 style={{ fontWeight: '600' }}>Total: ${this.renderProductDetails('total')}</h5>
        </div>

      </div>
    );
  }
}

export default Checkout;
