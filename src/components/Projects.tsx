import React from 'react'
import { Heading, Grid, GridItem, VStack, Text, useColorModeValue, Box } from '@chakra-ui/react'


const Projects = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const headingColor = useColorModeValue('pink.500', 'pink.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  return (
    <Box
    >
      <Heading as="h2" fontSize={"4xl"} fontFamily="monospace" color={headingColor} mb={8} >
        Featured Projects
      </Heading>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={8}>
        {[1, 2, 3, 4].map((project) => (
          <GridItem key={project} w="95%" h="500px" bg={bgColor} p={6} borderRadius="md" boxShadow="md">
            <VStack align="start" >
              <Heading as="h3" size="md" fontFamily="'Orbitron', sans-serif">
                Project {project}
              </Heading>
              <Text fontSize="sm" color={textColor}>
                Brief description of project {project}. Click to learn more.
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects