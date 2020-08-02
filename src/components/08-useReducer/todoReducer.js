const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    default:
      return state;
  }
  return state;
};

export default todoReducer;
