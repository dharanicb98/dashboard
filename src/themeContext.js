import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

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

const ThemeProviderComponent = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme(getDesignTokens(darkMode ? 'dark' : 'light'));

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderComponent, ThemeContext };
