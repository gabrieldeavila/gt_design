import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import * as Icon from 'react-feather';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useVerifyPassword from '../../hooks/useVerifyPassword';

const defaultVerification = [
  'oneNumber',
  'oneUppercase',
  'oneLowercase',
  'oneSpecial',
  'eightLong',
];

function GTInputPassword({ name, label, verification }) {
  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();

  const { verifyPassword } = useVerifyPassword();
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const type = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword]);

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const handleBlur = useCallback(() => {
    handleInputBlur();
  }, [handleInputBlur]);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const { isValid, invalidMessage } = verifyPassword(value, verification);
      setIsValidPassword(isValid);
      setErrorMessage(invalidMessage);
      handleInputChange(value);
    },
    [handleInputChange, verification, verifyPassword]
  );

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />

      {showPassword ? (
        <Icon.EyeOff onClick={handleShowPassword} />
      ) : (
        <Icon.Eye onClick={handleShowPassword} />
      )}
      {!isValidPassword && <Input.Error>{errorMessage}</Input.Error>}
    </Input.Container>
  );
}

export default memo(GTInputPassword);

GTInputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  verification: PropTypes.arrayOf(PropTypes.string)
};

GTInputPassword.defaultProps = {
  verification: defaultVerification
};
