import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import ListTimes from '../../client/components/actions/ListTimes.jsx';

describe('ListTimes component', () => {
  const sampleBookings = [moment({ hour: 12, minute: 0 }), moment({ hour: 12, minute: 30 })];

  it('renders with no errors when valid bookings array passed in', () => {
    const component = renderer.create(<ListTimes available={sampleBookings} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
