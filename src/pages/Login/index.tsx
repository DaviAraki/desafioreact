import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";
import { LoginButton, LoginContainer, ThemeButton } from "./styles";
import useViewModel from "./ViewModel";
import i18n from "../../i18n";

export function LoginPage() {
  const {
    onButtonSignInClicked,
    username,
    isAuthenticated,
    onCLickChangeTheme,
  } = useViewModel();

  const { t } = useTranslation();

  const [language, setLanguage] = useLocalStorage("language", "ptBR");

  const split = username.split(" ");

  const changeLanguage = (chosenLanguage: string) => {
    setLanguage(chosenLanguage);
    i18n.changeLanguage(chosenLanguage);
  };
  console.log(language);

  return (
    <LoginContainer>
      {isAuthenticated && (
        <h1>
          {split[0][0]} {split[1][0]}
        </h1>
      )}
      <h1>{language}</h1>
      <h1>{t("Settings")}</h1>
      <LoginButton variant="contained" onClick={onButtonSignInClicked}>
        Login
      </LoginButton>
      <ThemeButton variant="contained" onClick={onCLickChangeTheme}>
        Change Theme
      </ThemeButton>
      <button onClick={() => changeLanguage("enUS")}>enUS</button>
      <button onClick={() => changeLanguage("ptBR")}>ptBR</button>
      <button onClick={() => changeLanguage("esES")}>esES</button>
    </LoginContainer>
  );
}
