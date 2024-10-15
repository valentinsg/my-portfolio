import React from 'react';
import { Box, Flex, Text, Heading, Stack, Link, Divider } from '@chakra-ui/react';

const About = () => {

  const textColor = 'whiteAlpha.900';
  const accentColor = 'pink.400';

  return (
    <Flex direction="column" p={[4, 8]}  minH="100vh" color={textColor}>
      {/* Columna principal: Título y Logros */}
      <Box w={["100%", "70%"]} mb={8} textAlign="left">
        <Heading as="h1" fontSize={["4xl", "6xl"]} lineHeight="1.1" mb={12}>
          Turning complex problems into simple design
        </Heading>
        {/* Logros */}
        <Flex justify="space-between" mb={8} w="100%" >
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
      <Flex direction={["column", "row"]} gap={20} justify="space-between" alignItems={"center"}>
        {/* Columna izquierda: Biografía */}
        <Box mb={[8, 0]}>
          <Text fontSize={["lg", "xl"]} lineHeight="tall" textAlign="justify">
            Since I was a child, I have always been surrounded by technology thanks to my father's study, and my curiosity to create things started early. I made up stories, built worlds in games, and added my creative touch to everything I did. <br /><br />
            Over time, I tried various jobs—from working in restaurants, valet parking, to maintenance at a beach resort. But it was urban music that really connected me with the power of the internet when I started sharing my own songs. That’s when I discovered my passion for digital creativity, which later led me to Software Development.
            <br /><br />
            After gaining experience in a company, I created my own clothing brand and now I combine programming, design, and business experience to help others stand out. If you are looking for someone who combines creativity and technology, I am here to assist.</Text>
        </Box>

        {/* Columna derecha: Contacto */}
        <Box w={["100%", "70%"]}  >
          <Stack spacing={4}>
            <Text fontSize="xl"><Text as="span" color={accentColor}>Email:</Text> your-email@example.com</Text>
            <Divider />
            <Text fontSize="xl"><Text as="span" color={accentColor}>Phone:</Text> +54 123 4567890</Text>
          </Stack>  
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;
