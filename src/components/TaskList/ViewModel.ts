import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setMarked } from '../../store/slices/taskSlice';

export default function TasklistViewModel() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);
  const { marked } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const newMarked = [...marked];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (id: number) => {
    setChecked(!checked);
    if (!checked) {
      newMarked.push(id);
    }
    if (checked) {
      newMarked.splice(newMarked.indexOf(id), 1);
    }
    dispatch(setMarked(newMarked));
  };

  return { open, handleClick, handleChange, checked };
}
