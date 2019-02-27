import React from 'react';
import { shallow } from 'enzyme';
import ReservationListHeader from '../src/components/ReservationListHeader';

describe('ReservationListHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ReservationListHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
