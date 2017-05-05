import {
  ADD_REMINDER
} from './types';

export const addReminder = (text) => {
  if (text) {
    return { type: ADD_REMINDER, payload: text };
  }
};
