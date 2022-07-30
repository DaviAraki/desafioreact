import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F23005',
    },
    secondary: {
      main: '#0000FF',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

export { darkTheme };
