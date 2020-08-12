import React from 'react';
import {mount} from 'enzyme';
import AppRouter from '../../../components/09-useContext/AppRouter';
import UserContext from '../../../components/09-useContext/UserContext';

describe('Tests in <AppRouter />', () => {
  let wrapper;
  const user = {
    id: 1,
    name: 'Batman'
  }

  beforeEach(() => {
    wrapper = mount(
      <UserContext.Provider value={{
        user: user
      }}>
        <AppRouter />
      </UserContext.Provider>
    );
  });

  test('Should display <AppRouter /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
