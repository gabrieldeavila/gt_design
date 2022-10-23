import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useValidateText from '../../hooks/useValidateText';

const defaultValidationObj = ['required', 'noInitialSpace', 'noEndingSpaces'];

function GTInputText({ name, label, validations, defaultValidation, minWords, maxWords }) {
  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const inputValidations = useMemo(() => {
    if (defaultValidation) {
      return [...defaultValidationObj, ...validations];
    }

    return validations;
  }, [defaultValidation, validations]);

  const { validateText } = useValidateText();

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const words = value.split(' ');
      let { isValid, invalidMessage } = validateText(value, inputValidations);

      if (!invalidMessage && minWords && words.length < minWords) {
        invalidMessage = `This field should contain ${minWords} words`;
        isValid = false;
      } else if (!invalidMessage && maxWords && words.length > maxWords) {
        invalidMessage = `This field should not contain more than ${maxWords} words`;
        isValid = false;
      }

      setErrorMessage(invalidMessage);
      setIsValidEmail(isValid);
      handleInputChange(e.target.value);
    },
    [validateText, inputValidations, minWords, maxWords, handleInputChange]
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
      {!isValidEmail && <Input.Error>{errorMessage}</Input.Error>}
    </Input.Container>
  );
}

export default memo(GTInputText);

GTInputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validations: PropTypes.arrayOf(PropTypes.string),
  minWords: PropTypes.number,
  maxWords: PropTypes.number,
  defaultValidation: PropTypes.bool
};

GTInputText.defaultProps = {
  validations: defaultValidationObj,
  minWords: 0,
  maxWords: 0,
  defaultValidation: true
};
