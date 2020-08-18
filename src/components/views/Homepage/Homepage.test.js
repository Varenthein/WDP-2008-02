import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

jest.mock('../../common/SwipeAction/SwipeAction', () => 'SwipeAction');

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});
