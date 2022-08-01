import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setMarked } from '../../store/slices/taskSlice';

export default function TasklistViewModel() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);
  const { marked } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const newMarked = useMemo(() => [...marked], [marked]);

  const handleClick = () => {
    setOpen(!open);
  };

  //essa função é responsável por marcar as tarefas
  const handleChange = useCallback(
    (id: number) => {
      setChecked(!checked);
      if (!checked) {
        newMarked.push(id);
      }
      if (checked) {
        newMarked.splice(newMarked.indexOf(id), 1);
      }
      dispatch(setMarked(newMarked));
    },
    [checked, newMarked, dispatch]
  );

  return { open, handleClick, handleChange, checked };
}
