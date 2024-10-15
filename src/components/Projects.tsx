import React from 'react'
import { Heading, Grid, useColorModeValue, Box } from '@chakra-ui/react'
import ProjectsContainer from './ProjectsContainer.';
import StakingImage from '../img/staking.jpg';
import StakingGif from '../img/video-staking.gif';
import ToolsImage from '../img/tools.jpg';
import ToolsGif from '../img/video-tools.gif';
import SoftwareImage from '../img/smithii-software.jpg';
import SoftwareGif from '../img/video-software.gif';
import BusyLandingImage from '../img/busy-landing-image.jpg';

const Projects = () => {
  const headingColor = useColorModeValue('black', 'whiteAlpha.900');
  return (
    <Box>
      <Heading as="h2" fontSize={"5xl"} color={headingColor} mb={12} mt={6} >
        Featured Projects
      </Heading>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={8}>
        <ProjectsContainer
          bgImage={StakingImage}
          gifUrl={StakingGif}
          title="Staking Project"
          description="A decentralized staking platform for cryptocurrency"
          technologies={['React', 'TypeScript', 'ChakraUI', "Rust"]}
          url='https://stake.smithii.io/'
        />        
        <ProjectsContainer 
          bgImage={ToolsImage} 
          gifUrl={ToolsGif} 
          title={"Crypto Tools"} 
          description={"A decentralized toolset for cryptocurrency users"} 
          technologies={['React', 'TypeScript', 'ChakraUI',  "Rust"]} 
        />
        <ProjectsContainer 
          bgImage={SoftwareImage} 
          gifUrl={SoftwareGif}
          title={"Smithii Software"} 
          description={"A software development company"} 
          technologies={['React', 'TypeScript', 'ChakraUI', 'Redux', "Springboot", 'MongoDB']} 
        />
        <ProjectsContainer 
          bgImage={BusyLandingImage}
          title={'Busy Landing'} 
          description={"A Clothing Brand landing page with some visual interactive functions"} 
          technologies={['React', 'TypeScript', 'ChakraUI']} 

        />
      </Grid>
    </Box>
  )
}

export default Projects