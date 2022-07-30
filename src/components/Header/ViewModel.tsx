import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/themeSlice";
import * as FirebaseController from "../../services/firebaseController";
import { useState } from "react";
import { setAuthentication } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

export default function TextMenuViewModel() {
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onCLickChangeTheme() {
    dispatch(changeTheme());
  }

  async function onButtonLogoutClick() {
    setErrorMessage("");
    try {
      await FirebaseController.logout();
      navigate("/");
      dispatch(setAuthentication(false));
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
        alert(errorMessage);
      } else {
        console.log("Unexpected error", err);
      }
    }
  }

  return {
    onCLickChangeTheme,
    onButtonLogoutClick,
    isAuthenticated,
  };
}
