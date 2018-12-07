import { GET_PRODUCTS, GET_PRODUCTS_BY_TYPE } from './action_types';
import { API_URI } from '../../config';
import axios from 'axios';

export async function getProducts(){
  const request = await axios.get(`${API_URI}/products/all`);

  return{
    type: GET_PRODUCTS,
    payload: request.data
  }
} 

export async function getProductsByType(type){
  const request = await axios.get(`${API_URI}/products/${type}`);

  return{
    type: GET_PRODUCTS_BY_TYPE,
    payload: request.data
  }
}