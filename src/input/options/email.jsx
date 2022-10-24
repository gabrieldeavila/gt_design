import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useValidateEmail from '../../hooks/useValidateEmail';

const defaultValidationObj = ['required'];

function GTInputEmail({ name, label, validations, defaultValidation }) {
  const inputValidations = useMemo(() => {
    if (defaultValidation) {
      return [...defaultValidationObj, ...validations];
    }

    return validations;
  }, [defaultValidation, validations]);

  const [isValidEmail, setIsValidEmail] = useState(true);

  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();
  const { validateEmail } = useValidateEmail();

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const isValid = validateEmail(value, inputValidations);

      setIsValidEmail(isValid);
      handleInputChange(value);
    },
    [inputValidations, handleInputChange, validateEmail]
  );

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
