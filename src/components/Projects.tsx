import React, { useState } from 'react';
import { Heading, Grid, useColorModeValue, Box, Menu, MenuButton, MenuList, MenuItem, Button, Flex, Tooltip} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageProvider';
import ProjectsContainer from './ProjectsContainer';
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
  const headerColor = useColorModeValue("gray.700", "gray.100");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

  const projectsData = [
    {
      bgImage: StakingImage,
      gifUrl: StakingGif,
      title: isSpanish ? "Proyecto de Staking" : "Staking Project",
      description: isSpanish ? "Un proyecto de staking para criptomonedas" : "A staking project for cryptocurrencies",
      technologies: ['React', 'TypeScript', 'ChakraUI', "Rust"],
      url: 'https://stake.smithii.io/',
      type: 'software'
    },
    {
      bgImage: ToolsImage,
      gifUrl: ToolsGif,
      title: isSpanish ? "Herramientas Cripto" : "Crypto Tools",
      description: isSpanish ? "Un conjunto de herramientas descentralizadas para usuarios de criptomonedas" : "A decentralized toolset for cryptocurrency users",
      technologies: ['React', 'TypeScript', 'ChakraUI', "Rust"],
      type: 'software'
    },
    {
      bgImage: SoftwareImage,
      gifUrl: SoftwareGif,
      title: isSpanish ? "Smithii Software" : "Smithii Software",
      description: isSpanish ? "Una empresa de desarrollo de software" : "A software development company",
      technologies: ['React', 'TypeScript', 'ChakraUI', 'Redux', "Springboot", 'MongoDB'],
      type: 'software'
    },
    {
      bgImage: BusyLandingImage,
      title: isSpanish ? 'Busy Landing' : 'Busy Landing',
      description: isSpanish ? "Página y branding para una marca de ropa con algunas funciones visuales interactivas" : "A Clothing Brand landing page with some visual interactive functions",
      technologies: ['React', 'TypeScript', 'ChakraUI'],
      type: 'branding'
    }
  ];

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.type === filter);

  return (
    <Box>
      <Flex alignItems={"center"} gap={10}>
        <Heading as="h2" fontSize={"5xl"} color={headerColor} mb={12} mt={6}>
          {isSpanish ? "Proyectos" : "Featured Projects"}
        </Heading>
        <Menu>
          <Tooltip label={isSpanish ? "Filtrar proyectos" : "Filter projects"} aria-label="Filter projects tooltip">
            <MenuButton as={Button} borderRadius="8px" bg={useColorModeValue('gray.200', 'gray.700')}
              color={textColor} rightIcon={<ChevronDownIcon />} mb={3} fontFamily={"monospace"}>
              {filter === 'all' ? (isSpanish ? "Todos" : "All") : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </MenuButton>
          </Tooltip>
          <MenuList>
            <MenuItem onClick={() => setFilter('all')}>{isSpanish ? "Todos" : "All"}</MenuItem>
            <MenuItem onClick={() => setFilter('software')}>Software</MenuItem>
            <MenuItem onClick={() => setFilter('branding')}>Branding</MenuItem>
            <MenuItem onClick={() => setFilter('content-strategist')}>{isSpanish ? "Estrategias de contenido" : "Content Strategist"}</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={16}>
        {filteredProjects.map((project, index) => (
          <ProjectsContainer
            key={index}
            bgImage={project.bgImage}
            gifUrl={project.gifUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;