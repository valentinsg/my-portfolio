import React from 'react';
import { Box, Flex, Text, Heading, Avatar, Stack, Icon, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import Valentin from '../img/valentin.png';

const Resume = () => {
  const accentColor = 'pink.400';
  const textColor = 'whiteAlpha.900';
  const bgColor = 'gray.700';

  return (
    <Box bg={bgColor} p={10} rounded="lg" boxShadow="lg" w="100%" maxW="1200px" mx="auto">
      <Flex direction={['column', 'row']} align="center" justify="space-between">
        {/* Foto y nombre */}
        <Box textAlign="center" mb={[8, 0]}>
          <Avatar size="2xl" src={Valentin} name="Valentín Sánchez Guevara" mb={4} />
          <Heading color={accentColor} as="h1" fontSize="4xl">
            Valentín Sánchez Guevara
          </Heading>
          <Text fontSize="lg" color={textColor}>Front-End Developer</Text>
          <Text fontSize="lg" color={textColor} mt={2}>
            Buenos Aires, Mar del Plata, Argentina
          </Text>
        </Box>

        {/* Contacto */}
        <Stack spacing={4} textAlign="center" mb={[8, 0]}>
          <Link href="mailto:sanchezguevaravalentin@gmail.com" color={accentColor}>
            <Icon as={FaEnvelope} mr={2} />
            sanchezguevaravalentin@gmail.com
          </Link>
          <Link href="tel:+5492236680041" color={accentColor}>
            <Icon as={FaPhone} mr={2} />
            +54 9 2236680041
          </Link>
          <Link href="https://www.linkedin.com/in/valent%C3%ADn-s-761910200/" isExternal color={accentColor}>
            <Icon as={FaLinkedin} mr={2} />
            LinkedIn
          </Link>
          <Link href="https://github.com/valentinsg" isExternal color={accentColor}>
            <Icon as={FaGithub} mr={2} />
            GitHub
          </Link>
        </Stack>
      </Flex>

      {/* Skills y experiencia */}
      <Box mt={10}>
        <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>Skills</Heading>
        <Text fontSize="lg" color={textColor}>
          <strong>Languages:</strong> React, TypeScript, Redux, Chakra UI, Ionic
        </Text>

        <Heading color={accentColor} as="h2" fontSize="3xl" mt={10} mb={6}>Experience</Heading>
        <Box mb={8}>
          <Heading fontSize="2xl" color={accentColor}>
            JR. Front-End Developer @ Smithii (Remote)
          </Heading>
          <Text fontSize="lg" color={textColor}>August 2023 - Present</Text>
          <Text fontSize="lg" color={textColor} mt={2}>
            Founding member of a team building next-gen tools for crypto and token management. I contributed to:
            <ul>
              <li>Dashboards and interactive graphs</li>
              <li>Pushed for a ticketing system</li>
              <li>Chat integrations</li>
            </ul>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
