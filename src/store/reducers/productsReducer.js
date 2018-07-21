import { GET_PRODUCTS } from '../actions/action_types';

export default function getProducts(state = {}, action){
  switch(action.type){
    case GET_PRODUCTS:
      return{
        products: action.payload
      }
    default:
      return state;  
  }
}