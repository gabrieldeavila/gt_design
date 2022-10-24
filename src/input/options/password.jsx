import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import * as Icon from 'react-feather';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useValidatePassword from '../../hooks/useValidatePassword';

const defaultValidationObj = [
  'eightLong',
  'oneSpecial',
  'oneLowercase',
  'oneNumber',
  'oneUppercase'
];

function GTInputPassword({ name, label, defaultValidation, validations }) {
  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();

  const { validatePassword } = useValidatePassword();
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const type = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword]);

  const inputValidations = useMemo(() => {
    if (defaultValidation) {
      return [...defaultValidationObj, ...validations];
    }

    return validations;
  }, [defaultValidation, validations]);

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const handleBlur = useCallback(() => {
    handleInputBlur();
  }, [handleInputBlur]);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const { isValid, invalidMessage } = validatePassword(value, inputValidations);
      setIsValidPassword(isValid);
      setErrorMessage(invalidMessage);
      handleInputChange(value);
    },
    [handleInputChange, inputValidations, validatePassword]
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
        <Icon.Eye onClick={handleShowPassword} />
      ) : (
        <Icon.EyeOff onClick={handleShowPassword} />
      )}
      {!isValidPassword && <Input.Error>{errorMessage}</Input.Error>}
    </Input.Container>
  );
}

export default memo(GTInputPassword);

GTInputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validations: PropTypes.arrayOf(PropTypes.string),
  defaultValidation: PropTypes.bool
};

GTInputPassword.defaultProps = {
  validations: defaultValidationObj,
  defaultValidation: true
};
