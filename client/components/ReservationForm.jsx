import React from 'react';
import PropTypes from 'prop-types';

const ReservationForm = ({ restaurant }) => (
  <div>
    {restaurant}
  </div>
);

ReservationForm.propTypes = {
  restaurant: PropTypes.shape({
    open_time: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
    close_time: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
    time_intervals: PropTypes.number,
    max_seating: PropTypes.number,
    max_party_size: PropTypes.number,
  }).isRequired,
};

export default ReservationForm;
