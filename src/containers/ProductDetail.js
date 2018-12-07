import { connect } from 'react-redux';
import ProductDetail from '../components/product-detail/ProductDetail';
import { getProductDetail } from '../store/actions/getProductDetail';
import { addToCart } from '../store/actions/addToCart';

function mapStateToProps(state){
  return{
    product: state.product
  }
}


export default connect(mapStateToProps, { getProductDetail, addToCart })(ProductDetail);