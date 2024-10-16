import React from 'react';
import { Box, Button, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import { DownloadIcon, ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons';

interface HomeProps {
  setSelectedSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedSection }) => {
  const textColor = 'whiteAlpha.900';
  const accentColor = 'pink.300';

  const handleScrollToContact = () => {
    setSelectedSection('Contact'); 
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      minH="70vh"
      w="full"
      ml={{ base: 0, md: 6 }}
      display="flex"
      flexDir="column"
      alignItems="flex-start"
    >
      <VStack alignItems="flex-start" userSelect={"none"}>
        <Text
          fontSize={['6xl', '7xl', '8xl', '9xl']}
          fontWeight="1000"
          color={textColor}
        >
          I'm
        </Text>
        <Text
          fontSize={['6xl', '7xl', '8xl', '9xl']}
          fontWeight="1000"
          color={textColor}
          lineHeight={10}
        >
          Valentín
        </Text>
        <Text
          fontSize={['6xl', '7xl', '8xl', '9xl']}
          fontWeight="1000"
          color={textColor}
        > 
          Sánchez Guevara
        </Text>
        <Text
          fontSize={['xl', '2xl', '5xl']}
          color={accentColor}
          fontFamily={"monospace"}
          mt={-12}
        >
          Helping businesses thrive through digitalization.    
        </Text>
        <Text
          fontSize={['md', 'lg', 'xl']}
          color={textColor}
          fontWeight="light"
          mt={-4}
        >
          Based in Mar del Plata, Argentina
        </Text>
      </VStack>

      <HStack spacing={4} mt={"auto"} alignItems="center">
        <Button
          size={['md', 'lg']}
          boxShadow={'md'}
          colorScheme="pink"
          leftIcon={<DownloadIcon />}
          _hover={{ bg: 'pink.300' }}  
          _active={{ bg: 'pink.500' }}  
        >
          Download CV
        </Button>
        <Button
          size={['md', 'lg']}
          variant="outline"
          boxShadow={'md'}
          colorScheme="pink"
          rightIcon={<ExternalLinkIcon />}
          onClick={() => setSelectedSection('Projects')}
        >
          View My Works
        </Button>

        {/* Nueva flecha que lleva a la sección de contacto */}
        <IconButton
          size="lg"
          aria-label="Scroll to contact"
          icon={<ChevronDownIcon />}
          isRound
          onClick={handleScrollToContact}
          colorScheme="pink"
          boxShadow={'md'}
          _hover={{ bg: 'pink.300' }}
          _active={{ bg: 'pink.500' }}
        />
      </HStack>
    </Box>
  );
};

export default Home;
