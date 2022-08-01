import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  type Theme = CustomTheme;
  type ThemeOptions = CustomTheme;
}

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
