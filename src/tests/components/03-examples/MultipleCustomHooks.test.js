import React from 'react';
import {shallow} from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../../hooks/useFetch';
import useCounter from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests for <MultipleCustomHooks />', () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  });

  test('Should display <MultipleCustomHooks /> correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show remote data', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Test author',
        quote: 'Test quote'
      }],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Test quote');
    expect(wrapper.find('footer').text().trim()).toBe('Test author');
  });
});
