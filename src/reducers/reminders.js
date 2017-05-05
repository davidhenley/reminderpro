import {
  ADD_REMINDER
} from '../actions/types';

export default (state = [], action) => {
  console.log(action);

  switch(action.type) {
    case ADD_REMINDER:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};
