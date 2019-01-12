import React, { Component } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';
import './Checkout.css';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_KEY } from '../../config';

class Checkout extends Component {
  state = {
    total: 0,
    itemIds: [],
    itemNames: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
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

  onPayment = async (token) => {
    const order = {
      orderDate: new Date(Date.now()).toString(),
      date: Date.now(),
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      total: this.state.total,
      products: this.state.itemIds,
      token
    };

    try {
      const { data: { status } } = await axios.post(`${API_URI}/products/save`, order);
      if(status === 'success') {
        this.setState({
          name: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          email: '',
          total: '',
          itemIds: '',
        });
        localStorage.removeItem('cart');
        this.props.history.push('/Confirmation');
      }
    } catch(e) {
      alert('Something went wrong, please try again.');
    }
  };

  formType = (input, value) => {
    this.setState({ [input]: value });
  };

  // formSubmit = async (e) => {
  //   e.preventDefault();

  //   const order = {
  //     orderDate: new Date(Date.now()).toString(),
  //     name: e.target.name.value,
  //     address: e.target.address.value,
  //     city: e.target.city.value,
  //     state: e.target.state.value,
  //     zip: e.target.zip.value,
  //     email: e.target.email.value,
  //     total: this.state.total,
  //     products: this.state.itemIds,
  //   };
    
  //   try {
  //     const { data: { status } } = await axios.post(`${API_URI}/products/save`, order);
  //     if(status === 'success') {
  //       document.querySelector('#orderForm').reset();
  //     }
  //   } catch(e) {
  //     alert('Something went wrong, please try again.');
  //   }

  // };

  render() {
    return (
      <div className="container order-container">
        <h2>Your Order</h2>
        <hr/>

        <div className="shipping-form">
          <h4>Shipping address</h4>
          <div className="add-product-form" id="orderForm">
          {/* <form className="add-product-form" id="orderForm" onSubmit={this.formSubmit.bind(this)}> */}
            <div className="form-group">
              <input
                type="text" 
                name="name" 
                placeholder="Name" 
                className="form-control" 
                onChange={e => this.formType('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text" 
                name="address" 
                placeholder="Address" 
                className="form-control" 
                onChange={e => this.formType('address', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="city" 
                placeholder="City" 
                className="form-control" 
                onChange={e => this.formType('city', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="state" 
                placeholder="State" 
                className="form-control" 
                onChange={e => this.formType('state', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="zip" 
                placeholder="Zip code" 
                className="form-control" 
                onChange={e => this.formType('zip', e.target.value)}
              />
            </div>
            <div className="form-group">
              {/* <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="form-control" 
                onChange={e => this.formType('email', e.target.value)}
              /> */}
            </div>

              {/* <button ref={btn => this.inputElement = btn} className="btn btn-primary" type="submit">Place order</button> */}
              <StripeCheckout
                name={'Stones By Sue'}
                description={'For your order'}
                amount={this.state.total * 100}
                token={token => this.onPayment(token)}
                stripeKey={STRIPE_KEY}
              >
              <button className="btn btn-success">Place your order</button>
              </StripeCheckout>
          {/* </form> */}
          </div>
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
