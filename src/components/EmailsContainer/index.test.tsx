import { screen } from '@testing-library/react';
import { EmailsContainer } from '.';
import { getStateWithItems, renderWithContext } from '../../utils/test-utils';

const emails = {
  id: 11,
  subMenuItems: [
    {
      id: '1',
      name: 'Joao Bosco',
      subject: 'Preciso que formate o meu computador!',
      owner: 'JB',
      users: ['JB', 'MJ', 'LH'],
    },
    {
      id: '2',
      name: 'Melissa Jackson',
      subject: 'Solicito minhas férias para janeiro.',
      owner: 'MJ',
      users: ['MJ'],
    },
    {
      id: '3',
      name: 'Lucas Henrique',
      subject: 'Preciso de mais dois desenvolvedores BACKEND GO.',
      owner: 'LH',
      users: ['LH', 'JR', 'MJ', 'JB'],
    },
    {
      id: '4',
      name: 'Juliano Ribeiro',
      subject: 'Lembrete sua CNH venceu.',
      owner: 'JR',
      users: ['JR', 'LH'],
    },
    {
      id: '5',
      name: 'Ian Chaves',
      subject: 'Aviso',
      owner: 'IC',
      users: ['FD'],
    },
    {
      id: '6',
      name: 'Filipe Damião',
      subject: 'Retornar para o cliente big boss referente a reclamação',
      owner: 'FD',
      users: ['FD', 'JB'],
    },
  ],
};

describe('UserInfo', () => {
  it('renders the attributes for the task', () => {
    const state = getStateWithItems(
      {
        items: [emails],
        isFiltering: false,
      },
      { menus: [], marked: [] },
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
    renderWithContext(<EmailsContainer />, state);
    const taskName = screen.getByText('Solicito minhas férias para janeiro.');
    const taskName2 = screen.getByText('Preciso que formate o meu computador!');
    expect(taskName).toBeInTheDocument();
    expect(taskName2).toBeInTheDocument();
  });
  it('should not render if had some search', () => {
    const state = getStateWithItems(
      {
        items: [emails],
        isFiltering: true,
        emailFilter: 'Solicito minhas férias para janeiro.',
      },
      { menus: [], marked: [] },
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
    renderWithContext(<EmailsContainer />, state);
    const taskName = screen.getByText('Solicito minhas férias para janeiro.');
    const taskName2 = screen.queryByText(
      'Preciso que formate o meu computador!'
    );
    expect(taskName).toBeInTheDocument();
    expect(taskName2).not.toBeInTheDocument();
  });
});
