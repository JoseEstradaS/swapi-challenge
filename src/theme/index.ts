import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    error: {
      main: '#EC5757'
    },
    primary: {
      main: '#121212',
      light: '#828282',
      dark: '#333333'
    }
  },  
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Arial", sans-serif',
    h2: {
      fontSize: '17px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400
    },
  },
});

export default theme;