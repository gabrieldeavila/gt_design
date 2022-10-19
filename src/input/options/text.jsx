import { PropTypes } from 'prop-types';
import React from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';

function GTInputText({ name, label }) {
  const { labelIsUp, handleChange, handleInputBlur, handleInputFocus } = useInputValues();

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

export default GTInputText;

GTInputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
