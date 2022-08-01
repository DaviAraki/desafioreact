import { useSelector } from 'react-redux';
import { RootState } from '../../store';

//Essa função pega o nome do usuário logado e retorna as iniciais
export default function UserInfoViewModel() {
  const { name } = useSelector((state: RootState) => state.user.userData);

  const initials =
    name &&
    name
      .split(' ')
      .map((word) => word[0])
      .join('');

  return {
    initials,
  };
}
