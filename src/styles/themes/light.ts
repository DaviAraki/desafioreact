import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F28705',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0000FF',
    },
    background: {
      default: '#F2F2F2',
    },
  },
});

export { lightTheme };
