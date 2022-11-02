/* eslint-disable implicit-arrow-linebreak */
import { useEffect, useCallback } from 'react';

function useOnClickOutside(ref, avoidComponents, handler) {
  const listener = useCallback(
    (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (
        avoidComponents.some(
          (avoidComponent) =>
            avoidComponent.current && avoidComponent.current.contains(event.target)
        )
      ) {
        return;
      }

      handler(event);
    },
    [avoidComponents, handler, ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, avoidComponents, listener]);
}

export default useOnClickOutside;
