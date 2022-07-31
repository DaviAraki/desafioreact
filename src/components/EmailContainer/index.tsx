import { useSelector } from 'react-redux';
import { useGetEmailsQuery } from '../../services/emails';
import { RootState } from '../../store';
import { EmailState } from '../../store/slices/emailSlice';

function EmailContainer() {
  const { data } = useGetEmailsQuery({});
  const { items } = useSelector((state: RootState) => state.emails);

  console.log(items);

  return <></>;
}

export { EmailContainer };
