import { LoginButton, LoginContainer, ThemeButton } from "./styles";
import useViewModel from "./ViewModel";

export function LoginPage() {
  const {
    onButtonSignInClicked,
    username,
    isAuthenticated,
    onCLickChangeTheme,
  } = useViewModel();

  const split = username.split(" ");

  return (
    <LoginContainer>
      {isAuthenticated && (
        <h1>
          {split[0][0]} {split[1][0]}
        </h1>
      )}

      <LoginButton variant="contained" onClick={onButtonSignInClicked}>
        Login
      </LoginButton>
      <ThemeButton variant="contained" onClick={onCLickChangeTheme}>
        Change Theme
      </ThemeButton>
    </LoginContainer>
  );
}
