import React from 'react';
import {shallow} from 'enzyme';
import RefRealExample from '../../../components/04-useRef/RefRealExample';

describe('Tests in <RefRealExample />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RefRealExample />);
  });

  test('Should display <RefRealExample /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should display <MultipleCustomHooks /> component', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
