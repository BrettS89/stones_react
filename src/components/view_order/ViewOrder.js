import React, { Component } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';
import './ViewOrder.css';

class ViewOrder extends Component {
  state = {
    order: {},
  };

  async componentDidMount() {
    const config = {
      headers: {
        // authorization: await localStorage.getItem('token'),
        authorization: localStorage.getItem('_id'),
      }
    };

    const { data } = await axios.get(`${API_URI}/orders/${this.props.match.params.id}`, config);
    this.setState({ order: data });
  }

  displayProducts = () => {
    if(this.state.order.products) {
      return this.state.order.products.map(product => {
        return (
          <div className="product-row">
            <img src={product.image} alt=""/>
            <span>${product.price}</span>
            <span>{product.name}</span>
          </div>
        );
      });
    }
  };

  render() {
    const { order } = this.state;
    return (
      <div className="container view-ordercontainer">
        <h2>Order {order._id}</h2>
        <hr/>
        <h5>{order.name}</h5>
        <h5>{order.email}</h5>
        <h5>{order.address}</h5>
        <h5>{order.state}</h5>
        <h5>{order.zip}</h5>

        <h4>Order placed: {order.orderDate}</h4>

        <h4>Total: ${order.total}</h4>
        {this.displayProducts()}
      </div>
    );
  }
}

export default ViewOrder;

//Email
//Address
//Products
//
