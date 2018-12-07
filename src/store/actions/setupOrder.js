import { SETUP_ORDER } from './action_types';

export function setupOrder(payload) {
  return {
    type: SETUP_ORDER,
    payload,
  };
}
