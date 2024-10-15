import React, { useState } from 'react';
import { Heading, Grid, useColorModeValue, Box, Menu, MenuButton, MenuList, MenuItem, Button, Flex } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ProjectsContainer from './ProjectsContainer';
import StakingImage from '../img/staking.jpg';
import StakingGif from '../img/video-staking.gif';
import ToolsImage from '../img/tools.jpg';
import ToolsGif from '../img/video-tools.gif';
import SoftwareImage from '../img/smithii-software.jpg';
import SoftwareGif from '../img/video-software.gif';
import BusyLandingImage from '../img/busy-landing-image.jpg';

const projectsData = [
  {
    bgImage: StakingImage,
    gifUrl: StakingGif,
    title: "Staking Project",
    description: "A decentralized staking platform for cryptocurrency",
    technologies: ['React', 'TypeScript', 'ChakraUI', "Rust"],
    url: 'https://stake.smithii.io/',
    type: 'software'
  },
  {
    bgImage: ToolsImage,
    gifUrl: ToolsGif,
    title: "Crypto Tools",
    description: "A decentralized toolset for cryptocurrency users",
    technologies: ['React', 'TypeScript', 'ChakraUI', "Rust"],
    type: 'software'
  },
  {
    bgImage: SoftwareImage,
    gifUrl: SoftwareGif,
    title: "Smithii Software",
    description: "A software development company",
    technologies: ['React', 'TypeScript', 'ChakraUI', 'Redux', "Springboot", 'MongoDB'],
    type: 'software'
  },
  {
    bgImage: BusyLandingImage,
    title: 'Busy Landing',
    description: "A Clothing Brand landing page with some visual interactive functions",
    technologies: ['React', 'TypeScript', 'ChakraUI'],
    type: 'branding'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const headingColor = useColorModeValue('black', 'whiteAlpha.900');

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.type === filter);

  return (
    <Box>
      <Flex alignItems={"center"} gap={10}>
        <Heading as="h2" fontSize={"5xl"} color={headingColor} mb={12} mt={6}>
          Featured Projects
        </Heading>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mb={3}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setFilter('all')}>All</MenuItem>
            <MenuItem onClick={() => setFilter('software')}>Software</MenuItem>
            <MenuItem onClick={() => setFilter('branding')}>Branding</MenuItem>
            <MenuItem onClick={() => setFilter('content-strategist')}>Content Strategist</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={8}>
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