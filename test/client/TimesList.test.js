import React from 'react';
import renderer from 'react-test-renderer';

import TimesList from '../../client/components/TimesList';

describe('TimesList component', () => {
  const sampleBookings = [{
    booking_time: null,
    party_qty: 0,
  }];

  it('renders with no errors when valid bookings array passed in', () => {
    const component = renderer.create(<TimesList bookings={sampleBookings} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
