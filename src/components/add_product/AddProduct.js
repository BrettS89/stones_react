import React, { Component } from 'react';
import './AddProduct.css';
import { connect } from 'react-redux';

class AddProduct extends Component {
  constructor(props){
    super(props);

    this.sate = {

    }
  }

  handleSubmit(event){
    event.preventDefault();
    const product = {
      name: event.target.name.value,
      type: event.target.type.value,
      price: Number(event.target.price.value),
      image: event.target.image.value,
      shortDescription: event.target.shortDescription.value,
      description: event.target.description.value
    }
  }

  render() {
    return (
      <div className="add-product-container">
        <h2>Add a product</h2>
        <form className="add-product-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" className="form-control"/>
          </div>
          <div className="form-group">
            <select name="type" id="type">
              <option value="Pearl Necklace">Pearl Necklace</option>
              <option value="Crystal Necklace">Crystal Necklace</option>
              <option value="Gemstone Necklace">Gemstone Necklace</option>
              <option value="Metal Necklace">Metal Necklace</option>
              <option value="Sea Glass Jewelry">Sea Glass Jewelry</option>
              
            </select>
          </div>
          <div className="form-group">
            <input type="number" name="price" placeholder="Price" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" name="image" placeholder="Image" className="form-control"/>
          </div>
          <div className="form-group">
            <textarea name="shortDescription" id="shortDescription" placeholder="Short description" rows="2" className="form-control" />
          </div>
          <div className="form-group">
            <textarea name="description" id="description" rows="7" placeholder="Description" className="form-control" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Add Product</button>
          </div>          
        </form>
      </div>
    );
  }
}

export default AddProduct;