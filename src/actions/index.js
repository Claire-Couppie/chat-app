export const ADD_OLD_MESSAGES = 'ADD_OLD_MESSAGES';
export const ADD_NEW_MESSAGES = 'ADD_NEW_MESSAGES';

export const addOldMessages = (messages) => ({
  type: 'ADD_OLD_MESSAGES',
  messages
})

export const addNewMessages = (messages) => ({
  type: 'ADD_NEW_MESSAGES',
  messages
})