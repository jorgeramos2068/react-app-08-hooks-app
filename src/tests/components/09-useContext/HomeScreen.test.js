import React from 'react';
import {mount} from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import UserContext from '../../../components/09-useContext/UserContext';

describe('Tests in <HomeScreen />', () => {
  let wrapper;
  const user = {
    name: 'Batman',
    email: 'batman@test.com'
  }

  beforeEach(() => {
    wrapper = mount(
      <UserContext.Provider value={{
        user: user
      }}>
        <HomeScreen />
      </UserContext.Provider>
    );
  });

  test('Should display <HomeScreen /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
