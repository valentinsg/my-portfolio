import React from 'react';
import { Box, Button, VStack, HStack, useColorModeValue } from '@chakra-ui/react';

interface HeaderProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ selectedSection, setSelectedSection, colorMode, toggleColorMode, isMobile }) => {
  const buttonBg = useColorModeValue('gray.200', 'gray.700');
  const buttonColor = useColorModeValue('gray.800', 'gray.300');
  const buttonHoverBg = useColorModeValue('gray.300', 'gray.600');
  const buttonActiveBg = useColorModeValue('gray.400', 'gray.500');

  const sections = ['Home', 'Projects', 'About', 'Resume', 'Contact'];

  const Container = isMobile ? VStack : HStack;

  return (
    <Container
      as="header"
      p={6}
      justifyContent={isMobile ? "flex-start" : { base: "center", md: "flex-start" }}
      spacing={6}
      bg="transparent"
      ml={isMobile ? 0 : { base: "0", md: "23vw" }}
      wrap="wrap"
    >
      {sections.map((section, index) => (
        <Button
          key={index}
          onClick={() => setSelectedSection(section)}
          color={buttonColor}
          bg={selectedSection === section ? buttonActiveBg : buttonBg}
          fontFamily="'Orbitron', sans-serif"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          _hover={{
            boxShadow: "0px 0px 14px 1px #ce3072",
            bg: buttonHoverBg
          }}
          _active={{
            boxShadow: "0px 0px 22px 0px #ce3072",
            bg: buttonActiveBg
          }}
          transition="all 0.3s ease-in-out"
          borderRadius="8px"
          px={{ base: 4, md: 8 }}
          width={isMobile ? "100%" : "auto"}
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
          transition="all 0.2s ease-in-out"
          borderRadius="8px"
          px={{ base: 4, md: 6 }}
        >
          Let's Talk
        </Button>
      </Box>
    </Container>
  );
};

export default Header;