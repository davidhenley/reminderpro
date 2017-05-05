import {
  ADD_REMINDER,
  DELETE_REMINDER
} from './types';

export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    payload: {
      text,
      dueDate
    }
  };
};

export const deleteReminder = (reminder) => {
  return {
    type: DELETE_REMINDER,
    payload: reminder
  };
};
