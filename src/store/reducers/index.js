import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addProduct from './adminReducer'
import getProducts from './productsReducer';

const rootReducer = combineReducers({
  newProduct: addProduct,
  products: getProducts
});

export default rootReducer;