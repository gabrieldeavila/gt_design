import { PropTypes } from 'prop-types';
import React from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';

function GTInputEmail({ name, label }) {
  const { labelIsUp, handleChange, handleInputBlur, handleInputFocus } = useInputValues();

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type="email"
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />
    </Input.Container>
  );
}

export default GTInputEmail;

GTInputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
