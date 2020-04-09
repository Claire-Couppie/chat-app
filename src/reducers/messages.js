const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          date: action.date,
          content: action.content,
        }
      ]
    default:
      return state
  }
}

export default messages