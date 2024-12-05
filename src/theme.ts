import { ThemeProvider, createTheme } from '@rneui/themed';

export default createTheme({
  lightColors: {
    primary: '#e7e7e8',
    secondary: '#000',
    background: '#fff',
  },
  darkColors: {
    primary: '#000',
    secondary: '#fff',
    background: '#000',
  },
  mode: 'light',
});