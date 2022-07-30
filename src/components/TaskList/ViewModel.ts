import { useState } from 'react';

export default function TasklistViewModel() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return { open, handleClick, handleChange, checked };
}
