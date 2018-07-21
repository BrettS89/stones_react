import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addProduct from './adminReducer'

const rootReducer = combineReducers({
  newProduct: addProduct
});

export default rootReducer;