import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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
