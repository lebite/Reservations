import React from 'react';

import { Label, TimeInput } from '../../theme/form';

const TimePicker = () => (
  <div>
    <Label htmlFor="month">Time</Label>
    <TimeInput type="time" name="time" id="time" />
  </div>
);

export default TimePicker;
