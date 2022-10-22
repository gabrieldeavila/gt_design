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

function useVerifyPassword() {
  const verifyPassword = useCallback((value, verifications) => {
    let isValid = true;
    let invalidMessage = '';

    verifications.forEach((verification) => {
      if (!options[verification].regex.test(value)) {
        invalidMessage = options[verification].message;
        isValid = false;
        return false;
      }
      return true;
    });

    return { isValid, invalidMessage };
  }, []);

  return { verifyPassword };
}

export default useVerifyPassword;
