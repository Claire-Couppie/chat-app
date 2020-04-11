const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_MESSAGES':
      return [
        ...state,
        ...action.messages,
      ]
    case 'ADD_OLD_MESSAGES':
      return [
        ...action.messages,
        ...state
      ]
    default:
      return state;
  }
}

export default messages;