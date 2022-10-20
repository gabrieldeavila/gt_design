import { useCallback } from 'react';

const options = {
  valid: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  }
};

function useVerifyEmail() {
  const verifyEmail = useCallback((value, verifications) => {
    let isValid = true;

    verifications.forEach((verification) => {
      if (!options[verification].regex.test(value)) {
        isValid = false;
      }
    });

    return isValid;
  }, []);

  return { verifyEmail };
}

export default useVerifyEmail;
