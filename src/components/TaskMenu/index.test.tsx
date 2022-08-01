import { screen } from '@testing-library/react';
import { TaskMenu } from '.';
import { getStateWithItems, renderWithContext } from '../../utils/test-utils';

const task = {
  id: 1,
  name: 'Tarefa 1',
  subMenus: [
    {
      id: 11,
      name: 'Urgente',
    },
    {
      id: 12,
      name: 'Data Fixa',
    },
  ],
};

describe('UserInfo', () => {
  it('renders the attributes for the task', () => {
    const state = getStateWithItems(
      {
        items: [],
        isFiltering: false,
      },
      { menus: [task], marked: [] },
      {
        isAuthenticated: false,
        userData: {
          userId: '',
          name: 'ABC TGE',
          email: '',
          avatar: '',
        },
      },
      { theme: 'light' }
    );
    renderWithContext(<TaskMenu />, state);
    const taskName = screen.getByText('Tarefa 1');
    const subTaskName1 = screen.getByText('Urgente');
    const subTaskName2 = screen.getByText('Data Fixa');
    expect(taskName).toBeInTheDocument();
    expect(subTaskName1).toBeInTheDocument();
    expect(subTaskName2).toBeInTheDocument();
  });
});
