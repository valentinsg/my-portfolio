import React, { useState } from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Link, Button, Image, Grid, Flex, Tooltip, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Avatar, useColorModeValue } from '@chakra-ui/react';
import { useLanguage } from '../context/LanguageProvider';
import { FaCheckCircle, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiMailgun } from 'react-icons/si';
import Valentin from '../img/valentin.png';

interface ResumeProps { 
  id: string;
}

const Resume: React.FC<ResumeProps> = ({ id }) => {
  const { isSpanish } = useLanguage();

  const accentColor = useColorModeValue('pink.600', 'pink.300');
  const headerColor = useColorModeValue("gray.700", "gray.100");
  const textColor = useColorModeValue("gray.500", "whiteAlpha.900");

  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box m={6} id={id} px={{ base: 4, md: "auto" }}>
      <Box textAlign="center" mb={16}>
        <Tooltip label={isSpanish ? "Mostrar imagen" : "Show image"} aria-label="Image Tooltip">
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
        <Heading as="h1" size="2xl" m={4} color={headerColor}>
          Valentín Sánchez Guevara
        </Heading>
        <Text fontSize="xl" color={textColor} letterSpacing="tight">
          {isSpanish ? "Desarrollador | Creativo | Emprendedor" : "Developer | Creative | Entrepreneur"}
        </Text>

        <Flex justifyContent="center" gap={8} m={4}>
          <Tooltip label={isSpanish ? "Mostrar correo electrónico" : "Show email"} aria-label="Email Tooltip">
            <Flex alignItems="center" fontSize="lg" color={textColor} cursor="pointer" onClick={() => setShowEmail(!showEmail)}>
              <SiMailgun size={"25px"} color={accentColor} />
              <Box ml={2} overflow="hidden" whiteSpace="nowrap" maxWidth={showEmail ? '300px' : '0'} transition="max-width 0.4s ease-out">
                <Text>{showEmail ? 'sanchezguevaravalentin@gmail.com' : ''}</Text>
              </Box>
            </Flex>
          </Tooltip>
          <Tooltip label={isSpanish ? "Mostrar número de teléfono" : "Show phone number"} aria-label="Phone Tooltip">
            <Flex alignItems="center" fontSize="lg" color={textColor} cursor="pointer" onClick={() => setShowPhone(!showPhone)}>
              <FaPhone size={"25px"} color={accentColor} />
              <Box ml={2} overflow="higut dden" whiteSpace="nowrap" maxWidth={showPhone ? '200px' : '0'} transition="max-width 0.4s ease-out">
                <Text>{showPhone ? '+54 9 2236680041' : ''}</Text>
              </Box>
            </Flex>
          </Tooltip>

          <Tooltip label={isSpanish ? "Perfil de GitHub" : "GitHub Profile"} aria-label="GitHub Tooltip">
            <Link href="https://github.com/tu-usuario" isExternal>
              <FaGithub size="30px" />
            </Link>
          </Tooltip>
          <Tooltip label={isSpanish ? "Perfil de LinkedIn" : "LinkedIn Profile"} aria-label="LinkedIn Tooltip">
            <Link href="https://linkedin.com/in/tu-usuario" isExternal>
              <FaLinkedin size="30px" />
            </Link>
          </Tooltip>
        </Flex>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box mb={10}>
          <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
            {isSpanish ? "Habilidades" : "Skills"}
          </Heading>
          <Text fontSize="lg" color={textColor}>
            <strong>{isSpanish ? "Idiomas:" : "Languages:"}</strong> JavaScript, TypeScript, Python.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>{isSpanish ? "Librerias de UI:" : "UI Libraries:"}</strong> Chakra UI, Ionic, Bootstrap.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>{isSpanish ? "Frameworks / Librerias:" : "Frameworks / Libraries:"}</strong> React, Next.js, Redux.
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>{isSpanish ? "Marketing y Comunicación:" : "Marketing and Communication:"}</strong> {isSpanish ? "Diseño, Marketing Digital y Estrategia de Contenidos, Community Manager y Presencia Digital" : "Design, Digital Marketing & Content Strategy, Community & Digital Engagement."}
          </Text>
          <Text fontSize="lg" color={textColor}>
            <strong>{isSpanish ? "Inglés:" : "English:"}</strong> B2.
          </Text>

          <Box mt={10}>
            <Heading color={accentColor} as="h2" fontSize="3xl" mb={6}>
              {isSpanish ? "Educación" : "Education"}
            </Heading>
            <Text fontSize="lg" color={textColor}>
              <strong>{isSpanish ? "Bachiller en Ciencias Sociales:" : "Bachelor's Degree in Social Sciences:"}</strong>
            </Text>
            <Text fontSize="lg" color={textColor}>
              IEPM - EESN°42.
            </Text>
            <Text fontSize="lg" color={textColor}>
              <strong>{isSpanish ? "Técnico en Desarrollo de Software (INCOMPLETO):" : "Technical Degree in Software Development (UNFINISHED):"}</strong>
            </Text>
            <Text fontSize="lg" color={textColor}>
              UTN MDP.
            </Text>
          </Box>
          <Tooltip label={isSpanish ? "Descargar CV en PDF" : "Download Resume as PDF"} aria-label="Download Tooltip">
            <Button size={['md', 'lg']}
              variant="outline"
              boxShadow={'md'}
              colorScheme="pink"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              mt={10}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv-valen.pdf';  
                link.download = 'Valentin_Sanchez_Guevara_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}>
              {isSpanish ? "Descargar CV (PDF)" : "Download Resume (PDF)"}
            </Button>
          </Tooltip>
        </Box>

        <Box mb={10}>
          <Box mb={8}>
            <Heading fontSize="2xl" color={accentColor}>
              {isSpanish ? "Desarrollador Front-End JR. @Smithii (Remoto)" : "JR. Front-End Developer @Smithii (Remote)"}
            </Heading>
            <Text fontSize="lg" color={textColor}>{isSpanish ? "Agosto 2023 - Septiembre 2024" : "August 2023 - September 2024"}</Text>
            <Text fontSize="lg" color={textColor} mt={2}>
              {isSpanish ? "Miembro fundador de un equipo que construye herramientas de gestión de criptomonedas y tokens. Contribuciones clave incluyen:" : "Founding member of a team building crypto and token management tools. Key contributions include:"}
            </Text>
            <List spacing={3} mt={2} color={textColor}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Tableros y gráficos interactivos." : "Dashboards and interactive graphs."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Implementación de sistema de tickets." : "Ticketing system implementation."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Integraciones de chats." : "Chat integrations."}
              </ListItem>
            </List>
          </Box>

          <Box mb={8}>
            <Heading fontSize="2xl" color={accentColor}>
              {isSpanish ? "Freelance" : "Freelance"}
            </Heading>
            <Text fontSize="lg" color={textColor}>{isSpanish ? "Junio 2022 - Presente" : "June 2022 - Present"}</Text>
            <Text fontSize="lg" color={textColor} mt={2}>
              {isSpanish ? "Entregué soluciones web personalizadas y servicios de consultoría para varias pequeñas empresas. Los resultados incluyen:" : "Delivered custom web solutions and consulting services for various small businesses. Key results include:"}
            </Text>
            <List spacing={3} mt={2} color={textColor}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Desarrollo de sitios web empresariales y tiendas en línea." : "Development of business websites and online stores."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Integraciones CMS específicas para el cliente." : "Client-specific CMS integrations."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Branding y presencia en plataformas de internet para negocios." : "Branding and presence on internet platforms for business."}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color={accentColor} />
                {isSpanish ? "Marketing digital." : "Digital marketing."}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Grid>

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
