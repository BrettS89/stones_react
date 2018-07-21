import { GET_PRODUCTS } from './action_types';
import { API_URI } from '../../config';
import axios from 'axios';

export async function getProducts(){
  const request = await axios.get(`${API_URI}/products/all`);

  return{
    type: GET_PRODUCTS,
    payload: request.data
  }
} 