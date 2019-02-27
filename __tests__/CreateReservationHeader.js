import React from 'react';
import { shallow } from 'enzyme';
import CreateReservationHeader from '../src/components/CreateReservationHeader';

describe('CreateReservationHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CreateReservationHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
