import { useEffect, useState } from "react";
import * as FirebaseController from "../../services/firebaseController";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setAuthentication } from "../../store/slices/userSlice";

export default function LoginPageViewModel() {
  const auth = FirebaseController.firebaseAuth.getAuth();
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  async function onButtonSignInClicked() {
    setErrorMessage("");
    try {
      const userCredentials = await FirebaseController.signInWithGoogle();
      setUsername(userCredentials.user.displayName!);
      dispatch(setAuthentication(true));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthentication(true));
      }
      return () => {
        unsubscribe();
      };
    });
  }, [auth, dispatch]);

  return {
    username,
    setUsername,
    onButtonSignInClicked,
    isAuthenticated,
    errorMessage,
    setErrorMessage,
  };
}
