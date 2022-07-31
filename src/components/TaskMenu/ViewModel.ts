import { useSelector } from 'react-redux';
import { useGetFeaturesQuery } from '../../services/tasks';
import { RootState } from '../../store';
import { TaskState } from '../../store/slices/taskSlice';

export default function TaskMenuViewModel() {
  const { data } = useGetFeaturesQuery({});
  const { menus } = useSelector((state: RootState) => state.tasks as TaskState);

  return { menus, data };
}
