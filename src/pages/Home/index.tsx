import { EmailsContainer } from '../../components/EmailsContainer';
import { Header } from '../../components/Header';
import { SearchComponent } from '../../components/SearchComponent';
import { TaskMenu } from '../../components/TaskMenu';
import { UserInfo } from '../../components/UserInfo';
import { HomeContainer, TasksContainer } from './styles';

export const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <TasksContainer>
          <UserInfo />
          <TaskMenu />
        </TasksContainer>
        <div>
          <SearchComponent />
          <EmailsContainer />
        </div>
      </HomeContainer>
    </>
  );
};
