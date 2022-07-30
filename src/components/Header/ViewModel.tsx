import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice';
import * as FirebaseController from '../../services/firebase/firebaseController';
import { useEffect, useState } from 'react';
import { setAuthentication } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function TextMenuViewModel() {
  const [errorMessage, setErrorMessage] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   !isAuthenticated && navigate('/');
  // }, [isAuthenticated, navigate]);

  function onCLickChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    dispatch(changeTheme(theme));
  }, [dispatch, theme]);

  async function onButtonLogoutClick() {
    setErrorMessage('');
    try {
      await FirebaseController.logout();
      dispatch(setAuthentication(false));
      navigate('/');
      console.log('oi222');
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
