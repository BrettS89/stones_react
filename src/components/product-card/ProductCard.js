import React, { Component } from 'react';

class ProductCard extends Component{
  render(){
    return(
      <div className="product-card">
        <img src="https://i.imgur.com/8WmES4U.jpg" alt=""/>
        <h4>Pink Gemstone Necklace</h4>
        <div>This is a sample product description of the Necklace</div>
        <div>$55</div>
      </div>
    );
  }
}

export default ProductCard;





