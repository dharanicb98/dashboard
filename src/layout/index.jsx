import React, { useState } from 'react'
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import { createContext } from "react";
import SideBar, { SidebarResponsive } from './sideBar';
import Header from './header';

function Layout({children}) {
 const [toggleSidebar, setToggleSidebar] = useState(false);
 const SidebarContext = createContext();
 const { onOpen } = useDisclosure();

  return (
    <Box>
        <SidebarContext.Provider
            value={{toggleSidebar,setToggleSidebar}}>
          <SideBar/>
          <SidebarResponsive />
          
          <Box 
           float="right"
           minHeight="100vh"
           height="100%"
           overflow="auto"
           position="relative"
           maxHeight="100%"
           w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
           maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
           transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
           transitionDuration=".2s, .2s, .35s"
           transitionProperty="top, bottom, width"
           transitionTimingFunction="linear, linear, ease">
            <Box
                mx="auto"
                p={{ base: '20px', md: '30px' }}
                pe="20px"
                minH="100vh"
                pt="50px">

                {children}
            </Box>

          </Box>
        </SidebarContext.Provider>
    </Box>
  )
}

export default Layout