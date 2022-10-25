import { useCallback, useContext } from 'react';
import { GTPageStateContext } from '../context/pageState';

function useValidateState() {
  const { setPageState, setErrors } = useContext(GTPageStateContext);

  const validateState = useCallback(
    (isValid, name, value) => {
      if (isValid) {
        setPageState((prevState) => ({
          ...prevState,
          [name]: value
        }));

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
    [setErrors, setPageState]
  );

  return { validateState };
}

export default useValidateState;
