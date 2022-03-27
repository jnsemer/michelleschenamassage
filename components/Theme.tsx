import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C42D2D',
    },
    secondary: {
      main: '#6883BA', //'#74A3A4',
    },
    info: {
      main: '#E1F6FA',
    },
    background: {
      default: '#FDFFFC',
      paper: '#FDFFFC',
    },
    divider: '#414141',
  },
  typography: {
    fontFamily: ['Roboto Slab'].join(','),
  },
});