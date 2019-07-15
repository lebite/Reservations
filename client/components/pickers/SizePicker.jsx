import React from 'react';
import PropTypes from 'prop-types';

import { Label, Select } from '../../theme/form';

function createPartySizeDropdown(maxSize) {
  const options = [];
  for (let i = 1; i <= maxSize; i += 1) {
    options.push((<option key={i}>{i}</option>));
  }
  return options;
}

const SizePicker = ({ maxSize }) => (
  <div>
    <Label htmlFor="party">Party Size</Label>
    <Select id="party">
      {createPartySizeDropdown(maxSize)}
    </Select>
  </div>
);


SizePicker.propTypes = {
  maxSize: PropTypes.number.isRequired,
};

export default SizePicker;
