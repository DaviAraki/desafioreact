import { Divider } from '@mui/material';
import { UserInfoContainer, UserInitialsContainer } from './styles';
import useViewModel from './ViewModel';

function UserInfo() {
  const { initials } = useViewModel();

  return (
    <>
      <UserInfoContainer>
        <UserInitialsContainer>{initials}</UserInitialsContainer>
      </UserInfoContainer>
      <Divider variant='middle' />
    </>
  );
}

export { UserInfo };
