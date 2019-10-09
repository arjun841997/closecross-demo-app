import {
  GET_LISTING
} from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTING:
      return {
        ...state,
        items: action.payload        
      };
    default:
      return state;
  }
}
