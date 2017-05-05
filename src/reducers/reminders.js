import {
  ADD_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS
} from '../actions/types';
import { REHYDRATE } from 'redux-persist/constants';

export default (state = [], action) => {
  switch(action.type) {
    case REHYDRATE:
      return action.payload.reminders || [];

    case ADD_REMINDER:
      return [ ...state, action.payload ];

    case DELETE_REMINDER:
      return state.filter(reminder => reminder !== action.payload);

    case DELETE_ALL_REMINDERS:
      return [];

    default:
      return state;
  }
};
