import { screen } from '@testing-library/react';
import { Home } from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('Login Page', () => {
  it('renders the page header', () => {
    renderWithContext(<Home />);
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
  it('renders the mail content', () => {
    renderWithContext(<Home />);
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});
