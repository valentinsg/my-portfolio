import React from 'react';
import { Box, Flex, Image, Text, Heading, Button } from '@chakra-ui/react';

const About = () => {
  return (
    <Box bg="#111" color="white" py={10} px={5}>
      <Flex justify="center" direction={["column", "row"]} maxW="1200px" mx="auto" gap={8}>
        
        {/* Columna izquierda: Información personal */}
        <Box textAlign="center">
          <Image 
            src="/path-to-your-image.jpg" 
            alt="Your Name" 
            borderRadius="full" 
            boxSize="150px" 
            objectFit="cover"
            mx="auto"
          />
          <Heading as="h2" size="lg" mt={4}>Your Name</Heading>
          <Text mt={2}>UI/UX Designer and Frontend Developer</Text>
          <Text>Mar del Plata, Argentina</Text>
          <Button colorScheme="pink" mt={4}>Let's Work Together</Button>
        </Box>

        {/* Columna derecha: Información de logros y experiencia */}
        <Box flex="1">
          <Heading as="h1" size="xl" mb={6}>
            Turning complex problems into simple design
          </Heading>
          <Flex justify="space-between" mb={6}>
            <Box textAlign="center">
              <Heading as="h2" size="lg">40+</Heading>
              <Text>Happy clients</Text>
            </Box>
            <Box textAlign="center">
              <Heading as="h2" size="lg">2+</Heading>
              <Text>Years of experience</Text>
            </Box>
            <Box textAlign="center">
              <Heading as="h2" size="lg">50+</Heading>
              <Text>Projects done</Text>
            </Box>
          </Flex>
          <Text fontSize="lg" lineHeight="tall" mb={6}>
            I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? If not, I suppose I must have been changed.
          </Text>
          <Box fontSize="md">
            <Text><strong>Email:</strong> your-email@example.com</Text>
            <Text><strong>Phone:</strong> +54 123 4567890</Text>
            <Text><strong>Location:</strong> Mar del Plata, Argentina</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
