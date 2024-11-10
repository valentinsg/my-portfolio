import React, { useState } from 'react';
import { Box, Heading, Text, useColorModeValue, Flex, Icon, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiChakraui, SiSpringboot } from 'react-icons/si';
import { GiCrab } from "react-icons/gi";

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

  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

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
        h="100%"
        p={6}
        justifyContent="space-between"
        alignItems="flex-end"
        position="relative"
        zIndex={1}
      >
        {/* Iconos de tecnologías alineados a la izquierda */}
        <Flex direction="row" align="flex-end" w={"50%"}>
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

        {/* Título y descripción alineados a la derecha */}
        <Flex flexDir={"column"} alignItems="flex-end" w={"85%"}>
            <Heading
            as="h3"
            size="xl"
            color={textColor}
            textShadow={useColorModeValue("1px 3px 2px rgba(255,255,255,0.6)", "1px 4px 2px rgba(0,0,0,0.6)")}
            >
            {title}
            </Heading>
          <Text
            fontSize="md"
            textAlign={"right"}
            color={textColor}
            fontWeight="medium"
            textShadow={useColorModeValue("1px 3px 2px rgba(255,255,255,0.6)", "1px 4px 2px rgba(0,0,0,0.6)")}
          >
            {description}
          </Text>
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
    case 'rust':
      return GiCrab;
    case 'springboot':
      return SiSpringboot;
    case 'python':
      return FaPython;
    case 'html':
      return FaHtml5;
    case 'css':
      return FaCss3Alt;
    case 'chakraui':
      return SiChakraui;
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
    case 'redux':
      return SiRedux;
    default:
      return FaReact;
  }
};

export default ProjectsContainer;
