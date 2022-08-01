import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setEmailFilter } from '../../store/slices/emailSlice';

export default function SearchInputViewModel() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.emails);

  //essa função guarda o input do usuário para filtrar os emails
  const handleChange = (e: string) => {
    dispatch(setEmailFilter(e));
  };

  return { handleChange, items };
}
