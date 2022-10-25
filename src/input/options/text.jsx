import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useValidateText from '../../hooks/useValidateText';
import useValidateState from '../../hooks/useValidateState';

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
  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();
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

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const { isValid, invalidMessage } = validateText(value, inputValidations);
      const { isAllValid, invalidAllMessage } = validateMinAndMax(invalidMessage, isValid, value);

      validateState(isAllValid, value);
      setErrorMessage(invalidAllMessage);
      setIsValidText(isAllValid);
      handleInputChange(e.target.value);
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
