import React from 'react';
import renderer from 'react-test-renderer';

import ReservationForm from '../../client/components/ReservationForm';

describe('ReservationForm component', () => {
  const sampleRestaurant = {
    openTime: {
      hour: 0,
      minute: 0,
    },
    closeTime: {
      hour: 0,
      minute: 0,
    },
    timeIntervals: 0,
    maxSeating: 0,
    maxPartySize: 0,
  };

  it('renders with no errors when valid restaurant passed in', () => {
    const component = renderer.create(<ReservationForm restaurant={sampleRestaurant} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
