import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#FF8C00',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4CAF50',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#FF8C00',
          '&:hover': {
            backgroundColor: '#F57C00',
          },
        },
        outlined: {
          borderColor: '#4CAF50',
          color: '#4CAF50',
          '&:hover': {
            borderColor: '#388E3C',
            backgroundColor: 'rgba(76, 175, 80, 0.04)',
          },
        },
      },
    },
  },
});

export default theme;
