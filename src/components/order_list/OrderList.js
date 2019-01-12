import React, { Component } from 'react';
import axios from 'axios';
import './OrderList.css';
import { API_URI } from '../../config';

class OrderList extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    const config = {
      headers: {
        // authorization: await localStorage.getItem('token'),
        authorization: localStorage.getItem('_id'),
      }
    };
  
    const { data } = await axios.get(`${API_URI}/orders/get`, config);
    this.setState({ orders: data });
  }

  displayOrders = () => {
    return this.state.orders.map(order => {
      return (
        <div key={order._id} className="order-card" onClick={() => this.props.history.push(`/vieworder/${order._id}`)}>
          <span>{order.accepted ? 'Accepted' : 'New'}</span>
          <span>{order.orderDate}</span>
          <span>{order.products.length} items</span>
          <span>Total: ${order.total}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container orderlist-container">
        <h2>Order List</h2>
        <hr/>
        {this.displayOrders()}
      </div>
    );
  }
}

export default OrderList;
