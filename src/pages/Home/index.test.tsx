import { screen } from '@testing-library/react';
import { Home } from '.';
import { getStateWithItems, renderWithContext } from '../../utils/test-utils';

const mail = {
  id: 1,
  subMenuItems: [
    {
      id: 1,
      name: 'Joao Bosco',
      subject: 'Preciso que formate o meu computador!',
      owner: 'JB',
      users: ['JB', 'MJ', 'LH'],
    },
  ],
};

describe('Login Page', () => {
  it('renders the page header', () => {
    renderWithContext(<Home />);
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
  it('renders the mail content', () => {
    const state = getStateWithItems(
      {
        items: [mail],
        isFiltering: false,
      },
      { menus: [], marked: [] },
      {
        isAuthenticated: false,
        userData: {
          userId: '',
          name: '',
          email: '',
          avatar: '',
        },
      },
      { theme: 'light' }
    );
    renderWithContext(<Home />, state);
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});
