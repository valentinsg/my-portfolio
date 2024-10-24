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
  useDisclosure
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
import { useLanguage } from './context/LanguageProvider';
// #endregion

const App = () => {
  // #region Hooks & State
  const { isSpanish } = useLanguage();
  const [selectedSection, setSelectedSection] = useState('Home');
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.900', 'gray.100');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setScrolled] = useState(false);
  // #endregion

  // #region Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // #endregion

  // #region Section Management
  const sections = {
    [isSpanish ? 'Inicio' : 'Home']: <Home setSelectedSection={setSelectedSection} />,
    [isSpanish ? 'Proyectos' : 'Projects']: <Projects />,
    [isSpanish ? 'Sobre Mí' : 'About Me']: <About />,
    [isSpanish ? 'Currículum' : 'Resume']: <Resume />,
    [isSpanish ? 'Contacto' : 'Contact']: <Contact />
  };

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setSelectedSection(section);
    if (typeof section === 'string') {
      const element = document.getElementById(`${section.toLowerCase()}-section`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  // #endregion

  return (
    <Box 
      position="relative" 
      minHeight="100vh"
      className="app-container"
    >
      {/* Main Content Container */}
      <Box 
        position="relative" 
        zIndex={1} 
        color={color} 
        transition="all 0.3s ease-in-out"
      >
        {/* Mobile Menu Button */}
        <Box 
          display={{ base: 'block', md: 'none' }} 
          position="fixed" 
          top={4} 
          left={4} 
          zIndex={20}
        >
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            aria-label="Open menu"
            bg={useColorModeValue('white', 'gray.800')}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
          />
        </Box>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Header
                  selectedSection={selectedSection}
                  setSelectedSection={(section) => {
                    handleSectionChange(section);
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

        {/* Main Layout */}
        <Box 
          display="flex" 
          flexDirection={{ base: 'column', md: 'row' }}
          maxWidth="1440px"
          px={{ base: 4, md: 12 }}
        >
          {/* Sidebar */}
          <Box flexShrink={0} w={{ base: "100%", md: "22vw", lg: "20vw" }} m={8}>
            <Sidebar />
          </Box>

          {/* Main Content */}
          <Box 
            flex={1} 
            m={4}
            px={{ base: 4, md: 10 }} 
          >
            {/* Desktop Header */}
              <Header
                selectedSection={selectedSection}
                setSelectedSection={handleSectionChange}
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                isMobile={false}
              />

            {/* Sections */}
            {Object.entries(sections).map(([key, component]) => (
              <Box 
                key={key}
                id={`${key.toLowerCase()}-section`}
                minHeight="100vh"
                py={20}
              >
                {component}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;