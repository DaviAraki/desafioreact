//create a unit test for the login page

import { render, screen } from '@testing-library/react';
import { LoginPage } from '.';

describe('Login Page', () => {
  it('renders without crashing', () => {
    render(<LoginPage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
