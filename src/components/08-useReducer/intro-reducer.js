// Define initial state
const initialState = [{
  id: 1,
  todo: 'Play guitar',
  done: false
}];

// Define reducer
const todoReducer = (state = initialState, action) => {
  // Action to update the state
  if (action?.type === 'add') {
    return [...state, action.payload];
  }
  // It always return a state
  return state;
};

// Initialize state
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Play violin',
  done: false
};

// Action
const addTodoAction = {
  type: 'add',
  payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
