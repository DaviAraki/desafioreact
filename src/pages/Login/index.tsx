import { useTranslation } from 'react-i18next';
import { LoginButton, LoginContainer } from './styles';
import useViewModel from './ViewModel';

export function LoginPage() {
  const { t } = useTranslation();
  const { onButtonSignInClicked } = useViewModel();

  return (
    <LoginContainer>
      <h1>{t('Settings')}</h1>
      <LoginButton variant='contained' onClick={onButtonSignInClicked}>
        Login
      </LoginButton>
    </LoginContainer>
  );
}
