import React from 'react';

import ReservationForm from './ReservationForm.jsx';
import TimesList from './TimesList.jsx';
import { Wrapper, GlobalStyles } from '../theme/theme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
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
      },
      bookings: [{
        booking_time: null,
        party_qty: 0,
      }],
    };
  }

  componentDidMount() {
    // make API calls
  }

  render() {
    const { restaurant } = this.state;
    const { bookings } = this.state;
    return (
      <div>
        <GlobalStyles />
        <Wrapper>
          <h1>Make a reservation</h1>
          <ReservationForm restaurant={restaurant} />
          <TimesList bookings={bookings} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
