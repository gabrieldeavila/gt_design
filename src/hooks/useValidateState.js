import { useCallback, useContext, useEffect } from 'react';
import { GTPageStateContext } from '../context/pageState';

function useValidateState(name, inputValidations) {
  const { setPageState, setErrors } = useContext(GTPageStateContext);

  useEffect(() => {
    setPageState((prevState) => {
      // if already has a value, keep it
      const prevVal = prevState[name] || '';

      // add a key to the obj
      const newState = { ...prevState, [name]: prevVal };
      return newState;
    });

    // if it has a required validation, add a key to the errors obj
    if (inputValidations.includes('required')) {
      setErrors((prevState) => {
        const newState = [...prevState, name];
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
        setErrors((prevState) => {
          const newErrors = prevState.filter((error) => error !== name);
          return newErrors;
        });
      } else {
        setErrors((prevState) => {
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
