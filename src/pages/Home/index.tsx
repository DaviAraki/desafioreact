import { Header } from '../../components/Header';
import { TaskMenu } from '../../components/TaskMenu';
import { UserInfo } from '../../components/UserInfo';

export const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <UserInfo />
      <TaskMenu />
    </div>
  );
};
