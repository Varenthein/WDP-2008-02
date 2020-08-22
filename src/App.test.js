import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./components/common/SwipeAction/SwipeAction', () => 'SwipeAction');

it('renders without crashing', () => {
  shallow(<App />);
});
