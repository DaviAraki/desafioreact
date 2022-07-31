import { Email, subMenu } from '../../store/slices/emailSlice';
import { Input } from './styles';
import useViewModel from './ViewModel';

function SearchInput() {
  const { handleChange, items } = useViewModel();

  return (
    <>
      <Input
        id='task'
        list='task-suggestions'
        placeholder='Pesquisar'
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <datalist id='task-suggestions'>
        {items?.map((email: Email) =>
          email?.subMenuItems?.map((subMenu: subMenu) => (
            <option key={subMenu.id} value={subMenu.subject} />
          ))
        )}
      </datalist>
    </>
  );
}

export { SearchInput };
