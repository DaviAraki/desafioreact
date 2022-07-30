import { useTranslation } from 'react-i18next';
import { LoginButton, LoginContainer } from './styles';
import useViewModel from './ViewModel';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function LoginPage() {
  const { onButtonSignInClicked, isAuthenticated } = useViewModel();

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate('/home');
  }, [isAuthenticated, navigate]);

  return (
    <LoginContainer>
      <h1>{t('Settings')}</h1>
      <LoginButton variant='contained' onClick={onButtonSignInClicked}>
        Login
      </LoginButton>
    </LoginContainer>
  );
}
