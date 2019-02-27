import 'react-native';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import wait from 'waait';
import ReservationList from '../src/screens/ReservationList';
import mocks from '../fixtures/mocks';

describe('ReservationList', () => {
  it('Renders properly', async () => {
    const wrapper = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ReservationList />
      </MockedProvider>,
    );

    await wait(100);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
