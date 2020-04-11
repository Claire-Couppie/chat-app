const currentPage = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return state + 1;
    default:
      return state;
  }
}

export default currentPage;