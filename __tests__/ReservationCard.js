import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import ReservationCard from '../src/components/ReservationCard';
import LabelValue from '../src/components/LabelValue';

describe('ReservationCard', () => {
  it('renders correctly with null props', () => {
    const wrapper = shallow(<ReservationCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with reservation', () => {
    const reservation = {
      name: 'Test Name',
      hotelName: 'Test Hotel Name',
      arrivalDate: '03/01/2019',
      departureDate: '03/02/2019',
    };
    const wrapper = shallow(<ReservationCard reservation={reservation} />);
    const TextList = wrapper.find(Text);
    const LabelValueList = wrapper.find(LabelValue);

    expect(TextList).toHaveLength(2);
    expect(LabelValueList).toHaveLength(2);

    expect(
      TextList.at(0)
        .children()
        .text(),
    ).toEqual('Test Name');

    expect(
      TextList.at(1)
        .children()
        .text(),
    ).toEqual('Test Hotel Name');

    expect(LabelValueList.at(0).prop('label')).toEqual('Arrival');
    expect(LabelValueList.at(1).prop('label')).toEqual('Departure');
    expect(LabelValueList.at(0).prop('value')).toEqual('Friday, March 1st 2019');
    expect(LabelValueList.at(1).prop('value')).toEqual('Saturday, March 2nd 2019');

    expect(wrapper).toMatchSnapshot();
  });
});
