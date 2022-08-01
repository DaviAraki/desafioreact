import { useState } from 'react';

export default function EmailItemViewModel() {
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [checked, setChecked] = useState(false);

  // as funções abaixo são responsáveis por alterar o estado de acordo com o mouse para colocar as iniciais ou o checkbox
  const handleMouseOver = () => {
    setShowCheckBox(true);
  };

  const handleMouseLeave = () => {
    setShowCheckBox(false);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return {
    showCheckBox,
    handleMouseOver,
    handleMouseLeave,
    handleChange,
    checked,
  };
}
