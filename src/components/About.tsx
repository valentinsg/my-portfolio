import React from 'react';
import { Box, Flex, Text, Heading, HStack, Tooltip, IconButton } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const About = () => {
  
  const textColor = 'whiteAlpha.900';
  const accentColor = 'pink.300';

  return (
    <Flex direction="column" p={[4, 10]} minH="100vh" color={textColor}>
      {/* Columna principal: Título y Logros */}

      <Box mb={20} textAlign="center">
        <Heading as="h1" fontSize={["4xl", "6xl"]} lineHeight="1.1" mb={16}>
          Turning complex problems into simple design
        </Heading>
        {/* Logros */}
        <Flex justify="space-between" mx={20}>
          <Box textAlign="center">
            <Heading fontSize={["3xl", "6xl"]} color={accentColor}>100%</Heading>
            <Text fontSize="2xl">Custom Solutions</Text>
          </Box>
          <Box textAlign="center">
            <Heading fontSize={["3xl", "6xl"]} color={accentColor}>2021</Heading>
            <Text fontSize="2xl">Delivering Quality Solutions Since</Text>
          </Box>
          <Box textAlign="center">
            <Heading fontSize={["3xl", "6xl"]} color={accentColor}>10+</Heading>
            <Text fontSize="2xl">Projects Done</Text>
          </Box>
        </Flex>
      </Box>

      {/* Cuerpo principal: Biografía y Contacto */}
      {/* Columna izquierda: Biografía */}
      <Box mb={[8, 0]}>
        <Text fontSize={["lg", "xl"]} lineHeight="tall" textAlign="justify">
          Since I was a child, I have always been surrounded by technology thanks to my father's study, and my curiosity to create things started early. I made up stories, built worlds in games, and added my creative touch to everything I did. <br /><br />
          Over time, I tried various jobs—from working in restaurants, valet parking, to maintenance at a beach resort. But it was urban music that really connected me with the power of the internet when I started sharing my own songs. That’s when I discovered my passion for digital creativity, which later led me to Software Development.
          <br /><br />
          After gaining experience in a company, I created my own clothing brand and now I combine programming, design, and business experience to help others stand out. If you are looking for someone who combines creativity and technology, I am here to assist.</Text>
      </Box>

      <HStack spacing={36} justifyContent={"center"} mt={20}>

        <Flex gap={6} alignItems={"center"}>
          <Text fontSize="xl" fontFamily={"monospace"}>
            <Text as="span" fontSize={"xl"} fontFamily={"monospace"} color={accentColor}>Mail: </Text>
            sanchezguevaravalentin@gmail.com
          </Text>
          <Tooltip label="Copy Email" aria-label="Copy Email Tooltip">
            <IconButton
              icon={<CopyIcon />}
              size={"sm"}
              onClick={() => {
                navigator.clipboard.writeText("sanchezguevaravalentin@gmail.com");
              }}
              aria-label="Copy Email"
            />
          </Tooltip>
        </Flex>

        <Flex gap={6} alignItems={"center"}>
          <Text fontSize="xl" fontFamily={"monospace"}>
            <Text as="span" fontSize={"xl"} fontFamily={"monospace"} color={accentColor}>Phone: </Text>
            +54 9 2236680041
          </Text>
          <Tooltip label="Copy phone number" aria-label="Copy Phone Number Tooltip">
          <IconButton
            aria-label="Copy phone number" 
            icon={<CopyIcon />} 
            size={"sm"}
            onClick={() => {
              navigator.clipboard.writeText("+54 9 2236680041");
            }}
          />
          </Tooltip>
        </Flex>

      </HStack>
    </Flex>
  );
};

export default About;
