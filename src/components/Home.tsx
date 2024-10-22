import React from 'react';
import { Box, Button, Text, VStack, IconButton, Tooltip, useColorModeValue, Stack } from '@chakra-ui/react';
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageProvider';
import { FaAddressBook } from 'react-icons/fa';

interface HomeProps {
  setSelectedSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedSection }) => {
  const { isSpanish } = useLanguage();

  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const accentColor = useColorModeValue('pink.600', 'pink.300');

  const handleScrollToContact = () => {
    setSelectedSection(isSpanish ? 'Contacto' : 'Contact');
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      minH={{base: "100vh", md: "70vh"}}
      w="full"
      ml={{ base: 0, md: 6 }}
      display="flex"
      flexDir="column"
      justifyContent={{base: "center" , md: "flex-start"}}
      alignItems={{base: "center" , md: "flex-start"}}
    >
      <VStack alignItems={{base: "center" , md: "flex-start"}} textAlign={{base: "center", md: "left"}} userSelect={"none"}>
        <Text
          fontSize={['6xl', '7xl', '8xl', '9xl']}
          fontWeight="1000"
          color={textColor}
          lineHeight={{base: 0.9, md: 0}}
        >
          {isSpanish ? 'Soy' : 'I am'}
        </Text>
        <Text
          fontSize={['6xl', '7xl', '8xl', '9xl']}
          fontWeight="1000"
          color={textColor}
          lineHeight={{base: 0.9, md: 0.5}}
        >
          Valentín
        </Text>
        <Text
          fontSize={['6xl', '7xl', '8xl', '9xl']}
          fontWeight="1000"
          lineHeight={{base: 0.9, md: 0}}
          color={textColor}
        >
          Sánchez Guevara
        </Text>
        <Text
          fontSize={['xl', '2xl', '5xl']}
          color={accentColor}
          fontFamily={"monospace"}
          mt={{base: 0, md: -12}}
        >
          {isSpanish ? 'Mejorando empresas a través de la digitalización.' : 'Helping businesses thrive through digitalization.'}
        </Text>
        <Text
          fontStyle={'italic'}
          fontSize={['md', 'lg', '2xl']}
          color={textColor}
          mt={-4}
        >
          {isSpanish ? 'Viviendo en Mar del Plata, Argentina' : 'Based in Mar del Plata, Argentina'}
        </Text>
      </VStack>

      <Stack spacing={{base: 6, md: 5}} mt={{base: "4", md:"auto"}} alignItems="center" direction={{base: "column", md: "row"}}>
        <Tooltip label={isSpanish ? 'Descargar CV' : 'Download CV'} placement="top">
          <span>
            <Button
              size={['md', 'lg']}
              boxShadow={'md'}
              colorScheme="pink"
              fontFamily={'monospace'}
              leftIcon={<DownloadIcon />}
              _hover={{ bg: 'pink.300' }}
              _active={{ bg: 'pink.500' }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv-valen.pdf';
                link.download = isSpanish ? 'Valentin_Sanchez_Guevara_Curriculum.pdf' : 'Valentin_Sanchez_Guevara_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              {isSpanish ? 'Descargar CV' : 'Download CV'}
            </Button>
          </span>
        </Tooltip>
        <Tooltip label={isSpanish ? 'Ver mis proyectos' : 'View my projects'} placement="top">
          <span>
            <Button
              size={['md', 'lg']}
              variant="outline"
              boxShadow={'md'}
              colorScheme="pink"
              fontFamily={'monospace'}
              rightIcon={<ExternalLinkIcon />}
              onClick={() => setSelectedSection('Projects' )}
            >
              {isSpanish ? 'Mis Trabajos' : 'View My Works'}
            </Button>
          </span>
        </Tooltip>

        {/* Nueva flecha que lleva a la sección de contacto */}
        <Tooltip label={isSpanish ? 'Contactarme' : 'Scroll to Contact'} placement="top">
          <IconButton
            size="lg"
            aria-label="Scroll to contact"
            icon={<FaAddressBook />} 
            isRound
            onClick={handleScrollToContact}
            colorScheme="pink"
            boxShadow={'md'}
            _hover={{ bg: 'pink.300' }}
            _active={{ bg: 'pink.500' }}
          />
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Home;
