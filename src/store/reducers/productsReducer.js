import { 
  GET_PRODUCTS, 
  GET_PRODUCTS_BY_TYPE, 
  GET_PRODUCT_DETAIL, 
  ADD_TO_CART, 
  SETUP_ORDER 
} from '../actions/action_types';

export function getProducts(state = {}, action){
  switch(action.type){
    case GET_PRODUCTS:
      return{
        products: action.payload
      }
    default:
      return state;  
  }
}

export function getProductsByType(state = {}, action){
  switch(action.type){
    case GET_PRODUCTS_BY_TYPE:
      return{
        products: action.payload
      }
    default:
      return state;  
  }
}

export function getProductDetail(state = {}, { type, payload }){
  switch(type){
    case GET_PRODUCT_DETAIL:
      return{
        product: payload
      }
    default:
      return state;  
  }
}

export function addProductToCart(state = {}, { type, payload }){
  switch(type){
    case ADD_TO_CART:
      return{
        added: payload
      }
    default:
      return state;  
  }
}

export function setupOrder(state = {}, { type, payload }) {
  switch(type) {
    case SETUP_ORDER:
      return {
        ...payload
      };
    default:
      return state;
  }
}
