import React from 'react';
import { Button, useColorModeValue, IconButton, Box, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageProvider';
import { Menu, MenuButton, MenuList, MenuItem, Tooltip } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface HeaderProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ selectedSection, setSelectedSection, colorMode, toggleColorMode, isMobile }) => {
  const { isSpanish, toggleLanguage } = useLanguage();

  const buttonBg = useColorModeValue('gray.200', 'gray.700');
  const buttonColor = useColorModeValue('gray.800', 'gray.300');
  const buttonHoverBg = useColorModeValue('gray.300', 'gray.600');

  const sectionConfig: { [key in 'Home' | 'Projects' | 'About Me' | 'Resume' | 'Contact' | 'Inicio' | 'Proyectos' | 'Sobre Mí' | 'Currículum' | 'Contacto']: string } = {
    'Home': 'home',
    'Projects': 'projects',
    'About Me': 'about',
    'Resume': 'resume',
    'Contact': 'contact',
    'Inicio': 'home',
    'Proyectos': 'projects',
    'Sobre Mí': 'about',
    'Currículum': 'resume',
    'Contacto': 'contact'
  };

  const sections = isSpanish
    ? ['Inicio', 'Proyectos', 'Sobre Mí', 'Currículum', 'Contacto']
    : ['Home', 'Projects', 'About Me', 'Resume', 'Contact'];

  const scrollToSection = (section: keyof typeof sectionConfig) => {
    const sectionId = `${sectionConfig[section]}-section`;
    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setSelectedSection(section);
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align={{ base: "stretch", md: "center" }}
      gap={6}
      w="100%"
      maxW="1400px"
      mx="auto"
    >
      {/* Navigation Section */}
      <Flex
        gap={{base: 4, md: 2}}
        flex="1"
        flexWrap="wrap"
        justify={{ base: "center", md: "flex-start" }}
        flexDir={{ base: "column", md: "row" }}
      >
        {sections.map((section, index) => (
          <Tooltip key={index} label={section} fontSize="sm">
            <Button
              onClick={() => scrollToSection(section as keyof typeof sectionConfig)}
              color={buttonColor}
              bg={selectedSection === section ? buttonBg : buttonBg}
              fontFamily="monospace"
              fontSize={{ base: 'md', sm: 'sm', md: 'md' }}
              px={{ base: 2, sm: 3, md: 4 }}
              height={{ base: "35px", md: "45px" }}
              minW={{ base: "auto", md: "auto" }}
              transition="all 0.3s ease-in-out"
              borderRadius="8px"
              _hover={{ bg: buttonHoverBg }}
            >
              {section}
            </Button>
          </Tooltip>
        ))}
      </Flex>

      {/* Controls Section */}
      <Flex
        gap={2}
        justify={{ base: "center", md: "flex-end" }}
        align="center"
        flexDir={{base: "column", md: "row"}}
        flexShrink={0}
      >
        {/* Language Selector */}
        <Menu>
          <Tooltip label={isSpanish ? 'Cambiar idioma' : 'Change language'}>
            <MenuButton
              as={Button}
              size={{ base: "sm", md: "md" }}
              fontFamily="monospace"
              color={buttonColor}
              bg={buttonBg}
              _hover={{ bg: buttonHoverBg }}
              rightIcon={<ChevronDownIcon />}
            >
              <Box w="20px" h="20px" display="flex" justifyContent="center" alignItems="center">
                {isSpanish ?
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="Argentina Flag" /> :
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag" />
                }
              </Box>
            </MenuButton>
          </Tooltip>
          <MenuList>
            <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="Argentina Flag" width="20" height="20" />} onClick={toggleLanguage}>
              Español
            </MenuItem>
            <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag" width="20" height="20" />} onClick={toggleLanguage}>
              English
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Theme Toggle */}
        <Tooltip label={isSpanish ? 'Cambiar modo' : 'Change mode'}>
          <IconButton
            aria-label="Dark Mode Toggle"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            bg={buttonBg}
            size={{ base: "sm", md: "md" }}
            color={buttonColor}
            _hover={{ bg: buttonHoverBg }}
          />
        </Tooltip>

        {/* Contact Button */}
        <Tooltip label={isSpanish ? 'Agenda una reunión conmigo' : 'Schedule a meeting with me'}>
          <Button
            variant="outline"
            colorScheme="pink"
            size={{ base: "md", md: "md" }}
            rightIcon={<ExternalLinkIcon />}
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0aKsiCw2ol12PWw6vXoe4hlEkeje1TK5ldpY29MFj-cclKi8ALgE1peSmD7JCH4jYw5pay1Rx7', '_blank')}
          >
            {isSpanish ? 'Habla conmigo' : "Let's Talk"}
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;