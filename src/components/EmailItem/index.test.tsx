import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmailItem } from '.';
import { renderWithContext } from '../../utils/test-utils';

const email = {
  id: '1',
  name: 'Joao Bosco',
  subject: 'Preciso que formate o meu computador!',
  owner: 'JB',
  users: ['JB', 'MJ', 'LH'],
};
describe('EmailItem', () => {
  it('should render correctly and the name should become a check box', () => {
    renderWithContext(<EmailItem email={email} />);
    expect(screen.getByText(email.name)).toBeInTheDocument();
    expect(screen.getByText(email.subject)).toBeInTheDocument();
    expect(screen.getAllByText(email.owner)).toHaveLength(2);
    userEvent.hover(screen.getByText(email.name));
    expect(screen.getAllByText(email.owner)).toHaveLength(1);
  });
});
