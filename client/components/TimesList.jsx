import React from 'react';
import PropTypes from 'prop-types';

const TimesList = ({ bookings }) => (
  <div>
    {JSON.stringify(bookings)}
  </div>
);

TimesList.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.shape({
    booking_time: PropTypes.any,
    party_qty: PropTypes.number,
  })).isRequired,
};

export default TimesList;
