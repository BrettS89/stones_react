import React, { Component } from 'react';
import './ShowProducts.css';
import ProductCard from '../product-card/ProductCard';

class ShowProducts extends Component{
  constructor(props){
    super(props);

    this.state = {
      type: false,
      title: ''
    }

    this.navigateToProduct = this.navigateToProduct.bind(this);
  }

  async componentWillReceiveProps(nextProps){
    if(this.state.type === nextProps.match.path.split('/')[2]){
      return true
    } else {
      await this.setState({ type: nextProps.match.path.split('/')[2] });
      this.props.getProductsByType(this.state.type);
    }    
  }

  async componentDidMount(){
    await this.setState({ type: this.props.match.path.split('/')[2] });
    this.props.getProductsByType(this.state.type);
  }

  navigateToProduct(productId){
    this.props.history.push(`/products/${productId}`);
  }

  renderTitle(){
    if(this.state.type === 'necklaces'){
      return <h2>Necklaces</h2>
    }
    if(this.state.type === 'necklace-sets'){
      return <h2>Necklace Sets</h2>
    }
    if(this.state.type === 'crystal-necklaces'){
      return <h2>Crystal Necklaces</h2>
    }
  }

  render(){
    let productsDisplay = [];    
    if(this.props.products.products){
      productsDisplay = this.props.products.products.map(product => {
        return <ProductCard product={product} key={product._id} navigateToProduct={this.navigateToProduct}/>
      });
    }
    return(
      <div className="products container">

        {this.renderTitle()}
        <hr />
        <div className="products-display">
          {productsDisplay}
          <div className="last-product"></div>
          <div className="last-product"></div>
        </div>
      </div>
    );
  }
}

export default ShowProducts;