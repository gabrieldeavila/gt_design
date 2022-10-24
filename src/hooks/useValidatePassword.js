import { useCallback } from 'react';

const options = {
  eightLong: {
    regex: /^.{8,}$/,
    message: 'Password must be at least 8 characters long.'
  },
  oneNumber: {
    regex: /\d/,
    message: 'Password must contain at least one number.'
  },
  oneSpecial: {
    regex: /[@$!%*?&]/,
    message: 'Password must contain at least one special character.'
  },
  oneUppercase: {
    regex: /[A-Z]/,
    message: 'Password must contain at least one uppercase letter.'
  },
  oneLowercase: {
    regex: /[a-z]/,
    message: 'Password must contain at least one lowercase letter.'
  }
};

function useValidatePassword() {
  const validatePassword = useCallback((value, validations) => {
    let isValid = true;
    let invalidMessage = '';

    validations.every((validation) => {
      try {
        if (!options[validation].regex.test(value)) {
          invalidMessage = options[validation].message;
          isValid = false;

          return false;
        }
      } catch {
        throw new Error(`Oops, ${validation} is not a valid validation for a password input!`);
      }

      return true;
    });

    return { isValid, invalidMessage };
  }, []);

  return { validatePassword };
}

export default useValidatePassword;
