import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('Header component', () => {
  it('renders the component and all the buttons', () => {
    renderWithContext(<Header />);
    const button1 = screen.getByText('Help');
    const button2 = screen.getByText('Settings');
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
