import {
  ADD_REMINDER,
  DELETE_REMINDER
} from './types';

export const addReminder = (text) => {
  return {
    type: ADD_REMINDER,
    payload: {
      text,
      completed: false
    }
  };
};

export const deleteReminder = (reminder) => {
  return {
    type: DELETE_REMINDER,
    payload: reminder
  };
};
