import React from 'react';
import { shallow } from 'enzyme';
import LabelValue from '../src/components/LabelValue';

describe('LabelValue', () => {
  it('renders correctly with null props', () => {
    const wrapper = shallow(<LabelValue />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const wrapper = shallow(<LabelValue label="Test Label" value="Test Value" />);
    expect(wrapper).toMatchSnapshot();
  });
});
