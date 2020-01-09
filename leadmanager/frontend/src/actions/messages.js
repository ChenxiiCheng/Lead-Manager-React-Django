import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGE: 当点击Delete按钮时候删除了lead并且弹框提示删除成功
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
