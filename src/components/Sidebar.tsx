import { useState, useEffect } from 'react';
import { Box, Image, HStack, Text, Link, Flex, Icon, Tooltip, useColorModeValue, Button, Stack } from '@chakra-ui/react';
import { FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageProvider';
import Yo from '../img/yo.png';

const Sidebar = () => {
  const { isSpanish } = useLanguage();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const boxShadowColor = useColorModeValue("md", "lg");
  
  // Determine the max height based on viewport
  const [maxHeight, setMaxHeight] = useState('95vh');

  // Update max height on mount and window resize
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      const newMaxHeight = Math.min(vh * 0.95, 800); // Cap at 800px
      setMaxHeight(`${newMaxHeight}px`);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <Box
      position="sticky"
      top={4}
      maxHeight={maxHeight}
      height="auto"
      w={{ base: "100%", md: "280px", lg: "320px" }}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#ce3072",
          borderRadius: "20px",
          "&:hover": {
            background: "#e84b8a",
          }
        },
        "&::-webkit-scrollbar-thumb:active": {
          background: "#b32860",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "#ce3072 transparent"
      }}
    >
      <Flex
        bgColor={bgColor}
        flexDirection="column"
        alignItems="center"
        h="full"
        w="full"
        overflowY="auto"
        p={{ base: 3, md: 4 }}
        gap={{ base: 4, md: 6 }}
        borderRadius="20px"
        border={useColorModeValue("1px solid #ce3072", "none")}
        boxShadow={{ base: "none", md: boxShadowColor }}
      >
        <Flex alignItems="center" gap={1} mt={4} flexDirection="row">
          <Icon
            as={FaGithubAlt}
            w={{ base: 8, md: 10 }}
            h={{ base: 8, md: 10 }}
            p={2}
            color={textColor}
          />
            <Text 
            color={textColor} 
            fontSize={{ base: "sm", md: "md", lg: "lg" }} 
            fontFamily="monospace"
            noOfLines={2}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
            >
            Valentín Sanchez Guevara
            </Text>
        </Flex>

        <Box 
          bg={useColorModeValue("gray.100", "gray.800")} 
          borderRadius="25px" 
          boxShadow="md" 
          w="90%"
          p={3}
        >
          <Image
            m="auto"
            src={Yo}
            maxW={{ base: "150px", md: "180px" }}
            w="100%"
            borderRadius="15px"
            alt="Valentín Sánchez Guevara"
          />
        </Box>

        <Stack 
          w="90%" 
          spacing={2}
          bg={useColorModeValue("transparent", "gray.600")} 
          borderRadius="10px" 
          p={3} 
          textAlign="left" 
          boxShadow="md" 
          border={useColorModeValue('1px solid #ce3072', 'none')}
        >
          <Text 
            fontWeight="bold" 
            color={useColorModeValue("gray.700", "whiteAlpha.800")} 
            fontSize={{ base: "xs", md: "sm" }}
          >
            {isSpanish ? "Rol:" : "Role:"}
          </Text>
          <Text 
            color={textColor} 
            fontWeight={600} 
            fontSize={{ base: "sm", md: "md" }} 
            fontFamily="monospace"
          >
            {isSpanish ? "Frontend & Creativo" : "Frontend & Creative"}
          </Text>
        </Stack>

        <Stack 
          w="90%" 
          spacing={2}
          bg={useColorModeValue("transparent", "gray.600")} 
          borderRadius="10px" 
          p={3} 
          textAlign="left" 
          boxShadow="md" 
          border={useColorModeValue('1px solid #ce3072', 'none')}
        >
          <Text 
            fontWeight="bold" 
            color={useColorModeValue("gray.700", "whiteAlpha.800")} 
            fontSize={{ base: "xs", md: "sm" }}
          >
            {isSpanish ? "Ubicación:" : "Location:"}
          </Text>
          <Text 
            color={textColor} 
            fontWeight={600} 
            fontSize={{ base: "sm", md: "md" }} 
            fontFamily="monospace"
          >
            Mar del Plata, Argentina
          </Text>
        </Stack>

        <Flex 
          flexDirection="column" 
          alignItems="center" 
          mt="auto" 
          mb={3} 
          w="100%"
          gap={2}
        >
          <HStack spacing={4}>
            <Tooltip label={isSpanish ? "Mi GitHub" : "My GitHub"}>
              <Link href="https://github.com/valentinsg" isExternal>
                <Icon 
                  as={FaGithub} 
                  w={{ base: 8, md: 9 }} 
                  h={{ base: 8, md: 9 }} 
                  p={1} 
                  _hover={{ transform: "scale(1.1)" }} 
                  transition="all 0.5s ease" 
                />
              </Link>
            </Tooltip>
            <Tooltip label={isSpanish ? "Ir a mi LinkedIn" : "Go to my LinkedIn"}>
              <Link href="https://www.linkedin.com/in/valent%C3%ADn-s-761910200/" isExternal>
                <Icon 
                  as={FaLinkedin} 
                  w={{ base: 8, md: 9 }} 
                  h={{ base: 8, md: 9 }} 
                  p={1} 
                  _hover={{ transform: "scale(1.1)" }} 
                  transition="all 0.5s ease" 
                />
              </Link>
            </Tooltip>
          </HStack>

          <Tooltip label={isSpanish ? "Como podemos trabajar?" : "How we can work"}>
            <Button
              variant="outline"
              colorScheme="pink"
              fontFamily="monospace"
              fontSize={{ base: "xs", md: "md" }}
              size={{ base: "sm", md: "md" }}
              p={{ base: 4, md: 6 }}
            >
              {isSpanish ? "Trabajemos Juntos" : "Work Together"}
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;