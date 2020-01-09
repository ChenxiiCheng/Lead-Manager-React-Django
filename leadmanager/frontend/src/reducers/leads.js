import { GET_LEADS, DELETE_LEADS, ADD_LEAD } from '../actions/types.js';

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: payload
      };
    case DELETE_LEADS:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== payload)
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, payload]
      };
    default:
      return state;
  }
}
