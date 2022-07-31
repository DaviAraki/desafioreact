import { useSelector } from 'react-redux';
import { useGetEmailsQuery } from '../../services/emails';
import { RootState } from '../../store';
import { Email, subMenu } from '../../store/slices/emailSlice';
import { EmailItem } from '../EmailItem';

function EmailsContainer() {
  const { data } = useGetEmailsQuery({});
  const { items } = useSelector((state: RootState) => state.emails);

  console.log(items);

  return (
    <div>
      {data &&
        items?.map((email: Email) =>
          email?.subMenuItems?.map((subMenu: subMenu) => (
            <EmailItem email={subMenu} />
          ))
        )}
    </div>
  );
}

export { EmailsContainer };
