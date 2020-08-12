import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import testTodos from '../../fixtures/testTodos';

describe('Tests in <TodoList />', () => {
  let wrapper;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoList
        todos={testTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
  });

  test('Should display <TodoList /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should containts the correct number of <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length).toBe(testTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
  });
});
