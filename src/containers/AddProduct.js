import { connect } from 'react-redux';
import AddProduct from '../components/add_product/AddProduct';
import { addProduct } from '../store/actions/admin';

function mapStateToProps(state){
  return {
    state: state.newProduct
  }
}

export default connect(mapStateToProps, { addProduct })(AddProduct);