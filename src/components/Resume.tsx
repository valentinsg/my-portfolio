import React, { useState } from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Link, Button, Image, Grid, Flex, Tooltip, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Avatar } from '@chakra-ui/react';
import { FaCheckCircle, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiMailgun } from 'react-icons/si';
import Valentin from '../img/valentin.png';

const Resume = () => {
  // Colores y temas
  const accentColor = 'pink.300';
  const textColor = 'gray.500';

  // State for showing email and phone
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box p={8}>
      {/* Encabezado */}
      <Box textAlign="center" mb={16}>
        <Tooltip label="Show image" aria-label="Image Tooltip">
          <Box
            border="2px solid pink"
            borderRadius="full"
            overflow="hidden"
            width="150px"
            height="150px"
            mx="auto"
            cursor="pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Image src={Valentin} boxSize="150px" objectFit="cover" />
          </Box>
        </Tooltip>
        <Heading as="h1" size="2xl" m={4} color={"whiteAlpha.900"}>
          Valentín Sánchez Guevara
        </Heading>
        <Text fontSize="xl" color={textColor} letterSpacing="tight">
          Developer | Creative | Entrepreneur
        </Text>

        <Flex justifyContent="center" gap={8} m={4} >
          <Tooltip label="Show email" aria-label="Email Tooltip">
            <Flex alignItems="center" fontSize="lg" color={textColor} cursor="pointer" onClick={() => setShowEmail(!showEmail)}>
              <SiMailgun size={"25px"} color='white' />
              <Box ml={2} overflow="hidden" whiteSpace="nowrap" maxWidth={showEmail ? '300px' : '0'} transition="max-width 0.4s ease-out">
                <Text>{showEmail ? 'sanchezguevaravalentin@gmail.com' : ''}</Text>
              </Box>
            </Flex>
          </Tooltip>
          <Tooltip label="Show phone number" aria-label="Phone Tooltip">
            <Flex alignItems="center" fontSize="lg" color={textColor} cursor="pointer" onClick={() => setShowPhone(!showPhone)}>
              <FaPhone size={"25px"} color='white' />
              <Box ml={2} overflow="hidden" whiteSpace="nowrap" maxWidth={showPhone ? '200px' : '0'} transition="max-width 0.4s ease-out">
                <Text>{showPhone ? '+54 9 2236680041' : ''}</Text>
              </Box>
            </Flex>
          </Tooltip>

          <Tooltip label="GitHub Profile" aria-label="GitHub Tooltip">
            <Link href="https://github.com/tu-usuario" isExternal>
              <FaGithub size="30px" />
            </Link>
          </Tooltip>
          <Tooltip label="LinkedIn Profile" aria-label="LinkedIn Tooltip">
            <Link href="https://linkedin.com/in/tu-usuario" isExternal>
              <FaLinkedin size="30px" />
            </Link>
          </Tooltip>
        </Flex>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* Sección de Skills */}
        <Box mb={10}>
          <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
            Skills
          </Heading>
          <Text fontSize="lg" color={textColor}>
            <strong>Languages:</strong> JavaScript, TypeScript, Python.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>UI Libraries:</strong> Chakra UI, Ionic, Bootstrap.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>Frameworks / Libraries:</strong> React, Next.js, Redux.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>Marketing and Communication:</strong> Digital Marketing & Content Strategy, Community & Digital Engagement.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>English:</strong> B2.
          </Text>

          {/* Sección de Educación */}
          <Box mt={10}>
            <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
              Education
            </Heading>
            <Text fontSize="lg" color={textColor}>
              <strong>Bachelor's Degree in Social Sciences:</strong>
            </Text>
            <Text fontSize="lg" color={textColor}>
              IEPM - EESN°42.
            </Text>
            <Text fontSize="lg" color={textColor}>
              <strong>Technical Degree in Software Development (UNFINISHED):</strong>
            </Text>
            <Text fontSize="lg" color={textColor}>
              UTN MDP.
            </Text>
          </Box>
          {/* Botón de descarga */}
          <Tooltip label="Download Resume as PDF" aria-label="Download Tooltip">
            <Button size={['md', 'lg']}
              variant="outline"
              boxShadow={'md'}
              colorScheme="pink"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              mt={8}>
              Download Resume (PDF)
            </Button>
          </Tooltip>
        </Box>

        {/* Sección de Experiencia */}
        <Box mb={10}>
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
                Dashboards and interactive graphs.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                Ticketing system implementation.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                Chat integrations for support.
              </ListItem>
            </List>
          </Box>

          <Box mb={8}>
            <Heading fontSize="2xl" color={accentColor}>
              Freelance
            </Heading>
            <Text fontSize="lg" color={textColor}>June 2022 - Present</Text>
            <Text fontSize="lg" color={textColor} mt={2}>
              Delivered custom web solutions and consulting services for various small businesses. Key results include:
            </Text>
            <List spacing={3} mt={2} color={textColor}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                Development of business websites and online stores.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                Client-specific CMS integrations.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                Branding and presence on internet platforms for business.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                Digital marketing.
              </ListItem>
            </List>
          </Box>
        </Box>
      </Grid>


      {/* Modal for image */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />

        <ModalContent w={"17vw"} bg="gray.500" borderRadius="100%" overflow="hidden">
          <ModalCloseButton />
          <ModalBody p={0}>
            <Avatar size={"full"} src={Valentin} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Resume;
