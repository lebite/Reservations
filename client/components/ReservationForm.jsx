import React from 'react';
import PropTypes from 'prop-types';

import { RowWrapper } from '../theme/global';
import { Form } from '../theme/form';

import SizePicker from './pickers/SizePicker.jsx';
import DatePicker from './pickers/DatePicker.jsx';
import TimePicker from './pickers/TimePicker.jsx';

const ReservationForm = ({ restaurant }) => (
  <Form action={`/${restaurant.id}/reservations`} method="post">
    <SizePicker maxSize={restaurant.maxPartySize} />
    <RowWrapper>
      <DatePicker />
      <TimePicker />
    </RowWrapper>
    <br />
  </Form>
);

ReservationForm.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    openTime: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
    closeTime: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
    timeIntervals: PropTypes.number,
    maxSeating: PropTypes.number,
    maxPartySize: PropTypes.number,
  }).isRequired,
};

export default ReservationForm;
