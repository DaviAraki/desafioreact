import { useSelector } from 'react-redux';
import { useGetFeaturesQuery } from '../../services/features';
import { RootState } from '../../store';
import { Tasks, TaskState } from '../../store/slices/taskSlice';
import TaskList from '../TaskList';

export const TaskMenu = () => {
  const { data } = useGetFeaturesQuery({});
  const { menus } = useSelector((state: RootState) => state.tasks as TaskState);

  return (
    <div>
      {data &&
        menus.map((feature: Tasks) => (
          <TaskList
            key={feature.id}
            name={feature.name}
            subMenus={feature.subMenus}
          />
        ))}
    </div>
  );
};
