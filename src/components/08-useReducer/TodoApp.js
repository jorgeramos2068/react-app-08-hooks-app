import React, {useReducer, useEffect} from 'react';
import todoReducer from './todoReducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    if (isNaN(todoId)) {
      return;
    }
    const action = {
      type: 'delete',
      payload: todoId
    };
    dispatch(action);
  }

  const handleToggle = (todoId) => {
    if (isNaN(todoId)) {
      return;
    }
    const action = {
      type: 'toggle',
      payload: todoId
    };
    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoForm
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
