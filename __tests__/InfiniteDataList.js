import React from 'react';
import { shallow } from 'enzyme';
import InfiniteDataList from '../src/components/InfiniteDataList';
import reservations from '../fixtures/reservations';
import ReservationCard from '../src/components/ReservationCard';

const renderItem = item => <ReservationCard reservation={item} />;

describe('InfiniteDataList', () => {
  it('renders correctly with null props', () => {
    const wrapper = shallow(<InfiniteDataList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const wrapper = shallow(
      <InfiniteDataList data={reservations} networkStatus={1} renderItem={renderItem} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
