import React, { useRef } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { Box, Flex, Drawer, DrawerBody, Icon, useColorModeValue, DrawerOverlay,
  useDisclosure, DrawerContent, DrawerCloseButton, Stack,} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

function SideBar() {
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(  "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",  "unset" );
  
  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarMargins = "0px";

  return (
    <Box display={{ sm: "none", xl: "block" }} w="100%" position='fixed' minH='100%'>
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w='300px'
        h='100vh'
        m={sidebarMargins}
        minH='100%'
        overflowX='hidden'
        boxShadow={shadow}>
        <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
        <Stack direction='column' mb='auto' mt='8px'>
          <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
            <div className='flex flex-col'>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
            </div>
            
          </Box>
        </Stack>
        </Flex>
      </Box>
    </Box>
  )
}

export function SidebarResponsive(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const sidebarBackgroundColor = useColorModeValue('white', 'navy.800');

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <Flex ref={btnRef} onClick={onOpen} cursor="pointer">
        <Icon as={IoMenuOutline} w="20px" h="20px" />
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left" finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg={sidebarBackgroundColor}>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction="column" height="100%" pt="25px" px="16px">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact
              </NavLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default SideBar