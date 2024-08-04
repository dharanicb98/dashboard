// src/theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    background: {
      default: mode === 'dark' ? '#141625' : '#FFFFFF',
      paper: mode === 'dark' ? '#1E1E2E' : '#FFFFFF',
    },
    text: {
      primary: mode === 'dark' ? '#FFFFFF' : '#252733',
      secondary: mode === 'dark' ? '#A4A6B3' : '#677489',
    },
    primary: {
      main: '#377DFF',
    },
    error: {
      main: '#FF4567',
    },
    success: {
      main: '#29CC97',
    },
  },
});

const lightTheme = createTheme(getDesignTokens('light'));
const darkTheme = createTheme(getDesignTokens('dark'));

export { lightTheme, darkTheme };
