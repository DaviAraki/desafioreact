import { screen } from '@testing-library/react';

import { LoginPage } from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('Login Page', () => {
  it('renders the page with the button', () => {
    renderWithContext(<LoginPage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
