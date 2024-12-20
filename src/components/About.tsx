import React from 'react';
import { Box, Flex, Text, Heading, Stack, Tooltip, IconButton, useColorModeValue, useToast } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageProvider';

interface AboutProps {
  id: string;
}
const About: React.FC<AboutProps> = ({ id }) => {
  const { isSpanish } = useLanguage();

  const headerColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const accentColor = useColorModeValue('pink.600', 'pink.300');

  const toast = useToast();

  return (
    <Flex direction="column" m={[2, 6]} minH="100vh" color={textColor} id={id} px={{ base: 0, md: "auto" }}>
      {/* Columna principal: Título y Logros */}

      <Box mb={16} textAlign={{ base: "left", md: "center" }}>
        <Heading color={headerColor} as="h1" fontSize={["7vw", "4.2vw"]} lineHeight="1.1" mb={{ base: 10, md: 16 }} textAlign={{ base: "center", md: "left" }}>
          {isSpanish ? 'Resolviendo problemas complejos con un diseño simple' : 'Turning complex problems into simple design'}
        </Heading>
        {/* Logros */}
        <Flex justify="space-between" mx={{ base: 0, md: 20 }} flexDir={{ base: "column", md: "row" }} gap={{ base: 12, md: "normal" }}>
          <Box textAlign="center">
            <Heading fontSize={["5xl", "6xl"]} color={accentColor}>100%</Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>{isSpanish ? 'Soluciones Personalizadas' : 'Custom Solutions'}</Text>
          </Box>
          <Box textAlign="center">
            <Heading fontSize={["5xl", "6xl"]} color={accentColor}>2021</Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>{isSpanish ? 'Entregando Soluciones de Calidad Desde' : 'Delivering Quality Solutions Since'}</Text>
          </Box>
          <Box textAlign="center">
            <Heading fontSize={["5xl", "6xl"]} color={accentColor}>10+</Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }}>{isSpanish ? 'Proyectos Realizados' : 'Projects Done'}</Text>
          </Box>
        </Flex>
      </Box>

      {/* Cuerpo principal: Biografía y Contacto */}
      {/* Columna izquierda: Biografía */}
      <Box mb={[4, 0]}>
        <Text fontSize={["md", "xl"]} lineHeight="tall" textAlign="justify">
          {isSpanish ? (
            <>
              Desde que soy chico, siempre estuve en contacto con tecnología gracias al estudio de mi papá, y mi curiosidad por crear cosas comenzó en esa época. Inventaba historias, construía mundos en juegos y desde entonces le sumo mi toque creativo a todo lo que hago. <br /><br />
              Con el tiempo, tuve varios trabajos: desde trabajar en restaurantes, valet parking, hasta mantenimiento en un balneario de playa. Pero fue la música urbana la que realmente me conectó con el poder de internet cuando comencé a compartir mis propias canciones. Ahí descubrí mi pasión por la creatividad digital, que más tarde me llevó al Desarrollo de Software.
              <br /><br />
              Después de ganar experiencia en mi primer empresa, creé mi propia marca de ropa y ahora combino programación, diseño y experiencia empresarial para ayudar a otros a destacar. Si buscas a alguien que combine creatividad y tecnología, yo puedo ayudarte.
            </>
          ) : (
            <>
              Since I was a child, I have always been surrounded by technology thanks to my father's study, and my curiosity to create things started early. I made up stories, built worlds in games, and added my creative touch to everything I did. <br /><br />
              Over time, I tried various jobs—from working in restaurants, valet parking, to maintenance at a beach resort. But it was urban music that really connected me with the power of the internet when I started sharing my own songs. That’s when I discovered my passion for digital creativity, which later led me to Software Development.
              <br /><br />
              After gaining experience in a company, I created my own clothing brand and now I combine programming, design, and business experience to help others stand out. If you are looking for someone who combines creativity and technology, I am here to assist.
            </>
          )}
        </Text>
      </Box>

      <Stack direction={{ base: "column", md: "row" }} spacing={{base: 6, md: 30}} justifyContent={"center"} mt={10}>
        <Flex gap={{base: 4, md: 8}} alignItems={"center"}>
          <Text fontSize={{ base: "md", md: "lg" }} fontFamily={"monospace"}>
            <Text as="span" fontSize={"lg"} fontFamily={"monospace"} color={accentColor} display={{ base: "none", md: "inline" }}>
              {isSpanish ? 'Correo: ' : 'Mail: '}
            </Text>
            sanchezguevaravalentin@gmail.com
          </Text>
          <Tooltip label={isSpanish ? 'Copiar Correo' : 'Copy Email'} aria-label={isSpanish ? 'Copiar Correo Tooltip' : 'Copy Email Tooltip'}>
            <IconButton
              icon={<CopyIcon />}
              size={"sm"}
              onClick={() => {
                navigator.clipboard.writeText("sanchezguevaravalentin@gmail.com");
                toast({
                  title: isSpanish ? "Correo copiado" : "Email copied",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  colorScheme: "pink",
                });
              }}
              aria-label={isSpanish ? 'Copiar Correo' : 'Copy Email'}
            />
          </Tooltip>
        </Flex>

        <Flex gap={{base: 4, md: 8}} alignItems={"center"}>
          <Text fontSize={{ base: "md", md: "lg" }} fontFamily={"monospace"}>
            <Text as="span" fontSize={"lg"} fontFamily={"monospace"} color={accentColor} display={{ base: "none", md: "inline" }}>
              {isSpanish ? 'Teléfono: ' : 'Phone: '}
            </Text>
            +54 9 2236680041
          </Text>
          <Tooltip label={isSpanish ? 'Copiar número de teléfono' : 'Copy phone number'} aria-label={isSpanish ? 'Copiar número de teléfono Tooltip' : 'Copy Phone Number Tooltip'}>
            <IconButton
              aria-label={isSpanish ? 'Copiar número de teléfono' : 'Copy phone number'}
              icon={<CopyIcon />}
              size={"sm"}
              onClick={() => {
                navigator.clipboard.writeText("+54 9 2236680041");
                toast({
                  title: isSpanish ? "Número de teléfono copiado" : "Phone number copied",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  colorScheme: "pink",
                });
              }}
            />
          </Tooltip>
        </Flex>

      </Stack>
    </Flex>
  );
};

export default About;
