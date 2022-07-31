import { useSelector } from 'react-redux';
import { useGetEmailsQuery } from '../../services/emails';
import { RootState } from '../../store';

export default function EmailsContainerViewModel() {
  const { data } = useGetEmailsQuery({});
  const { items, isFiltering, emailFilter } = useSelector(
    (state: RootState) => state.emails
  );

  return { data, items, isFiltering, emailFilter };
}
