import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TimeSlot from './TimeSlot.jsx';

const TimesList = ({ available }) => (
  <div>
    {available.map(time => (<TimeSlot time={time} />))}
  </div>
);

TimesList.propTypes = {
  available: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
};

export default TimesList;
