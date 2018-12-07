import { GET_PRODUCT_DETAIL } from './action_types';
import { API_URI } from '../../config';
import axios from 'axios';

export async function getProductDetail(id){
  const request = await axios.get(`${API_URI}/products/id/${id}`);

  return{
    type: GET_PRODUCT_DETAIL,
    payload: request.data
  }
}