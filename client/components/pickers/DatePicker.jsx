import React from 'react';
import moment from 'moment';

import { Label, CalendarInput } from '../../theme/form';

const DatePicker = () => (
  <div>
    <Label htmlFor="month">Date</Label>
    <CalendarInput
      type="date"
      name="date"
      id="date"
      placeholder={moment().calendar()}
    />
  </div>
);

export default DatePicker;
