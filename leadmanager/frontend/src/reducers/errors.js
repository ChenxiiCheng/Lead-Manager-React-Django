import { GET_ERRORS } from '../actions/types';

const initialState = {
  msg: {},
  status: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: payload.msg,
        status: payload.status
      };
    default:
      return state;
  }
}
