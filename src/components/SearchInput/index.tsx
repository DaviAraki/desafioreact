import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Email, setEmailFilter, subMenu } from "../../store/slices/emailSlice";
import { Input } from "./styles";

function SearchInput() {
  const { items } = useSelector((state: RootState) => state.emails);
  const dispatch = useDispatch();

  const handleChange = (e: string) => {
    dispatch(setEmailFilter(e));
  };

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
