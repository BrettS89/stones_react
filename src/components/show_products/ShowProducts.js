import React, { Component } from 'react';
import './ShowProducts.css';
import ProductCard from '../product-card/ProductCard';

class ShowProducts extends Component{

  componentWillMount(){
    this.props.getProducts();
  }

  render(){    
    if(this.props.products){
      console.log(this.props.products);
    }
    return(
      <div className="products container">

        <h2>Gemstone Necklaces</h2>
        <hr />

        <div className="products-display">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        </div>
      </div>
    );
  }
}

export default ShowProducts;