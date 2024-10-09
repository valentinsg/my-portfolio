import { Box, Button, HStack, useColorMode } from '@chakra-ui/react';

export interface HeaderProps {
  setSelectedPage: (page: string) => void;
}


const Header: React.FC<HeaderProps> = ({ setSelectedPage }) => {
  const { colorMode, toggleColorMode } = useColorMode();

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
      {['Home', 'Projects', 'About', "Resume", 'Contact'].map((text, index) => (
        <Button
          key={index}
          color="gray.300"
          fontFamily="monospace"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          _hover={{ boxShadow: "0px 0px 14px 1px #414358", bg: "#414358" }}
          _active={{ boxShadow: "0px 0px 22px 0px #414358", bg: "#414358" }}
          transition="all 0.3s ease-in-out"
          borderRadius="8px"
          px={{ base: 4, md: 8 }}
          onClick={() => setSelectedPage(text)}  // Set the page on click
        >
          {text}
        </Button>
      ))}
      
      {/* Dark/Light mode toggle button */}
      <Box display={"flex"} ml={"auto"}>
        <Button
          onClick={toggleColorMode}
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
