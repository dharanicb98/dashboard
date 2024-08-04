import React, { useState } from 'react';
import './App.css';
import initialTheme from './theme/theme'; 
import {ChakraProvider} from '@chakra-ui/react';
import ProtectedRoutes from './routes/index.';

function App() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  return (
    <ChakraProvider theme={currentTheme}>
       <ProtectedRoutes currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>
    </ChakraProvider>
  );
}

export default App;
