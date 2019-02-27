import React from 'react';
import { shallow } from 'enzyme';
import ErrorIndicator from '../src/components/ErrorIndicator';

describe('ErrorIndicator', () => {
  it('renders correctly with null props', () => {
    const wrapper = shallow(<ErrorIndicator />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const wrapper = shallow(<ErrorIndicator error="Test Error" />);
    expect(wrapper).toMatchSnapshot();
  });
});
