import { Tasks } from '../../store/slices/taskSlice';
import TaskList from '../TaskList';
import useViewModel from './ViewModel';

export const TaskMenu = () => {
  const { menus } = useViewModel();

  return (
    <div>
      {menus.map((feature: Tasks) => (
        <TaskList
          id={feature.id}
          key={feature.id}
          name={feature.name}
          subMenus={feature.subMenus}
        />
      ))}
    </div>
  );
};
