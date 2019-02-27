import React from 'react';
import { shallow } from 'enzyme';
import ReservationSortButton from '../src/components/ReservationSortButton';

describe('ReservationSortButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ReservationSortButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
