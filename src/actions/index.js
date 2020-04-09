export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = ({content, date}) => ({
  type: 'ADD_MESSAGE',
  date,
  content
})