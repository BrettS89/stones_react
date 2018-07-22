import React, { Component } from 'react';
import './ShowProducts.css';
import ProductCard from '../product-card/ProductCard';

class ShowProducts extends Component{

  componentWillMount(){
    this.props.getProducts();
  }

  render(){
    console.log(this.props.match.path.split('/')[2]);
    let productsDisplay = [];    
    if(this.props.products.products){
      console.log(this.props.products.products);
      productsDisplay = this.props.products.products.map(product => {
        return <ProductCard product={product} key={product._id}/>
      });
    }
    return(
      <div className="products container">

        <h2>Gemstone Necklaces</h2>
        <hr />
        <div className="products-display">
          {productsDisplay}
        </div>
      </div>
    );
  }
}

export default ShowProducts;