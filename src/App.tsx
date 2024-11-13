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
  Slide,
  Tooltip,
} from '@chakra-ui/react';
import { ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageProvider';

const App: React.FC = () => {
  const { isSpanish } = useLanguage();
  const [selectedSection, setSelectedSection] = useState<string>("");
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.900', 'gray.100');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerElement = document.querySelector('header');
      
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        
        setShowScrollTop(headerRect.bottom < 0 || currentScrollY > 200);
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Stack minHeight="100vh">
      <Box zIndex={1} color={color} transition="all 0.3s ease-in-out">
        {/* Mobile Menu Button */}
        <Box display={{ base: 'block', md: 'none' }} position="fixed" top={6} left={4} zIndex={1000}>
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

        {/* Main Content */}
        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} px={{ base: 4, md: 8 }}>
          {/* Sidebar */}
          <Flex display={{ base: "none", md: "block" }} flexShrink={0} w={{ md: "280px", lg: "325px" }}>
            <Sidebar />
          </Flex>

          {/* Scroll to Top Button */}
            <Slide direction="bottom" in={showScrollTop} style={{ zIndex: 1000, top:"40vw", left:"auto", right:"1.8vw"}}>
              <Tooltip label={isSpanish ? 'Volver arriba' : 'Back to top'}>
              <IconButton
                aria-label="Scroll to top"
                icon={<ChevronUpIcon />}
                onClick={scrollToTop}
                variant="outline"
                boxShadow="md"
                colorScheme="pink"
                size="lg"
                isRound
                _hover={{ transform: 'translateY(-5px)' }}
                transition="all 0.5s"
              />
              </Tooltip>
            </Slide>

          {/* Main Content Sections */}
          <Box p={8} display="flex" flexDir="column" gap={{base: 2, md:12}}>
            <Box display={{base: "none", md:"flex"}}>
              <Header
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                isMobile={false}
              />
            </Box>

            <Home id="home-section" setSelectedSection={setSelectedSection} />
            <Projects id="projects-section" />
            <About id="about-section" />
            <Resume id="resume-section" />
            <Contact id="contact-section" />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default App;
