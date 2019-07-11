import React from 'react';
import renderer from 'react-test-renderer';

import axios from 'axios';
import App from '../../client/components/App';

jest.mock('axios');

describe('App component', () => {
  it('renders title, form, times, and stats sections', () => {
    const reservationsResponse = {
      data: {
        restaurant_id: 1,
        restaurant_information: {
          restaurant_open_time: {
            hour: 8,
            minute: 0,
          },
          restaurant_close_time: {
            hour: 6,
            minute: 30,
          },
          time_intervals: 30,
          max_seating: 10,
          max_party_size: 5,
          max_time_range: 7,
        },
        bookings: [
          {
            booking_time: new Date(),
            party_qty: 2,
            restaurant_id: 1,
          },
        ],
      },
    };
    const countResponse = {
      data: { bookings_count: 1 },
    };
    axios.get
      .mockResolvedValue(reservationsResponse)
      .mockResolvedValueOnce(reservationsResponse)
      .mockResolvedValueOnce(countResponse);

    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json.children[0].children).toHaveLength(4);
    expect(json).toMatchSnapshot();
  });
});
