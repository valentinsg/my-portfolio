import React, { useState } from 'react';
import { Box, Heading, Text, useColorModeValue, Flex, Icon, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDharmachakra } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

interface ProjectsContainerProps {
  bgImage?: string;
  gifUrl?: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ 
  bgImage, 
  gifUrl, 
  title, 
  description, 
  technologies,
  url
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Uso de useColorModeValue para manejar colores en modo oscuro/claro
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const titleColor = useColorModeValue('brand.600', 'brand.300');
  const descriptionColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box
      as={motion.div}
      w="100%"
      h={{ base: "300px", md: "375px" }}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      position="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      cursor="pointer"
    >
      {/* Imagen de fondo estática */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage={`url(${bgImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        opacity={isHovered ? 0 : 1}
        transition="opacity 0.3s ease-in-out"
      />
      
      {/* GIF que se muestra al hacer hover */}
      <Box
        as="img"
        src={isHovered ? gifUrl : ''}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
      />
      
      {/* Overlay para mejorar la legibilidad del texto */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={isHovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)"}
        transition="background 0.3s ease-in-out"
      />
      
      {/* Contenido del proyecto */}
      <Flex
        direction="column"
        justify="space-between"
        h="100%"
        p={6}
        position="relative"
        zIndex={1}
      >
        <Box opacity={isHovered ? 0 : 1} transition="opacity 0.3s ease-in-out">
          <Heading
            as="h3"
            size="lg"
            fontFamily="'Press Start 2P', cursive"
            color={titleColor}
            textShadow="2px 2px 4px rgba(0,0,0,0.6)"
            mb={2}
          >
            {title}
          </Heading>
          <Text
            fontSize="md"
            color={descriptionColor}
            fontWeight="medium"
            textShadow="1px 1px 2px rgba(0,0,0,0.6)"
          >
            {description}
          </Text>
        </Box>
        
        {/* Iconos de tecnologías */}
        <Flex wrap="wrap" mt={4}>
          {technologies.map((tech, index) => (
            <Tooltip key={index} label={tech} placement="top">
              <Box>
                <Icon
                  as={getIconForTechnology(tech)}
                  boxSize={6}
                  mr={2}
                  mb={2}
                  color="white"
                  filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.6))"
                />
              </Box>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const getIconForTechnology = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return FaReact;
    case 'nodejs':
      return FaNodeJs;
    case 'python':
      return FaPython;
    case 'html':
      return FaHtml5;
    case 'css':
      return FaCss3Alt;
    case 'chakraui':
      return FaDharmachakra;
    case 'javascript':
      return FaJsSquare;
    case 'typescript':
      return SiTypescript;
    case 'mongodb':
      return SiMongodb;
    case 'postgresql':
      return SiPostgresql;
    case 'git':
      return FaGitAlt;
    default:
      return FaReact;
  }
};

export default ProjectsContainer;
