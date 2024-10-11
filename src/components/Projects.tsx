import React from 'react'
import { Heading, Grid, useColorModeValue, Box } from '@chakra-ui/react'
import ProjectsContainer from './ProjectsContainer.';
import StakingImage from '../img/staking.jpg';

const Projects = () => {

  const headingColor = useColorModeValue('black','whiteAlpha.900');

  return (
    <Box
    >
      <Heading as="h2" fontSize={"5xl"} color={headingColor} mb={10} >
        Featured Projects
      </Heading>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={8}>
        <ProjectsContainer bgImage={StakingImage} />
        <ProjectsContainer />
        <ProjectsContainer />
        <ProjectsContainer />
      </Grid>
    </Box>
  )
}

export default Projects