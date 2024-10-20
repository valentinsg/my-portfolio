import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface CircleProps {
  size: string;
  position: { x: string; y: string };
  color: string;
}

const Circle: React.FC<CircleProps> = ({ size, position, color }) => (
  <motion.div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: color,
      top: position.y,
      left: position.x,
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const AnimatedBackground = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const circleColor = useColorModeValue('brand.200', 'brand.700');
  
  const circles = [
    { size: '300px', position: { x: '10%', y: '20%' } },
    { size: '200px', position: { x: '70%', y: '10%' } },
    { size: '150px', position: { x: '40%', y: '60%' } },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg={bgColor}
      zIndex="-1"
      overflow="hidden"
    >
      {circles.map((circle, index) => (
        <Circle key={index} {...circle} color={circleColor} />
      ))}
    </Box>
  );
};

export default AnimatedBackground;