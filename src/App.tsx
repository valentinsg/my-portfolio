import React, { useState, useEffect } from 'react';
import {
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// #region Components Imports
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
// #endregion

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('Home');
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.900', 'gray.100');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (selectedSection) {
      const element = document.getElementById(`${selectedSection.toLowerCase()}-section`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedSection]);

  return (
    <Stack minHeight="100vh">
      <Box zIndex={1} color={color} transition="all 0.3s ease-in-out">
        <Box display={{ base: 'block', md: 'none' }} position="fixed" top={6} left={4} zIndex={20}>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            aria-label="Open menu"
            bg={useColorModeValue('white', 'gray.800')}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
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

        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} px={{ base: 4, md: 12 }}>
          <Flex flexShrink={0} w={{ base: "100%", md: "22vw", lg: "20vw" }} >
            <Sidebar />
          </Flex>

          <Box m={6} px={{ base: 4, md: 12 }}>
            <Header
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
              isMobile={false}
            />

            <Home setSelectedSection={setSelectedSection} />
            <Projects />
            <About />
            <Resume />
            <Contact />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default App;
