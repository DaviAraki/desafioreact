import { LoginButton, LoginContainer } from './styles';
import useViewModel from './ViewModel';

export function LoginPage() {
  const { onButtonSignInClicked } = useViewModel();

  return (
    <LoginContainer>
      <LoginButton variant='contained' onClick={onButtonSignInClicked}>
        Login
      </LoginButton>
    </LoginContainer>
  );
}
