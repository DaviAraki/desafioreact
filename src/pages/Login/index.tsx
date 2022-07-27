import { Button } from '@mui/material';
import { LoginContainer } from './styles';
import useViewModel from './ViewModel';

export function LoginPage() {
  const { onButtonSignInClicked, username, isAuthenticated } = useViewModel();

  const split = username.split(' ');

  return (
    <LoginContainer>
      {isAuthenticated && (
        <h1>
          {split[0][0]} {split[1][0]}
        </h1>
      )}

      <Button
        variant='contained'
        color='warning'
        onClick={onButtonSignInClicked}
      >
        Login
      </Button>
    </LoginContainer>
  );
}
