import { screen } from '@testing-library/react';
import { UserInfo } from '.';
import { getStateWithItems, renderWithContext } from '../../utils/test-utils';

describe('UserInfo', () => {
  it('renders and have the correct style for medium', () => {
    const state = getStateWithItems(
      {
        items: [],
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
    renderWithContext(<UserInfo />, state);
    const initials = screen.getByText('AT');
    const wrongInitials = screen.queryByText('BGE');
    expect(initials).toBeInTheDocument();
    expect(wrongInitials).not.toBeInTheDocument();
  });
});
