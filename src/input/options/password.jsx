import { PropTypes } from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import * as Icon from 'react-feather';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';

function GTInputPassword({ name, label }) {
  const { labelIsUp, handleChange, handleInputBlur, handleInputFocus } = useInputValues();

  const [showPassword, setShowPassword] = useState(false);

  const type = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword]);

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type={type}
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />

      {showPassword ? (
        <Icon.EyeOff onClick={handleShowPassword} />
      ) : (
        <Icon.Eye onClick={handleShowPassword} />
      )}
    </Input.Container>
  );
}

export default GTInputPassword;

GTInputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
