import { ADD_PRODUCT } from '../actions/action_types';

export default function addProduct(state = {}, action){
  switch(action.type){
    case ADD_PRODUCT:
      return{
        newProduct: action.payload
      }
    default:
      return state;  
  }
}