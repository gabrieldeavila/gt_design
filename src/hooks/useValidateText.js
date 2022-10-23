import { useCallback } from 'react';

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
    regex: /^(?:\s*[.\-_]*[a-zA-Z0-9]{1,}[.\-_]*\s*)$/,
    message: 'This field cannot contain a space'
  }
};

function useValidateText() {
  const validateText = useCallback((value, validations) => {
    let isValid = true;
    let invalidMessage = '';

    validations.every((validation) => {
      if (!options[validation]?.regex?.test?.(value)) {
        try {
          invalidMessage = options[validation].message;
          isValid = false;

          return false;
        } catch {
          throw new Error(`Oops, ${validation} is not a valid validation for a text input!`);
        }
      }

      return true;
    });

    return { isValid, invalidMessage };
  }, []);

  return { validateText };
}

export default useValidateText;
