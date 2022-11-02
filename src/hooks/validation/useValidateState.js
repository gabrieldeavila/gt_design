import { useCallback, useContext, useEffect } from 'react';
import { GTPageStateContext } from '../../context/pageState';

function useValidateState(name, inputValidations) {
  const { setPageState, setErrors } = useContext(GTPageStateContext);

  useEffect(() => {
    let inputVal = {};

    setPageState((prevState) => {
      // if already has a value, keep it
      const prevVal = prevState[name] || '';
      inputVal = prevVal;

      // add a key to the obj
      const newState = { ...prevState, [name]: prevVal };
      return newState;
    });

    // if it has a required validation, add a key to the errors obj
    if (inputValidations.includes('required')) {
      setErrors((prevErrors) => {
        // the value is valid, so it should not be in the errors obj
        if (inputVal) {
          const newState = prevErrors.filter((error) => error !== name);
          return newState;
        }

        // if it already has a value, don't add a repeat key
        if (prevErrors.includes(name)) {
          return prevErrors;
        }

        const newState = [...prevErrors, name];
        return newState;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateState = useCallback(
    (isValid, value) => {
      setPageState((prevState) => ({
        ...prevState,
        [name]: value
      }));

      if (isValid) {
        setErrors((prevErrors) => {
          // if it doesn't have a key, don't remove it
          if (!prevErrors.includes(name)) {
            return prevErrors;
          }

          const newErrors = prevErrors.filter((error) => error !== name);
          return newErrors;
        });
      } else {
        setErrors((prevState) => {
          // if already has a value, don't add it
          if (prevState.includes(name)) {
            return prevState;
          }

          const newErrors = [...prevState, name];
          return newErrors;
        });
      }
    },
    [name, setErrors, setPageState]
  );

  return { validateState };
}

export default useValidateState;
