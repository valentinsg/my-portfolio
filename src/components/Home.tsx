import React from 'react';
import { Flex, Button, Text, VStack, IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react';
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
  };

  return (
    <Flex
      minH={{ base: "100vh", md: "85vh" }}
      w="100%"
      flexDir="column"
      px={{ base: 4, md: "auto" }}
      m={6}
      gap={20}
    >
      <VStack
        alignItems={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        userSelect="none"
        spacing={2}
      >
        <Text fontSize={{ base: '4xl', md: '6xl', lg: '7vw' }} fontWeight="extrabold" color={textColor} lineHeight="1">
          {isSpanish ? 'Soy' : 'I am'}
        </Text>
        <Text fontSize={{ base: '4xl', md: '6xl', lg: '7vw' }} fontWeight="extrabold" color={textColor} lineHeight="1">
          Valentín
        </Text>
        <Text fontSize={{ base: '4xl', md: '6xl', lg: '7vw' }}fontWeight="extrabold" color={textColor} lineHeight="1">
          Sánchez Guevara
        </Text>
        <Text fontSize={{ base: 'lg', md: '2xl', lg: '2.3vw' }} color={accentColor} fontFamily="monospace" mt={-1}>
          {isSpanish ? 'Mejorando empresas a través de la digitalización.' : 'Helping businesses thrive through digitalization.'}
        </Text>
        <Text mb={4} fontStyle="italic" fontSize={{ base: 'sm', md: 'md', lg: '1.3vw' }} color={textColor} mt={-2}>
          {isSpanish ? 'Viviendo en Mar del Plata, Argentina' : 'Based in Mar del Plata, Argentina'}
        </Text>
      </VStack>

      <Flex
        gap={{ base: 4, lg: 6 }}
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Tooltip label={isSpanish ? 'Descargar CV' : 'Download CV'} placement="top">
          <span>
            <Button
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              boxShadow="md"
              colorScheme="pink"
              fontFamily="monospace"
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
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              variant="outline"
              boxShadow="md"
              colorScheme="pink"
              fontFamily="monospace"
              rightIcon={<ExternalLinkIcon />}
              onClick={() => setSelectedSection('Projects')}
            >
              {isSpanish ? 'Mis Trabajos' : 'View My Works'}
            </Button>
          </span>
        </Tooltip>

        <Tooltip label={isSpanish ? 'Contactarme' : 'Scroll to Contact'} placement="top">
          <IconButton
            size={{ base: 'md', md: 'lg' }}
            aria-label="Scroll to contact"
            icon={<FaAddressBook />}
            isRound
            onClick={handleScrollToContact}
            colorScheme="pink"
            boxShadow="md"
            _hover={{ bg: 'pink.300' }}
            _active={{ bg: 'pink.500' }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Home;
