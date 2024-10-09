import React from 'react'
import { Heading, Grid, GridItem, VStack, Text, useColorModeValue } from '@chakra-ui/react'


const Projects = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const headingColor = useColorModeValue('pink.500', 'pink.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  return (
    <div>
      <Heading as="h2" size="lg" fontFamily="'Orbitron', sans-serif" color={headingColor} mt={8}>
        Featured Projects
      </Heading>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>
        {[1, 2, 3, 4].map((project) => (
          <GridItem key={project} w="100%" h="200px" bg={bgColor} p={4} borderRadius="md" boxShadow="md">
            <VStack align="start" spacing={2}>
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
    </div>
  )
}

export default Projects