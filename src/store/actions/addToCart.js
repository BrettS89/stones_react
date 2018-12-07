import { ADD_TO_CART } from './action_types';
import { addProduct } from '../../services/addToCart';

export function addToCart(product){
  const status = addProduct(product);

  return{
    type: ADD_TO_CART,
    payload: status
  }
}