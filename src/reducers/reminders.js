import {
  ADD_REMINDER,
  DELETE_REMINDER
} from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_REMINDER:
      return [ ...state, action.payload ];

    case DELETE_REMINDER:
      return state.filter(reminder => reminder !== action.payload);

    default:
      return state;
  }
};
 
