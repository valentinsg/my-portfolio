import React from 'react'
import { Heading, Grid, useColorModeValue, Box } from '@chakra-ui/react'
import ProjectsContainer from './ProjectsContainer.';
import StakingImage from '../img/staking.jpg';
import StakingGif from '../img/video-staking.gif';

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
          technologies={['React', 'NodeJS', 'MongoDB']}
          url='https://stake.smithii.io/'
        />        
        <ProjectsContainer title={''} description={''} technologies={[]} />
        <ProjectsContainer title={''} description={''} technologies={[]} />
        <ProjectsContainer title={''} description={''} technologies={[]} />
      </Grid>
    </Box>
  )
}

export default Projects