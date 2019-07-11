import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

const TimesSlot = ({ time }) => (
  <div>
    {time.format('LT')}
  </div>
);

TimesSlot.propTypes = {
  time: PropTypes.instanceOf(moment).isRequired,
};

export default TimesSlot;
