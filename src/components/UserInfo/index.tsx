import { Divider } from '@mui/material';
import { UserInitials } from '../UserInitials';
import { UserInfoContainer } from './styles';
import useViewModel from './ViewModel';

function UserInfo() {
  const { initials } = useViewModel();

  return (
    <>
      <UserInfoContainer>
        <UserInitials>{initials}</UserInitials>
      </UserInfoContainer>
      <Divider variant='middle' />
    </>
  );
}

export { UserInfo };
