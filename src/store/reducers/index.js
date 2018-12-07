import { combineReducers } from 'redux';
import addProduct from './adminReducer'
import { getProducts, getProductsByType, getProductDetail, addProductToCart, setupOrder } from './productsReducer';

const rootReducer = combineReducers({
  newProduct: addProduct,
  allProducts: getProducts,
  products: getProductsByType,
  product: getProductDetail,
  productAdded: addProductToCart,
  preOrder: setupOrder,
});

export default rootReducer;
