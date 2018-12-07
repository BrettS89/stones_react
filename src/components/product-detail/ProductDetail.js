import React, { Component } from 'react';
import './ProductDetail.css';

class ProductDetail extends Component{
  constructor(props){
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  async componentWillMount(){
    await this.props.getProductDetail(this.props.match.params.id);
    console.log(this.props);
  }

  addToCart(){
    this.props.addToCart(this.props.product.product);
  }

  render(){
    console.log(this.props);
    if(this.props.product.product){
      const { image, name, price, description } = this.props.product.product
      return(
        <div className="container prod-detail">
          <div className="prod-pic">
            <img src={image} alt=""/>
          </div>
          <h2>{name}</h2>
          <div className="descrip">
            <p>{description}</p>
          </div>
          <div className="price">
            <p>${price}</p>
          </div>        
          <button className="btn btn-primary" onClick={this.addToCart}><i className="fas fa-shopping-bag"></i> Add To Cart</button>
        </div>
      );
    }
    else{
      return(
        <div></div>
      )
    }
    
  }
}

export default ProductDetail;