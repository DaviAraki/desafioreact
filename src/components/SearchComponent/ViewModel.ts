import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsFiltering } from '../../store/slices/emailSlice';
import { archiveTasks } from '../../store/slices/taskSlice';

export default function SearchComponentViewModel() {
  const dispatch = useDispatch();
  const { menus, marked } = useSelector((state: RootState) => state.tasks);
  const newMenus = useMemo(() => [...menus], [menus]);

  //essa função é responsável determinar se os emails estão filtradas ou não
  function clickFilter() {
    dispatch(setIsFiltering());
  }

  //Essa função é responsável por arquivar as tarefas marcadas
  const removeMarked = useCallback(() => {
    const filteredMenus = newMenus.filter((task) => !marked.includes(task.id));
    dispatch(archiveTasks(filteredMenus));
  }, [dispatch, marked, newMenus]);

  return { clickFilter, removeMarked };
}
