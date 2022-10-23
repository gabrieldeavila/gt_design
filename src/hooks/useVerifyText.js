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
  }
};

function useVerifyText() {
  const verifyText = useCallback((value, verifications) => {
    let isValid = true;
    let invalidMessage = '';

    verifications.every((verification) => {
      if (!options[verification]?.regex?.test?.(value)) {
        invalidMessage = options[verification]?.message ?? 'Invalid field.';
        isValid = false;

        return false;
      }

      return true;
    });

    return { isValid, invalidMessage };
  }, []);

  return { verifyText };
}

export default useVerifyText;
