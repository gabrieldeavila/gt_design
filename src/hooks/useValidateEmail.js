import { useCallback } from 'react';

const options = {
  required: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  }
};

function useValidateEmail() {
  const validateEmail = useCallback((value, validations) => {
    let isValid = true;

    validations.every((validation) => {
      try {
        if (!options[validation].regex.test(value)) {
          isValid = false;

          return false;
        }
      } catch {
        throw new Error(`Oops, ${validation} is not a valid validation for an email input!`);
      }

      return true;
    });

    return isValid;
  }, []);

  return { validateEmail };
}

export default useValidateEmail;
