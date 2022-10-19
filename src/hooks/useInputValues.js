import _ from 'lodash';
import { useCallback, useState } from 'react';

function useInputValues() {
  const [value, setValue] = useState('');
  const [labelIsUp, setLabelIsUp] = useState(false);

  const handleInputFocus = useCallback(() => {
    setLabelIsUp(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    if (_.isEmpty(value)) {
      setLabelIsUp(false);
    }
  }, [value]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return { labelIsUp, value, setValue, handleChange, handleInputBlur, handleInputFocus };
}

export default useInputValues;
