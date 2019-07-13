import React from 'react';
import PropTypes from 'prop-types';

import { Form, Select, CalendarInput, TimeInput } from '../theme/theme';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  createPartySizeDropdown(max) {
    var options = [];
    for (let i = 1; i <= max; i+= 1) {
      options.push((<option>{i}</option>));
    }
    return options;
  }

  render() {
    const { id, maxPartySize } = this.props.restaurant;
    return (
      <Form action={`/${id}/reservations`} method="post">
        <Select>
          {this.createPartySizeDropdown(maxPartySize)}
        </Select>
        <CalendarInput type="month" name="month" id="month" />
        <TimeInput type="time" name="time" id="time" />
      </Form>
    );
  }
}

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
