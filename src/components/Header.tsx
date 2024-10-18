import React from 'react';
import { Button, VStack, HStack, useColorModeValue, IconButton } from '@chakra-ui/react';
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
  const buttonActiveBg = useColorModeValue('gray.400', 'gray.500');

  const sections = isSpanish
    ? ['Inicio', 'Proyectos', 'Sobre Mí', 'Currículum', 'Contacto']
    : ['Home', 'Projects', 'About Me', 'Resume', 'Contact'];

  const Container = isMobile ? VStack : HStack;

  return (
    <HStack justify="space-between" alignItems="center" p={4} w="100%">
      <Container spacing={4}>
        {sections.map((section, index) => (
          <Button
            key={index}
            onClick={() => setSelectedSection(section)}
            color={buttonColor}
            bg={selectedSection === section ? buttonActiveBg : buttonBg}
            fontFamily="monospace"
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            transition="all 0.3s ease-in-out"
            borderRadius="8px"
            px={{ base: 4, md: 8 }}
            width={isMobile ? '100%' : 'auto'}
            _hover={{ bg: buttonHoverBg }}
            _active={{ bg: buttonActiveBg }}
          >
            {section}
          </Button>
        ))}
      </Container>

      <HStack spacing={4}>

        <Tooltip label={isSpanish ? 'Cambiar idioma' : 'Change language'} fontSize="md">
          <Menu>
            <MenuButton as={Button} fontFamily="monospace" color={buttonColor} bg={buttonBg} _hover={{ bg: buttonHoverBg }} fontSize={{ base: "sm", md: "md", lg: "lg" }} rightIcon={<ChevronDownIcon />}>
              {isSpanish ? <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="Argentina Flag" width="20" height="20" /> : <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag" width="20" height="20" />}
            </MenuButton>
            <MenuList>
              <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="Argentina Flag" width="20" height="20" />} onClick={toggleLanguage}>
                Español
              </MenuItem>
              <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag" width="20" height="20" />} onClick={toggleLanguage}>
                English
              </MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>
        <IconButton
          aria-label="Dark Mode Toggle"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          bg={buttonBg}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color={buttonColor}
          _hover={{ bg: buttonHoverBg }}
          _active={{ bg: buttonActiveBg }}
        />
        <Button
          variant="outline"
          boxShadow={'md'}
          colorScheme="pink"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          px={{ base: 2, md: 4 }}
          rightIcon={<ExternalLinkIcon />}
          onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0aKsiCw2ol12PWw6vXoe4hlEkeje1TK5ldpY29MFj-cclKi8ALgE1peSmD7JCH4jYw5pay1Rx7', '_blank')}
        >
          {isSpanish ? 'Habla conmigo' : "Let's Talk"}
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
