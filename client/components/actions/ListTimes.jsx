import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TimeSlot from '../pickers/TimeSlot.jsx';

const ListTimes = ({ available }) => (
  <div>
    <h3>Select a time:</h3>
    {available.map(time => (<TimeSlot key={time.toISOString()} time={time} />))}
  </div>
);

ListTimes.propTypes = {
  available: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
};

export default ListTimes;
