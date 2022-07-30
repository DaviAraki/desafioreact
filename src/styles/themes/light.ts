import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F23005',
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
