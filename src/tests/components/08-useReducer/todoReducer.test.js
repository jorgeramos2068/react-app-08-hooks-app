import todoReducer from '../../../components/08-useReducer/todoReducer';
import testTodos from '../../fixtures/testTodos';

describe('Tests in todoReducer', () => {
  test('Should return default state', () => {
    const state = todoReducer(testTodos, {});
    expect(state).toEqual(testTodos);
  });

  test('Should add a TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Learn Java',
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    };
    const state = todoReducer(testTodos, action);
    expect(state.length).toBe(testTodos.length + 1);
  });

  test('Should delete a TODO', () => {
    const todoId = testTodos[0].id;
    const action = {
      type: 'delete',
      payload: todoId
    };
    const state = todoReducer(testTodos, action);
    expect(state.length).toBe(testTodos.length - 1);
    expect(state).toEqual([testTodos[1]]);
  });

  test('Should toggle a TODO', () => {
    const todoId = testTodos[0].id;
    const action = {
      type: 'toggle',
      payload: todoId
    };
    const state = todoReducer(testTodos, action);
    const todo = state.find(element => element.id === todoId);
    if (todo) {
      expect(todo.done).not.toBe(testTodos[0].done);
    }
    expect(state[1]).toEqual(testTodos[1]);
  });
});
