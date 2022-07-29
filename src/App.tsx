import "./App.css";
import { LoginPage } from "./pages/Login";
import { lightTheme } from "./styles/themes/light";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledTheme } from "styled-components";
import { darkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const { isLightTheme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <StyledTheme theme={isLightTheme ? lightTheme : darkTheme}>
        <LoginPage />
        <GlobalStyle />
      </StyledTheme>
    </ThemeProvider>
  );
}

export default App;
