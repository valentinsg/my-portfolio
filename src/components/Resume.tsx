import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Link, Button, Image, Grid } from '@chakra-ui/react';
import { FaCheckCircle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Valentin from '../img/valentin.png';

const Resume = () => {
  // Colores y temas
  const accentColor = 'pink.300';
  const textColor = 'gray.600';

  return (
    <Box p={8}>
      {/* Encabezado */}
      <Box textAlign="center" mb={10}>
        <Box
          border="2px solid pink"
          borderRadius="full"
          overflow="hidden"
          width="150px"
          height="150px"
          mx="auto"
          mb={4}
        >
          <Image src={Valentin} boxSize="150px" objectFit="cover" />
        </Box>
        <Heading as="h1" size="2xl" mb={4} color={accentColor}>
          Valentín Sánchez Guevara
        </Heading>
        <Text fontSize="lg" color={textColor} mb={4}>
          Developer | Creative | Entrepreneur
        </Text>
        <Box display="flex" justifyContent="center" mt={4}>
          <Link href="https://github.com/tu-usuario" isExternal>
            <FaGithub size="30px" style={{ marginRight: '20px' }} />
          </Link>
          <Link href="https://linkedin.com/in/tu-usuario" isExternal>
            <FaLinkedin size="30px" />
          </Link>
        </Box>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={12}>
        {/* Sección de Skills */}
        <Box mb={10}>
          <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
        Skills
          </Heading>
          <Text fontSize="lg" color={textColor}>
        <strong>Languages:</strong> React, TypeScript, Redux
          </Text>
          <Text fontSize="lg" color={textColor}>
        <strong>UI Libraries:</strong> Chakra UI, Ionic
          </Text>
          <Text fontSize="lg" color={textColor}>
        <strong>Business Management Skills:</strong> Project Management, Client Relations
          </Text>
          <Text fontSize="lg" color={textColor}>
        <strong>English:</strong> B2
          </Text>
          
          {/* Sección de Educación */}
          <Box mt={10}>
        <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
          Education
        </Heading>
        <Text fontSize="lg" color={textColor}>
          <strong>Bachelor's Degree in Computer Science</strong>
        </Text>
          <Text fontSize="lg" color={textColor}>
            University of Technology, 2018 - 2022
          </Text>
        </Box>
        </Box>

        {/* Sección de Experiencia */}
        <Box mb={10}>
          <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
        Experience
          </Heading>
          <Box mb={8}>
        <Heading fontSize="2xl" color={accentColor}>
          JR. Front-End Developer @Smithii (Remote)
        </Heading>
        <Text fontSize="lg" color={textColor}>August 2023 - September 2024</Text>
        <Text fontSize="lg" color={textColor} mt={2}>
          Founding member of a team building crypto and token management tools. Key contributions include:
        </Text>
        <List spacing={3} mt={2} color={textColor}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color={accentColor} />
            Dashboards and interactive graphs
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color={accentColor} />
            Ticketing system implementation
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color={accentColor} />
            Chat integrations for support
          </ListItem>
        </List>
          </Box>

          <Box mb={8}>
        <Heading fontSize="2xl" color={accentColor}>
          Freelance Developer (Remote)
        </Heading>
        <Text fontSize="lg" color={textColor}>June 2022 - Present</Text>
        <Text fontSize="lg" color={textColor} mt={2}>
          Delivered custom web solutions and consulting services for various small businesses. Key results include:
        </Text>
        <List spacing={3} mt={2} color={textColor}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color={accentColor} />
            Development of business websites and online stores using modern frameworks.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color={accentColor} />
            Client-specific CMS integrations.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color={accentColor} />
            Maintenance and support for web and mobile apps.
          </ListItem>
        </List>
          </Box>
        </Box>
      </Grid>

      {/* Botón de descarga */}
      <Box textAlign="center" mt={8}>
        <Button colorScheme={accentColor} size="lg">
          Download Resume (PDF)
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;
