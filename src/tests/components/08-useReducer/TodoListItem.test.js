import React from 'react';
import {shallow} from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import testTodos from '../../fixtures/testTodos';

describe('Tests in <TodoListItem />', () => {
  let wrapper;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoListItem
        todo={testTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
  });

  test('Should display <TodoListItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should call handleDelete function', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(testTodos[0].id);
  });

  test('Should call handleToggle function', () => {
    const p = wrapper.find('p');
    p.simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(testTodos[0].id);
  });

  test('Should show text correctly', () => {
    const text = wrapper.find('p').text().trim();
    const expectedText = `${testTodos[0].id}. ${testTodos[0].desc}`;
    expect(text).toBe(expectedText);
  });

  test('Should show "complete" class when "done" is true', () => {
    const todo = testTodos[0];
    todo.done = true;
    const internalWrapper = shallow(
      <TodoListItem
        todo={todo}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    const p = internalWrapper.find('p');
    expect(p.hasClass('complete')).toBe(true);
  });
});
