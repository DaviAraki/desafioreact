import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('SearchInput', () => {
  it('renders the component and change when the user types', () => {
    renderWithContext(<SearchInput />);
    const input = screen.getByPlaceholderText('Pesquisar');
    userEvent.type(input, 'Teste');
    expect(screen.getByDisplayValue('Teste')).toBeInTheDocument();
  });
});
