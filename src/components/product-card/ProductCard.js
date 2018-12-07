import React, { Component } from 'react';

class ProductCard extends Component{
  constructor(props){
    super(props);

    this.getProductDetail = this.getProductDetail.bind(this);
  }

  getProductDetail(){
    this.props.navigateToProduct(this.props.product._id);
  }

  renderRemove = () => {
    if(this.props.cart) {
      return <div className="remove-link" onClick={() => this.removeItem()}>Remove from cart</div>
    }
  };

  removeItem = () => {
    this.props.removeItem(this.props.product._id);
  };

  render(){
    return(
      <div className="product-card">
        <img src={this.props.product.image} alt="" onClick={this.getProductDetail}/>
        <h4 onClick={this.getProductDetail}>{this.props.product.name}</h4>
        <div>{this.props.product.shortDescription}</div>
        <div>${this.props.product.price}</div>
        {this.renderRemove()}
      </div>
    );
  }
}

export default ProductCard;





