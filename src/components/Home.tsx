import React from 'react';
import { Box, Button, Heading, Text, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';

interface HomeProps {
  setSelectedSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedSection }) => {
  const headingColor = useColorModeValue('pink.500', 'pink.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box minHeight="calc(100vh - 100px)" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" fontFamily="'Orbitron', sans-serif" color={headingColor}>
          Welcome to My Portfolio
        </Heading>
        <Text fontSize="xl" color={textColor} fontFamily="'Roboto', sans-serif">
          Hi, I'm Valentín Sánchez Guevara. I'm a Frontend Developer and Creative based in Mar del Plata, Argentina.
        </Text>
        <HStack spacing={4}>
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme="pink"
            variant="solid"
            onClick={() => {
              // Add logic to download CV
              console.log('Downloading CV');
            }}
          >
            Download CV
          </Button>
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            variant="outline"
            onClick={() => setSelectedSection('Projects')}
          >
            View My Projects
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Home;