import React from 'react';
import {shallow, mount} from 'enzyme';
import {act} from '@testing-library/react';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import testTodos from '../../fixtures/testTodos';

describe('Tests in <TodoApp />', () => {
  let wrapper;
  Storage.prototype.setItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<TodoApp />);
  });

  test('Should display <TodoApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should add a TODO', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoForm').prop('handleAddTodo')(testTodos[0]);
      wrapper.find('TodoForm').prop('handleAddTodo')(testTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('Should delete a TODO', () => {
    wrapper.find('TodoForm').prop('handleAddTodo')(testTodos[0]);
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');
    wrapper.find('TodoList').prop('handleDelete')(testTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
  });
});
