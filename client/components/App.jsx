import React from 'react';
import axios from 'axios';

import ReservationForm from './ReservationForm.jsx';
import TimesList from './TimesList.jsx';
import { Wrapper, GlobalStyles } from '../theme/theme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: Math.floor(Math.random() * 100),
      restaurant: {
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
      },
      bookings: [{
        bookingTime: null,
        partyQty: 0,
      }],
      bookingsToday: 0,
    };
  }

  componentDidMount() {
    const { restaurantId } = this.state;

    axios.get(`/${restaurantId}/reservations`)
      .then((response) => {
        const { restaurant_information, bookings } = response.data;

        this.setState({
          restaurant: {
            openTime: restaurant_information.open_time,
            closeTime: restaurant_information.close_time,
            timeIntervals: restaurant_information.time_intervals,
            maxSeating: restaurant_information.max_seating,
            maxPartySize: restaurant_information.max_party_size,
            maxTimeRange: restaurant_information.max_time_range,
          },
          bookings: bookings.map(booking => ({
            bookingTime: booking.booking_time,
            partyQty: booking.party_qty,
          })),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`/${restaurantId}/reservations/count`)
      .then((response) => {
        this.setState({
          bookingsToday: response.data.bookings_count,
        });
      });
  }

  render() {
    const { restaurant, bookings, bookingsToday } = this.state;
    return (
      <div>
        <GlobalStyles />
        <Wrapper>
          <h1>Make a reservation</h1>
          <ReservationForm restaurant={restaurant} />
          <TimesList bookings={bookings} />
          <span>{`Booked ${bookingsToday} times today`}</span>
        </Wrapper>
      </div>
    );
  }
}

export default App;
