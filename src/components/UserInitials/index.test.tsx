import { screen } from '@testing-library/react';
import { UserInitials } from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('UserInitials', () => {
  it('renders and have the correct style for medium', () => {
    renderWithContext(<UserInitials size={'medium'}>AB</UserInitials>);
    const initials = screen.getByText('AB');
    expect(initials).toBeInTheDocument();
    expect(initials).toHaveStyle({ fontSize: '1rem' });
  });
  it('renders and have the correct style for small', () => {
    renderWithContext(<UserInitials size={'small'}>DA</UserInitials>);
    const initials = screen.getByText('DA');
    expect(initials).toBeInTheDocument();
    expect(initials).toHaveStyle({ fontSize: '0.8rem' });
  });
});
