import React from 'react';
import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react';

interface HeaderProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedSection, setSelectedSection, colorMode, toggleColorMode }) => {
  const buttonBg = useColorModeValue('gray.200', 'gray.700');
  const buttonColor = useColorModeValue('gray.800', 'gray.300');
  const buttonHoverBg = useColorModeValue('gray.300', 'gray.600');
  const buttonActiveBg = useColorModeValue('gray.400', 'gray.500');

  const sections = ['Home', 'Projects', 'About', 'Resume', 'Contact'];

  return (
    <HStack
      as="header"
      p={6}
      justifyContent={{ base: "center", md: "flex-start" }}
      spacing={6}
      bg="transparent"
      ml={{ base: "0", md: "23vw" }}
      alignItems="center"
      wrap="wrap"
    >
      {sections.map((section, index) => (
        <Button
          key={index}
          onClick={() => setSelectedSection(section)}
          color={buttonColor}
          bg={selectedSection === section ? buttonActiveBg : buttonBg}
          fontFamily="monospace"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          _hover={{
            boxShadow: "0px 0px 14px 1px #414358",
            bg: buttonHoverBg
          }}
          _active={{
            boxShadow: "0px 0px 22px 0px #414358",
            bg: buttonActiveBg
          }}
          transition="all 0.3s ease-in-out"
          borderRadius="8px"
          px={{ base: 4, md: 8 }}
        >
          {section}
        </Button>
      ))}
      <Box display={"flex"} ml={"auto"} gap={4}>
        <Button
          onClick={toggleColorMode}
          color={buttonColor}
          bg={buttonBg}
          fontFamily="monospace"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          _hover={{
            boxShadow: "0px 0px 8px 1px #4EC6C9",
            bg: buttonHoverBg
          }}
          _active={{
            boxShadow: "0px 0px 12px 2px #4EC6C9",
            bg: buttonActiveBg
          }}
          transition="all 0.3s ease-in-out"
          borderRadius="8px"
          px={{ base: 4, md: 6 }}
        >
          {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
        <Button
          color="gray.300"
          fontFamily="monospace"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          bg="gray.700"
          _hover={{ boxShadow: "0px 0px 8px 1px #4EC6C9", bg: "gray.600" }}
          _active={{ boxShadow: "0px 0px 12px 2px #4EC6C9", bg: "gray.500" }}
          transition="all 0.2s ease-in-out"
          borderRadius="8px"
          px={{ base: 4, md: 6 }}
        >
          Let's Talk
        </Button>
      </Box>
    </HStack>
  );
};

export default Header;