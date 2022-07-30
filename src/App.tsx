import "./App.css";
import { lightTheme } from "./styles/themes/light";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledTheme } from "styled-components";
import { darkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  const { isLightTheme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <StyledTheme theme={isLightTheme ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </StyledTheme>
    </ThemeProvider>
  );
}

export default App;
