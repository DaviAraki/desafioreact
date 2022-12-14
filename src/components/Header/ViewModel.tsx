import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice';
import * as FirebaseController from '../../services/firebase/firebaseController';
import { useEffect, useState } from 'react';
import { setAuthentication } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function HeaderViewModel() {
  const [errorMessage, setErrorMessage] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Essa função verifica se o usuário está logado e se não estiver, redireciona para a página de login
  useEffect(() => {
    !isAuthenticated && navigate('/');
  }, [isAuthenticated, navigate]);

  function onCLickChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    dispatch(changeTheme(theme));
  }, [dispatch, theme]);

  //essa função desloga o usuário
  async function onButtonLogoutClick() {
    setErrorMessage('');
    try {
      await FirebaseController.logout();
      dispatch(setAuthentication(false));
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
        alert(errorMessage);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }

  return {
    onCLickChangeTheme,
    onButtonLogoutClick,
    isAuthenticated,
  };
}
