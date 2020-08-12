import React from 'react';
import {mount} from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import UserContext from '../../../components/09-useContext/UserContext';

describe('Tests in <LoginScreen />', () => {
  let wrapper;
  const setUser = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <UserContext.Provider value={{
        setUser: setUser
      }}>
        <LoginScreen />
      </UserContext.Provider>
    );
  });

  test('Should display <LoginScreen /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should call setUser function', () => {
    const testUser = {
      id: 123,
      name: 'Superman'
    };
    wrapper.find('button').simulate('click');
    expect(setUser).toHaveBeenCalledWith(testUser);
  });
});
