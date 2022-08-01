import { screen } from '@testing-library/react';
import exp from 'constants';
import { Home } from '.';
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

describe('Login Page', () => {
  it('renders the page and all of its components', () => {
    const state = getStateWithItems(
      {
        items: [emails],
        isFiltering: false,
      },
      { menus: [task], marked: [] },
      {
        isAuthenticated: true,
        userData: {
          userId: '',
          name: 'ABC TGE',
          email: '',
          avatar: '',
        },
      },
      { theme: 'light' }
    );
    renderWithContext(<Home />, state);
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Joao Bosco')).toBeInTheDocument();
    expect(
      screen.getByText('Solicito minhas férias para janeiro.')
    ).toBeInTheDocument();
    expect(screen.getByText('AT')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
  });
});
