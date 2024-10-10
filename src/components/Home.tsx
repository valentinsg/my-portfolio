import React from 'react';
import { Box, Button, Heading, Text, HStack, useColorModeValue } from '@chakra-ui/react';
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';

interface HomeProps {
  setSelectedSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedSection }) => {
  const headingColor = useColorModeValue('pink.500', 'pink.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box p={8} textAlign="center">
      <Heading size="2xl" color={headingColor} mb={6}>
        Welcome to My Portfolio
      </Heading>
      <Heading size="lg" color={textColor} mb={4}>
        Hi, I'm Valentín Sánchez Guevara
      </Heading>
      <Text fontSize="xl" color={textColor} mb={8}>
        I'm a Frontend Developer and Creative based in Mar del Plata, Argentina.
      </Text>
      <HStack spacing={4} justify="center">
        <Button
          colorScheme="pink"
          variant="solid"
          leftIcon={<DownloadIcon />}
          onClick={() => console.log('Downloading CV')}
        >
          Download CV
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          rightIcon={<ExternalLinkIcon />}
          onClick={() => setSelectedSection('Projects')}
        >
          View My Projects
        </Button>
      </HStack>
    </Box>
  );
};

export default Home;
