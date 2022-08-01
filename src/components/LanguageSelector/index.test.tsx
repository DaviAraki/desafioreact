import { screen } from '@testing-library/react';
import LanguageSelector from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('LanguageSelector', () => {
  it('renders the component and all the buttons', () => {
    renderWithContext(<LanguageSelector />);
    const button1 = screen.getByText('en-US');
    const button2 = screen.getByText('pt-BR');
    const button3 = screen.getByText('es-ES');
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
});
