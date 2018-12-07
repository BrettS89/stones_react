import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import ProductCard from '../product-card/ProductCard';

class Cart extends Component {
  state = {
    refresh: false,
  };

  displayCart = (display) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart) {
      let total = 0;
      const cartDisplay = cart.map(product => {
        total += product.price;
        return <ProductCard 
                product={product} 
                key={product.date} 
                navigateToProduct={this.navigateToProduct}
                removeItem={this.removeItem}
                cart={true}
              />
      });
      if(display === 'main') {
        return cartDisplay;
      }
      return total;
    }
    return <div>No items in cart</div>
  };

  removeItem = item => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = [];
    let deleted = false;
    cart.forEach(product => {
      if(deleted === true) {
        newCart.push(product);
      } else if(item === product._id) {
        deleted = true;
      } else if(item !== product._id) {
        newCart.push(product);
      }
    });
    console.log(newCart);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ refresh: true });
  };

  render() {
    return (
      <div className="container cart-container">
      <div className="cart-title"> 
        <h2>Your Cart</h2>
        <h4>total: ${this.displayCart()}</h4>
      </div>
        
        <hr />
        <div className="checkout-container">
          <Link to="/checkout"><button className="btn btn-primary">Checkout</button></Link>
        </div>
        <div className="products-display">
          {this.displayCart('main')}
          <div className="last-product"></div>
          <div className="last-product"></div>
        </div>
      </div>
    );
  }
}

export default Cart;
