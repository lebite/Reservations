import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Button } from '../theme/theme';

const TimesSlot = ({ time }) => (
  <Button>
    {time.format('LT')}
  </Button>
);

TimesSlot.propTypes = {
  time: PropTypes.instanceOf(moment).isRequired,
};

export default TimesSlot;
