import React from 'react';
import PropTypes from 'prop-types';

import { Label, Select } from '../../theme/form';
import timeUtils from '../../utils/timeUtils';

const TimePicker = ({ openTime, closeTime, timeIntervals }) => (
  <div>
    <Label htmlFor="time">Time</Label>
    <Select id="time">
      {
        timeUtils.createTimeslots({
          openTime,
          closeTime,
          timeIntervals,
        }, openTime).map(slot => (
          <option key={`timeslot_${slot.toISOString()}`}>
            {slot.format('LT')}
          </option>
        ))
      }
    </Select>
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
