import React from 'react';
import styled from 'styled-components';

import ReservationForm from './ReservationForm.jsx';
import TimesList from './TimesList.jsx';

const Wrapper = styled.section`
  width: 320px;
  box-shadow: 0 2px 8px rgba(153, 153, 153, .4);
`;

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
      <Wrapper>
        <h1>Make a reservation</h1>
        <ReservationForm restaurant={restaurant} />
        <TimesList bookings={bookings} />
      </Wrapper>
    );
  }
}

export default App;
