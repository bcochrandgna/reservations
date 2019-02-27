import React from 'react';
import { shallow } from 'enzyme';
import CreateReservation from '../src/screens/CreateReservation';

describe('CreateReservation', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CreateReservation />);
    expect(wrapper).toMatchSnapshot();
  });
});
