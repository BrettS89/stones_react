import React, { Component } from 'react';

class ProductCard extends Component{
  render(){
    return(
      <div className="product-card">
        <img src={this.props.product.image} alt=""/>
        <h4>{this.props.product.name}</h4>
        <div>{this.props.product.shortDescription}</div>
        <div>${this.props.product.price}</div>
      </div>
    );
  }
}

export default ProductCard;





