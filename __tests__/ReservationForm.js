import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ReservationForm from '../src/components/ReservationForm';

jest.mock('DatePickerIOS', () => 'DatePickerIOS');

const handleUpdate = jest.fn();

describe('ReservationForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ReservationForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('submits properly', () => {
    const instance = renderer.create(<ReservationForm onUpdate={handleUpdate} />).getInstance();
    instance.handleTextChange('name', 'Name 1');
    instance.handleTextChange('hotelName', 'Hotel Name 1');
    instance.handleTextChange('arrivalDate', '03/01/2019');
    instance.handleTextChange('departureDate', '03/03/2019');
    instance.handleSavePress();

    expect(handleUpdate).toHaveBeenCalled();
    expect(handleUpdate).toHaveBeenCalledWith({
      id: null,
      name: 'Name 1',
      hotelName: 'Hotel Name 1',
      arrivalDate: '03/01/2019',
      departureDate: '03/03/2019',
    });
  });
});
