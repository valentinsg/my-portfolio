import React from 'react';
import { Box, Button, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import { DownloadIcon, ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons';

interface HomeProps {
  setSelectedSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedSection }) => {
  const textColor = 'whiteAlpha.900';
  const accentColor = 'pink.400';

  const handleScrollToContact = () => {
    setSelectedSection('Contact'); // O si usas anclas, puedes hacer scroll directo
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      minH="70vh"
      w="full"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
    >
      <VStack alignItems="flex-start" mt={8} userSelect={"none"}>
        <Text
          fontSize={['6xl', '7xl', '8xl', '8xl']}
          fontWeight="bold"
          fontFamily={"monospace"}
          color={textColor}
          letterSpacing="wide"
        >
          I'm
        </Text>
        <Text
          fontSize={['6xl', '7xl', '8xl', '8xl']}
          fontWeight="bold"
          fontFamily={"monospace"}
          color={textColor}
          lineHeight={9}
          letterSpacing="wide"
        >
          Valentín
        </Text>
        <Text
          fontSize={['6xl', '7xl', '8xl', '8xl']}
          fontWeight="bold"
          color={textColor}
          fontFamily={"monospace"}
          letterSpacing="wide"
        >
          Sánchez Guevara
        </Text>
        <Text
          fontSize={['xl', '2xl', '4xl']}
          color={accentColor}
          fontWeight="bold"
          fontFamily={"monospace"}
          letterSpacing="wide"
          mt={-6}
        >
          Helping businesses thrive through digitalization.    
        </Text>
        <Text
          fontSize={['md', 'lg', '2xl']}
          color={textColor}
          fontWeight="light"
          letterSpacing="wide"          
          mt={-4}
        >
          Based in Mar del Plata, Argentina
        </Text>
      </VStack>

      <HStack spacing={8} mt={"auto"} mb={2} alignItems="center">
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
