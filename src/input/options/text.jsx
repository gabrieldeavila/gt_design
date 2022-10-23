import { PropTypes } from 'prop-types';
import React, { memo, useCallback, useState } from 'react';
import Input from '..';
import useInputValues from '../../hooks/useInputValues';
import useVerifyText from '../../hooks/useVerifyText';

const defaultVerification = ['required', 'noInitialSpace', 'noEndingSpaces'];

function GTInputText({ name, label, verification, minWords, maxWords }) {
  const { labelIsUp, handleInputChange, handleInputBlur, handleInputFocus } = useInputValues();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { verifyText } = useVerifyText();

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const words = value.split(' ');
      let { isValid, invalidMessage } = verifyText(value, verification);

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
    [handleInputChange, maxWords, minWords, verification, verifyText]
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
  verification: PropTypes.arrayOf(PropTypes.string),
  minWords: PropTypes.number,
  maxWords: PropTypes.number
};

GTInputText.defaultProps = {
  verification: defaultVerification,
  minWords: 0,
  maxWords: 0
};
