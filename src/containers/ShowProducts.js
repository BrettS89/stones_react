import { connect } from 'react-redux';
import ShowProducts from '../components/show_products/ShowProducts';
import { getProducts } from '../store/actions/products';

function mapStateToProps(state){
  return{
    products: state.products
  }
}

export default connect(mapStateToProps, { getProducts })(ShowProducts);