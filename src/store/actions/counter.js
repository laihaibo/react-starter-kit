import { ADD, MINUS } from '../constants/counter';

export const add = () => ({ type: ADD });
export const minus = () => ({ type: MINUS });

// 异步action
export const asyncAdd = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
};
