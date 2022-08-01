import { useEffect, useState } from 'react';
import * as FirebaseController from '../../services/firebase/firebaseController';
import { UserCredential } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  setAuthentication,
  setUser,
  UserInfo,
} from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginPageViewModel() {
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate('/home');
  }, [isAuthenticated, navigate]);

  const saveUser = (userCredentials: UserCredential) => {
    const user = {
      name: userCredentials.user.displayName!,
      email: userCredentials.user.email!,
      avatar: userCredentials.user.photoURL!,
      userId: userCredentials.user.uid,
    } as UserInfo;
    user && dispatch(setUser(user));
  };

  async function onButtonSignInClicked() {
    setErrorMessage('');
    try {
      const userCredentials = await FirebaseController.signInWithGoogle();
      saveUser(userCredentials);
      dispatch(setAuthentication(true));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }

  return {
    onButtonSignInClicked,
    isAuthenticated,
    errorMessage,
    setErrorMessage,
  };
}
