import React from 'react'
import { GridItem, Heading, Text, useColorModeValue } from '@chakra-ui/react'

interface ProjectsContainerProps {
  bgImage?: string;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ bgImage }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const headingColor = useColorModeValue('pink.500', 'pink.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <GridItem
      w="100%"
      h="375px"
      bg={bgColor}
      p={6}
      borderRadius="lg"
      boxShadow="md"
      backgroundImage={bgImage}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading as="h3" size="md" fontFamily="'Orbitron', sans-serif" color={headingColor}>
        Project
      </Heading>
      <Text fontSize="sm" color={textColor}>
        Brief description of project. Click to learn more.
      </Text>
    </GridItem>
  )
}

export default ProjectsContainer