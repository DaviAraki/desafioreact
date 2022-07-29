import { useState } from "react";
import { useDispatch } from "react-redux";
import * as FirebaseController from "../../services/firebaseController";
import { changeTheme } from "../../styles/themes/themeSlice";

export default function LoginPageViewModel() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  async function onButtonSignInClicked() {
    setErrorMessage("");
    try {
      const userCredentials = await FirebaseController.signInWithGoogle();
      setUsername(userCredentials.user.displayName!);

      setIsAuthenticated(true);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }
  }

  function onCLickChangeTheme() {
    dispatch(changeTheme());
  }

  return {
    username,
    setUsername,
    onButtonSignInClicked,
    isAuthenticated,
    setIsAuthenticated,
    errorMessage,
    setErrorMessage,
    onCLickChangeTheme,
  };
}
