import React, { useCallback } from 'react';
import Popup from '../../popup';
import Symbol from '../../symbol';

function SymbolPopup() {
  const [open, setOpen] = React.useState(false);

  const ref = React.useRef(null);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Symbol.Wrapper ref={ref} onClick={handleOpen}>
      <Symbol.Container>
        <Symbol.Image src="https://thispersondoesnotexist.com/image" />
      </Symbol.Container>

      <Popup.Wrapper avoidComponents={[ref]} open={open} setOpen={setOpen}>
        <Popup.Container>Redireciona-me</Popup.Container>
      </Popup.Wrapper>
    </Symbol.Wrapper>
  );
}

export default SymbolPopup;
