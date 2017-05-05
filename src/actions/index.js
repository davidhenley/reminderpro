import {
  ADD_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS
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

export const deleteAllReminders = () => {
  return { type: DELETE_ALL_REMINDERS };
}
