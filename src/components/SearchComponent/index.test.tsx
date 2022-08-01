import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchComponent } from '.';
import { mockedi18n, renderWithContext } from '../../utils/test-utils';

describe('SearchComponent', () => {
  it('renders the component and all the buttons', () => {
    mockedi18n();
    renderWithContext(<SearchComponent />);
    const input = screen.getByPlaceholderText('Pesquisar');
    userEvent.type(input, 'Teste');
    expect(screen.getByDisplayValue('Teste')).toBeInTheDocument();
    const button1 = screen.getByText('Assign');
    const button2 = screen.getByText('Schedule');
    const button3 = screen.getByText('Archive');
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
});
