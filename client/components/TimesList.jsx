import React from 'react';
import PropTypes from 'prop-types';

import timeUtils from '../utils/timeUtils';

class TimesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: props.bookings,
      timesList: [],
    };
  }

  componentDidMount() {
    const { bookings } = this.state;
    this.setState({
      timesList: timeUtils.createListFromBookings(bookings),
    });
  }

  render() {
    const { timesList } = this.state;
    return (
      <div>
        {JSON.stringify(timesList)}
      </div>
    );
  }
}

TimesList.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.shape({
    booking_time: PropTypes.any,
    party_qty: PropTypes.number,
  })).isRequired,
};

export default TimesList;
