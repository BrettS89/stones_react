import { connect } from 'react-redux';
import ShowProducts from '../components/show_products/ShowProducts';
import { getProductsByType } from '../store/actions/products';

function mapStateToProps(state){
  return{
    products: state.products
  }
}

export default connect(mapStateToProps, { getProductsByType })(ShowProducts);