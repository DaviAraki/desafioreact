import { useSelector } from 'react-redux';
import { useGetFeaturesQuery } from '../../services/features';
import { RootState } from '../../store';
import { Tasks } from '../../store/slices/taskSlice';
import TaskList from '../TaskList';

export const TaskMenu = () => {
  const { data } = useGetFeaturesQuery({});
  const { menus } = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <h1>Task Menu</h1>
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
