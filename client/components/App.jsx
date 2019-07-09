import React from 'react';

import ReservationForm from './ReservationForm.jsx';
import TimesList from './TimesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      bookings: [],
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
        <h1>Make a reservation</h1>
        <ReservationForm restaurant={restaurant} />
        <TimesList bookings={bookings} />
      </div>
    );
  }
}

export default App;
