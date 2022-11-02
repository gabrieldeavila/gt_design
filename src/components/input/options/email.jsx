/* eslint-disable operator-linebreak */
import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Input from '..';
import useValidateState from '../../../hooks/validation/useValidateState';
import useValidateEmail from '../../../hooks/validation/useValidateEmail';
import useInputValues from '../../../hooks/pageState/useInputValues';

const defaultValidationObj = ['required'];

function GTInputEmail({ name, label, validations, defaultValidation }) {
  const inputValidations = useMemo(() => {
    if (defaultValidation) {
      return [...defaultValidationObj, ...validations];
    }

    return validations;
  }, [defaultValidation, validations]);

  const [isValidEmail, setIsValidEmail] = useState(true);

  const { validateState } = useValidateState(name, inputValidations);

  const { labelIsUp, value, handleInputChange, handleInputBlur, handleInputFocus } =
    useInputValues(name);

  const { validateEmail } = useValidateEmail();
  useEffect(() => {
    if (!value) return;

    const { isValid } = validateEmail(value, inputValidations);

    setIsValidEmail(isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = useCallback(
    (e) => {
      const { value: emailVal } = e.target;
      const { isValid } = validateEmail(emailVal, inputValidations);

      validateState(isValid, emailVal);
      setIsValidEmail(isValid);
      handleInputChange(emailVal);
    },
    [validateEmail, inputValidations, validateState, handleInputChange]
  );

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type="email"
        onChange={handleChange}
        value={value}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />
      {!isValidEmail && <Input.Error>Invalid email</Input.Error>}
    </Input.Container>
  );
}

export default memo(GTInputEmail);

GTInputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validations: PropTypes.arrayOf(PropTypes.string),
  defaultValidation: PropTypes.bool
};

GTInputEmail.defaultProps = {
  validations: defaultValidationObj,
  defaultValidation: true
};
