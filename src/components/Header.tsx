import React from 'react';
import { Button, VStack, HStack, useColorModeValue, IconButton } from '@chakra-ui/react';
import { ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

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

  const sections = ['Home', 'Projects', 'About Me', 'Resume', 'Contact'];
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
            _hover={{
              boxShadow: '0px 0px 12px 1px #ce3072',
              bg: buttonHoverBg,
            }}
            _active={{
              boxShadow: '0px 0px 22px 0px #ce3072',
              bg: buttonActiveBg,
            }}
            transition="all 0.3s ease-in-out"
            borderRadius="8px"
            px={{ base: 4, md: 8 }}
            width={isMobile ? '100%' : 'auto'}
          >
            {section}
          </Button>
        ))}
      </Container>

      <HStack spacing={4}>
        <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          bg={buttonBg}
          size={isMobile ? 'md' : 'md'}
          color={buttonColor}
          transition="all 0.2s ease-in-out"
          borderRadius="8px"
          _hover={{
            boxShadow: "0px 0px 8px 1px #4EC6C9",
            bg: buttonHoverBg
          }}
          _active={{
            boxShadow: "0px 0px 12px 2px #4EC6C9",
            bg: buttonActiveBg
          }}
          px={{ base: 2, md: 4 }}

        />
        <Button
          size={['md', 'lg']}
          variant="outline"
          boxShadow={'md'}
          colorScheme="pink"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          rightIcon={<ExternalLinkIcon />}
          px={{ base: 4, md: 8 }}
        >
          Let's Talk
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
