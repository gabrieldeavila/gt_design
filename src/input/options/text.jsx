import { PropTypes } from 'prop-types';
import React, { memo, useCallback } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';

function GTInputText({ name, label }) {
  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();

  const handleChange = useCallback(
    (e) => {
      handleInputChange(e.target.value);
    },
    [handleInputChange]
  );

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type="text"
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />
    </Input.Container>
  );
}

export default memo(GTInputText);

GTInputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
