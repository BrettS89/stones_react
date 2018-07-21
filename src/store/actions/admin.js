import axios from 'axios';
import { API_URI } from '../../config';
import { ADD_PRODUCT } from './action_types';

export async function addProduct(product) {
  const request = await axios.post(`${API_URI}/admin/addproduct`, product);

  return {
    type: ADD_PRODUCT,
    payload: request.data
  }
}