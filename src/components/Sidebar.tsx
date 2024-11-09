import { Box, Image, HStack, Text, Link, Flex, Icon, Tooltip, useColorModeValue, Button, Stack } from '@chakra-ui/react';
import { FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageProvider';
import Yo from '../img/yo.png';
import "./btn-donate.css";

const Sidebar = () => {
  const { isSpanish } = useLanguage();

  // Estilos según el modo claro/oscuro
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const boxShadowColor = useColorModeValue("md", "lg");

  return (
    <Flex
      bgColor={bgColor}
      flexDirection="column"
      alignItems="center"
      position="fixed"
      h={{ base: "auto", md: "92%" }} // Ajuste para pantallas pequeñas y grandes
      w={{ base: "full", md: "22vw" }}
      overflowY="auto"
      p={4}
      my={6}
      gap={6} // Espaciado entre elementos
      borderRadius={{ base: "0", md: "20px" }}
      border={useColorModeValue("1px solid #ce3072", "none")}
      boxShadow={{ base: "none", md: boxShadowColor }}
    >
      <Flex gap={2} alignItems="center" mt={6} flexDirection="row">
        <Icon
          as={FaGithubAlt}
          w={{ base: 10, md: 14 }}
          h={{ base: 10, md: 14 }}
          p={2}
          color={textColor}
        />
        <Text color={textColor} fontWeight={600} fontSize={{ base: "lg", md: "xl" }} fontFamily={"monospace"}>
          Valentín Sánchez Guevara
        </Text>
      </Flex>

      <Box bg={useColorModeValue("gray.100", "gray.800")} borderRadius={"25px"} boxShadow="md" w={{ base: "80%", md: "90%" }} p={4}>
        <Image
          m="auto"
          src={Yo}
          w={{ base: "40vw", md: "15vw", lg: "11vw" }}
          borderRadius="15px"
          alt="Valentín Sánchez Guevara"
        />
      </Box>

      <Stack w="90%" bg={useColorModeValue("transparent", "gray.600")} borderRadius="10px" p={4} textAlign="left" boxShadow="md" border={useColorModeValue('1px solid #ce3072', 'none')}>
        <Text fontWeight="bold" color={useColorModeValue("gray.700", "whiteAlpha.800")} fontSize={{ base: "sm", md: "md" }}>
          {isSpanish ? "Rol:" : "Role:"}
        </Text>
        <Text color={textColor} fontWeight={600} fontSize={{ base: "md", md: "lg" }} fontFamily="monospace">
          {isSpanish ? "Frontend & Creativo" : "Frontend & Creative"}
        </Text>
      </Stack>

      <Stack w="90%" bg={useColorModeValue("transparent", "gray.600")} borderRadius="10px" p={4} textAlign="left" boxShadow="md" border={useColorModeValue('1px solid #ce3072', 'none')}>
        <Text fontWeight="bold" color={useColorModeValue("gray.700", "whiteAlpha.800")} fontSize={{ base: "sm", md: "md" }}>
          {isSpanish ? "Ubicación:" : "Location:"}
        </Text>
        <Text color={textColor} fontWeight={600} fontSize={{ base: "md", md: "lg" }} fontFamily="monospace">
          Mar del Plata, Argentina
        </Text>
      </Stack>

      <Flex flexDirection="column" alignItems="center" mt="auto" mb={4} w="100%">
        <HStack spacing={6} mb={4}>
          <Tooltip label={isSpanish ? "Mi GitHub" : "My GitHub"}>
            <Link href="https://github.com/valentinsg" isExternal>
              <Icon as={FaGithub} w={10} h={10} p={1} _hover={{ transform: "scale(1.1)" }} transition="all 0.5s ease" />
            </Link>
          </Tooltip>
          <Tooltip label={isSpanish ? "Ir a mi LinkedIn" : "Go to my LinkedIn"}>
            <Link href="https://www.linkedin.com/in/valent%C3%ADn-s-761910200/" isExternal>
              <Icon as={FaLinkedin} w={10} h={10} p={1} _hover={{ transform: "scale(1.1)" }} transition="all 0.5s ease" />
            </Link>
          </Tooltip>
        </HStack>

        <Tooltip label={isSpanish ? "Como podemos trabajar?" : "How we can work"}>
          <Button
            variant="outline"
            colorScheme="pink"
            fontFamily="monospace"
            fontSize={{ base: "sm", md: "md" }}
            p={6}
            mb={2}
          >
            {isSpanish ? "Trabajemos Juntos" : "Work Together"}
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
