import React from 'react';
import renderer from 'react-test-renderer';

import ReservationForm from '../../client/components/ReservationForm';

describe('ReservationForm component', () => {
  const sampleRestaurant = {
    open_time: {
      hour: 0,
      minute: 0,
    },
    close_time: {
      hour: 0,
      minute: 0,
    },
    time_intervals: 0,
    max_seating: 0,
    max_party_size: 0,
  };

  it('renders with no errors when valid restaurant passed in', () => {
    const component = renderer.create(<ReservationForm restaurant={sampleRestaurant} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
