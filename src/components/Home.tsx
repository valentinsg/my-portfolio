import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4}>Welcome to My Portfolio</Heading>
      <Text fontSize="xl">
        Hi, I'm Valentín Sánchez Guevara. I'm a Frontend Developer and Creative based in Mar del Plata, Argentina.
      </Text>
    </Box>
  );
};

export default Home;