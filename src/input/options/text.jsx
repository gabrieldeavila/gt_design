/* eslint-disable operator-linebreak */
import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useValidateState from '../../hooks/useValidateState';
import useValidateText from '../../hooks/useValidateText';

const defaultValidationObj = ['required', 'noInitialSpace', 'noEndingSpaces'];

function GTInputText({
  name,
  label,
  validations,
  defaultValidation,
  minWords,
  maxWords,
  minChars,
  maxChars
}) {
  const { labelIsUp, value, handleInputChange, handleInputBlur, handleInputFocus } =
    useInputValues(name);

  const [isValidText, setIsValidText] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const inputValidations = useMemo(() => {
    if (defaultValidation) {
      return [...defaultValidationObj, ...validations];
    }

    return validations;
  }, [defaultValidation, validations]);

  const { validateText, validateMinAndMax } = useValidateText(
    minWords,
    maxWords,
    minChars,
    maxChars
  );

  const { validateState } = useValidateState(name, inputValidations);

  useEffect(() => {
    if (!value) return;

    const { isValid, invalidMessage } = validateText(value, inputValidations);

    setIsValidText(isValid);
    setErrorMessage(invalidMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { value: iVal } = e.target;
      const { isValid, invalidMessage } = validateText(iVal, inputValidations);
      const { isAllValid, invalidAllMessage } = validateMinAndMax(invalidMessage, isValid, iVal);

      validateState(isAllValid, iVal);
      setErrorMessage(invalidAllMessage);
      setIsValidText(isAllValid);
      handleInputChange(iVal);
    },
    [validateText, inputValidations, validateMinAndMax, validateState, handleInputChange]
  );

  return (
    <Input.Container>
      <Input.Label up={labelIsUp} htmlFor={name}>
        {label}
      </Input.Label>
      <Input.Input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        id={name}
        name={name}
      />
      {!isValidText && <Input.Error>{errorMessage}</Input.Error>}
    </Input.Container>
  );
}

export default memo(GTInputText);

GTInputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validations: PropTypes.arrayOf(PropTypes.string),
  minWords: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWords: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValidation: PropTypes.bool,
  minChars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxChars: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GTInputText.defaultProps = {
  validations: defaultValidationObj,
  minWords: 0,
  maxWords: 0,
  defaultValidation: true,
  minChars: 0,
  maxChars: 0
};
