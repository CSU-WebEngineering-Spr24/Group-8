import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // Define your theme palette here
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    // Define dark or light mode
    mode: 'dark',
  },
  // You can add other theme customizations here
});

export default theme;
