import React from 'react';
import {shallow} from 'enzyme';
import TodoForm from '../../../components/08-useReducer/TodoForm';

describe('Tests in <TodoForm />', () => {
  let wrapper;
  const handleAddTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<TodoForm handleAddTodo={handleAddTodo} />);
  });

  test('Should display <TodoForm /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should not call handleAddTodo function', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    const event = {
      preventDefault() {}
    };
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Should call handleAddTodo function', () => {
    const input = wrapper.find('input');
    const inputValue = 'Test value';
    const inputEvent = {
      target: {
        value: inputValue,
        name: 'description'
      }
    };
    input.simulate('change', inputEvent);
    const formEvent = {
      preventDefault() {}
    };
    wrapper.find('form').simulate('submit', formEvent);
    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: inputValue,
      done: false
    });
    expect(input.prop('value')).toBe('');
  });

});
