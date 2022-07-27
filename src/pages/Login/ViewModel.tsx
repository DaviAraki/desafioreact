import { useState } from 'react';
import * as FirebaseController from '../../services/firebaseController';

export default function LoginPageViewModel() {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function onButtonSignInClicked() {
    setErrorMessage('');
    try {
      const userCredentials = await FirebaseController.signInWithGoogle();
      setUsername(userCredentials.user.displayName!);

      setIsAuthenticated(true);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }

  return {
    username,
    setUsername,

    onButtonSignInClicked,
    isAuthenticated,
    setIsAuthenticated,
    errorMessage,
    setErrorMessage,
  };
}
