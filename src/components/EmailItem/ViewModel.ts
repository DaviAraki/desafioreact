import { useState } from 'react';

export default function EmailItemViewModel() {
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [checked, setChecked] = useState(false);

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
