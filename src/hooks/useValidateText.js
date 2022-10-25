/* eslint-disable operator-linebreak */
import { useCallback } from 'react';
import useInputValidation from './useInputValidation';

const options = {
  required: {
    regex: /^.{1,}$/,
    message: 'This field is required.'
  },
  noInitialSpace: {
    regex: /^[^\s]/,
    message: 'This field cannot start with a space.'
  },
  noEndingSpaces: {
    regex: /[^\s]$/,
    message: 'This field cannot end with a space.'
  },
  noSpaces: {
    regex: /^[^\s]+$/,
    message: 'This field cannot have spaces.'
  },
  userName: {
    regex: /^[a-zA-Z0-9]+$/,
    message: 'This field can only have letters and numbers.'
  }
};

function useValidateText(minWords, maxWords, minChars, maxChars) {
  const { optionsValidation } = useInputValidation();

  const validateText = useCallback(
    (value, validations) => {
      const { isValid, invalidMessage } = optionsValidation(validations, options, value, 'text');

      return { isValid, invalidMessage };
    },
    [optionsValidation]
  );

  const validateMinAndMaxWords = useCallback(
    (invalidMessage, isValid, value) => {
      // if maxWords is not bigger than minWords, then it is not a valid range
      const shouldValidateWords = maxWords > minWords;

      // and if the value is already not valid, then we don't need to search for errors
      if (!shouldValidateWords || !isValid) {
        return { isAllValidWords: isValid, invalidAllMessageWords: invalidMessage };
      }

      // get words from a string, more than one space is considered as one space
      const words = value.trim().split(/\s+/);

      const isAllValidWords = isValid && words.length >= minWords && words.length <= maxWords;

      // isInvalidWords is true, then it will have a message
      const isInvalidMessage =
        !isAllValidWords && `This field must have between ${minWords} and ${maxWords} words.`;

      const invalidAllMessageWords = isInvalidMessage;

      return { isAllValidWords, invalidAllMessageWords };
    },
    [maxWords, minWords]
  );

  const validateMinAndMaxChars = useCallback(
    (invalidMessage, isValid, value) => {
      // always makes sure that maxChars and minChars are numbers
      const maxCharsNumber = Number(maxChars);
      const minCharsNumber = Number(minChars);

      // if maxChars is not bigger than minChars, then it is not a valid range
      const shouldValidateChars = maxCharsNumber > minCharsNumber;

      // and if the value is already not valid, then we don't need to search for errors
      if (!shouldValidateChars || !isValid) {
        return { isAllValidChars: isValid, invalidAllMessageChars: invalidMessage };
      }

      const isAllValidChars =
        isValid && value.length >= minCharsNumber && value.length <= maxCharsNumber;

      const currChars = value.length;

      // isInvalidChars is true, then it will have a message
      const isInvalidMessage =
        !isAllValidChars &&
        `This field must have between ${minCharsNumber} and ${maxCharsNumber} characters. You have ${currChars} characters.`;
      const invalidAllMessageChars = isInvalidMessage;

      return { isAllValidChars, invalidAllMessageChars };
    },
    [maxChars, minChars]
  );

  const validateMinAndMax = useCallback(
    (invalidMessage, isValid, value) => {
      const { isAllValidWords, invalidAllMessageWords } = validateMinAndMaxWords(
        invalidMessage,
        isValid,
        value
      );

      const { isAllValidChars, invalidAllMessageChars } = validateMinAndMaxChars(
        invalidAllMessageWords,
        isAllValidWords,
        value
      );

      return { isAllValid: isAllValidChars, invalidAllMessage: invalidAllMessageChars };
    },
    [validateMinAndMaxWords, validateMinAndMaxChars]
  );

  return { validateText, validateMinAndMax, validateMinAndMaxWords };
}

export default useValidateText;
