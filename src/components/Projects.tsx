import React, { useState } from 'react';
import {
  Heading,
  Grid,
  useColorModeValue,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Tooltip,
  Text,
  Badge,
  useBreakpointValue
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageProvider';
import ProjectsContainer from './ProjectsContainer';

// Importaciones de imágenes
import StakingImage from '../img/staking.jpg';
import StakingGif from '../img/video-staking.gif';
import ToolsImage from '../img/tools.jpg';
import ToolsGif from '../img/video-tools.gif';
import SoftwareImage from '../img/smithii-software.jpg';
import SoftwareGif from '../img/video-software.gif';
import BusyLandingImage from '../img/busy-landing-image.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { isSpanish } = useLanguage();

  // Mejores contrastes para accesibilidad
  const headerColor = useColorModeValue("gray.800", "gray.50");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const menuBgColor = useColorModeValue("white", "gray.800");
  const menuHoverBgColor = useColorModeValue("gray.100", "gray.700");
  const badgeBgColor = useColorModeValue("pink.100", "pink.800");
  const badgeTextColor = useColorModeValue("pink.800", "pink.100");
  const filterButtonBg = useColorModeValue("pink.50", "gray.700");
  const filterButtonHoverBg = useColorModeValue("pink.100", "gray.600");

  // Tamaños responsivos
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(2, 1fr)"
  });
  const gridGap = useBreakpointValue({ base: 8, md: 12, lg: 16 });

  const projectsData = [
    {
      bgImage: StakingImage,
      gifUrl: StakingGif,
      title: isSpanish ? "Proyecto de Staking" : "Staking Project",
      description: isSpanish ?
        "Plataforma de staking descentralizada para criptomonedas, con interfaz intuitiva y seguridad mejorada" :
        "Decentralized staking platform for cryptocurrencies, featuring intuitive interface and enhanced security",
      technologies: ['React', 'TypeScript', 'ChakraUI', 'Rust'],
      url: 'https://stake.smithii.io/',
      type: 'software',
      category: isSpanish ? "Software Blockchain" : "Blockchain Software"
    },
    {
      bgImage: ToolsImage,
      gifUrl: ToolsGif,
      title: isSpanish ? "Herramientas Cripto" : "Crypto Tools",
      description: isSpanish ?
        "Suite completa de herramientas DeFi para gestión y análisis de activos digitales" :
        "Comprehensive DeFi toolset for digital asset management and analysis",
      technologies: ['React', 'TypeScript', 'ChakraUI', 'Rust'],
      type: 'software',
      category: isSpanish ? "Herramientas DeFi" : "DeFi Tools"
    },
    {
      bgImage: SoftwareImage,
      gifUrl: SoftwareGif,
      title: "Smithii Software",
      description: isSpanish ?
        "Empresa de desarrollo de software especializada en soluciones web3 y aplicaciones empresariales" :
        "Software development company specialized in web3 solutions and enterprise applications",
      technologies: ['React', 'TypeScript', 'ChakraUI', 'Redux', 'Spring Boot', 'MongoDB'],
      type: 'software',
      category: isSpanish ? "Desarrollo Empresarial" : "Enterprise Development"
    },
    {
      bgImage: BusyLandingImage,
      title: 'Busy Landing',
      description: isSpanish ?
        "Landing page interactiva para marca de moda con características visuales dinámicas y experiencia de usuario optimizada" :
        "Interactive fashion brand landing page with dynamic visual features and optimized user experience",
      technologies: ['React', 'TypeScript', 'ChakraUI'],
      type: 'branding',
      category: isSpanish ? "Diseño Web" : "Web Design"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.type === filter);

  const filterOptions = [
    { value: 'all', label: isSpanish ? 'Todos' : 'All' },
    { value: 'software', label: 'Software' },
    { value: 'branding', label: 'Branding' },
    { value: 'content-strategist', label: isSpanish ? 'Estrategias de contenido' : 'Content Strategist' }
  ];

  return (
    <Box 
      m={7}
      as="section" 
      py={8} 
      aria-label={isSpanish ? "Sección de proyectos" : "Projects section"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={4}
        mb={8}
      >
        <Heading
          as="h2"
          fontSize={headingSize}
          color={headerColor}
          fontWeight="bold"
          letterSpacing="tight"
        >
          {isSpanish ? "Proyectos Destacados" : "Featured Projects"}
        </Heading>

        <Menu>
          <Tooltip
            label={isSpanish ? "Filtrar proyectos por categoría" : "Filter projects by category"}
            aria-label="Filter projects tooltip"
          >
            <MenuButton
              as={Button}
              borderRadius="lg"
              bg={filterButtonBg}
              _hover={{ bg: filterButtonHoverBg }}
              color={textColor}
              rightIcon={<ChevronDownIcon />}
              fontFamily="monospace"
              size={{ base: "sm", md: "md" }}
              px={6}
            >
              {filterOptions.find(option => option.value === filter)?.label}
            </MenuButton>
          </Tooltip>
          <MenuList bg={menuBgColor}>
            {filterOptions.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => setFilter(option.value)}
                _hover={{ bg: menuHoverBgColor }}
              >
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      <Grid
        templateColumns={gridColumns}
        gap={gridGap}
        role="list"
        aria-label={isSpanish ? "Lista de proyectos" : "Projects list"}
      >
        {filteredProjects.map((project, index) => (
          <Box
            key={index}
            role="listitem"
            position="relative"
          >
            <Badge
              position="absolute"
              top={4}
              right={4}
              zIndex={1}
              bg={badgeBgColor}
              color={badgeTextColor}
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              {project.category}
            </Badge>
            <ProjectsContainer
              bgImage={project.bgImage}
              gifUrl={project.gifUrl}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
            />
          </Box>
        ))}
      </Grid>

      {filteredProjects.length === 0 && (
        <Text
          color={textColor}
          fontSize="lg"
          textAlign="center"
          mt={8}
          fontStyle="italic"
        >
          {isSpanish
            ? "No hay proyectos disponibles para esta categoría"
            : "No projects available for this category"}
        </Text>
      )}
    </Box>
  );
}

export default Projects;