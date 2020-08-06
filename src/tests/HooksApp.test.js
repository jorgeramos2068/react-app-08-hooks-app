import React from 'react';
import {shallow} from 'enzyme';
import HooksApp from '../HooksApp';

describe('Tests for <HooksApp />', () => {
  test('Should display <HooksApp /> correctly', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
