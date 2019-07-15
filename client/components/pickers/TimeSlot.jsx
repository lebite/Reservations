import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { TimeButton } from '../../theme/buttons';

const TimesSlot = ({ time }) => (
  <TimeButton>
    {time.format('LT')}
  </TimeButton>
);

TimesSlot.propTypes = {
  time: PropTypes.instanceOf(moment).isRequired,
};

export default TimesSlot;
