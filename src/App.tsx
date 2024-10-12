import React, { useState } from 'react';
import { ChakraProvider, Box, useColorMode, useColorModeValue, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [selectedSection, setSelectedSection] = useState('Home');
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderSection = () => {
    switch (selectedSection) {
      case 'Home':
        return <Home setSelectedSection={setSelectedSection} />;
      case 'Projects':
        return <Projects />;
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setSelectedSection={setSelectedSection} />;
    }
  };

  return (
    <ChakraProvider>
      <Box className="App" bg={bgColor} color={color} transition="all 0.3s ease-in-out" minHeight="100vh">
        <Box display={{ base: 'block', md: 'none' }} position="fixed" top={4} left={4} zIndex={20}>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            aria-label="Open menu"
          />
        </Box>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Header
                  selectedSection={selectedSection}
                  setSelectedSection={(section) => {
                    setSelectedSection(section);
                    onClose();
                  }}
                  colorMode={colorMode}
                  toggleColorMode={toggleColorMode}
                  isMobile={true}
                />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
          <Box display={{ base: 'none', md: 'block' }} width={{ md: '21vw' }} mx={8} my={12}>
            <Sidebar />
          </Box>
          <Box flex={1} px={{ base: 4, md: 2 }} py={{base: 6, md: 12}}>
            <Box display={{ base: 'none', md: 'block' }}>
              <Header
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                isMobile={false}
              />
            </Box>
            <Box mr={8} >
              {renderSection()}
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
