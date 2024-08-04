import {
  
  Button,
  useColorMode, useColorModeValue,
  Icon,

} from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

function DarkMode({ }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleButtonText = colorMode === 'light' ? 'Dark Mode' : 'Light Mode';
  const navbarIcon = useColorModeValue('gray.400', 'white');

  return (
     <div className='flex items-center justify-end'>
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
        />
      </Button>
     </div>
  );
}

export default DarkMode;
