import { screen } from '@testing-library/react';
import TaskList from '.';
import { renderWithContext } from '../../utils/test-utils';

describe('UserInfo', () => {
  it('renders the attributes for the task', () => {
    renderWithContext(
      <TaskList
        id={1}
        name={'Tarefa 1'}
        subMenus={[
          {
            id: 11,
            name: 'Urgente',
          },
          {
            id: 12,
            name: 'Data Fixa',
          },
        ]}
        key={1}
      />
    );
    const taskName = screen.getByText('Tarefa 1');
    const subTaskName1 = screen.getByText('Urgente');
    const subTaskName2 = screen.getByText('Data Fixa');
    const expandButton = screen.getByTestId('ExpandLessIcon');
    expect(taskName).toBeInTheDocument();
    expect(subTaskName1).toBeInTheDocument();
    expect(subTaskName2).toBeInTheDocument();
    expect(expandButton).toBeInTheDocument();
  });
});
