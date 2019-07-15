import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TimeSlot from '../pickers/TimeSlot.jsx';

import { SectionTitle } from '../../theme/global';

const ListTimes = ({ available }) => (
  <div>
    <div>
      <SectionTitle>Select a time:</SectionTitle>
    </div>
    {available.map(time => (<TimeSlot key={time.toISOString()} time={time} />))}
  </div>
);

ListTimes.propTypes = {
  available: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
};

export default ListTimes;
