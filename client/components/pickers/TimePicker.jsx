import React from 'react';
import PropTypes from 'prop-types';

import { Label, TimeSelect } from '../../theme/form';
import timeUtils from '../../utils/timeUtils';

const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

const TimePicker = ({ openTime, closeTime, timeIntervals }) => (
  <div>
    <Label htmlFor="time">Time</Label>
    <TimeSelect id="time">
      {
        timeUtils.createFullTimesList({
          openTime,
          closeTime,
          timeIntervals,
        }).map(slot => (
          <option key={generateKey(slot.toString())}>
            {slot.format('LT')}
          </option>
        ))
      }
    </TimeSelect>
  </div>
);

TimePicker.propTypes = {
  openTime: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number,
  }).isRequired,
  closeTime: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number,
  }).isRequired,
  timeIntervals: PropTypes.number.isRequired,
};

export default TimePicker;
