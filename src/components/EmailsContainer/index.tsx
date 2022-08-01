import { Email, subMenu } from '../../store/slices/emailSlice';
import { EmailItem } from '../EmailItem';
import useViewModel from './ViewModel';

function EmailsContainer() {
  const { data, items, isFiltering, emailFilter } = useViewModel();

  //Esse componente pega os emails do store e os lista, além de filtrar de acordo com o texto do SearchInput
  return (
    <div>
      {data &&
        items?.map((email: Email) =>
          email?.subMenuItems?.map((subMenu: subMenu) =>
            isFiltering ? (
              emailFilter && subMenu.subject.includes(emailFilter) ? (
                <EmailItem key={subMenu.id} email={subMenu} />
              ) : null
            ) : (
              <EmailItem key={subMenu.id} email={subMenu} />
            )
          )
        )}
    </div>
  );
}

export { EmailsContainer };
