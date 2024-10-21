import { Box, Image, HStack, Text, Link, Flex, Icon, Tooltip, useColorModeValue, Button } from '@chakra-ui/react';
import { FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageProvider';
import Yo from '../img/yo.png';
import "./btn-donate.css";

const Sidebar = () => {
  const { isSpanish } = useLanguage();

  // Estilos según el modo claro/oscuro
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const boxShadowColor = useColorModeValue("md", "lg");

  return (
    <Box
      as="aside"
      w={{ base: "100vw", sm: "80vw", md: "22vw", lg: "21vw" }}
      h={{ base: "auto", md: "90vh", lg: "90vh" }}
      bgColor={bgColor}
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      position={{ base: "relative", md: "fixed" }}
      borderRadius={{ base: "0", md: "25px" }}
      p={{ base: 4, md: 2 }}
      boxShadow={{ base: "none", md: boxShadowColor }}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        mt={4}
        mr={6}
        gap={2}
      >
        <Icon
          as={FaGithubAlt}
          w={{ base: 10, md: 14, lg: 14 }}
          h={{ base: 10, md: 14, lg: 14 }}
          p={2}
          color={textColor}
        />
        <Text
          fontSize={{ base: 20, md: 22, lg: "xl" }}
          color={textColor}
          fontWeight={600}
          fontFamily={"monospace"}
        >
          Valentín Sánchez Guevara
        </Text>
      </Flex>

      <Box
        bg={useColorModeValue("gray.100", "gray.800")}
        borderRadius={"25px"}
        boxShadow="md"
        w={"17vw"}
        p={6}
        mt={3}
      >
        <Image
          m={"auto"}
          mb={-6}
          src={Yo}
          w={{ base: "50vw", md: "15vw", lg: "11vw" }}
          borderRadius="15px"
          alt="Valentín Sánchez Guevara"
        />
      </Box>

      <Box
        w="88%"
        bg={useColorModeValue("gray.300", "gray.600")}
        borderRadius="10px"
        p={3}
        mt={10}
        textAlign="left"
        boxShadow="md"
      >
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight="bold"
          color={useColorModeValue("gray.700", "whiteAlpha.800")}
          mb={1}
          ml={3}
        >
          {isSpanish ? "Rol:" : "Role:"}
        </Text>
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          color={textColor}
          fontWeight={600}
          fontFamily="monospace"
          ml={3}
        >
          {isSpanish ? "Frontend & Creativo" : "Frontend & Creative"}
        </Text>
      </Box>

      <Box
        w="88%"
        bg={useColorModeValue("gray.300", "gray.600")}
        borderRadius="10px"
        p={3}
        mt={6}
        textAlign="center"
        boxShadow="md"
      >
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight="bold"
          color={useColorModeValue("gray.700", "whiteAlpha.800")}
          textAlign={"left"}
          mb={1}
          ml={3}
        >
          {isSpanish ? "Ubicación:" : "Location:"}
        </Text>
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          color={textColor}
          align={"left"}
          ml={3}
          fontWeight={600}
          fontFamily="monospace"
        >
          Mar del Plata, Argentina
        </Text>
      </Box>

      <Flex flexDir={"column"} alignItems={"center"} mt={"auto"} mb={8}>
        <HStack spacing={6} mb={6}>
          <Tooltip label={isSpanish ? "Mi GitHub" : "My GitHub"} aria-label={isSpanish ? "GitHub" : "GitHub"}>
            <Link href="https://github.com/valentinsg" isExternal>
              <Icon
                as={FaGithub}
                w={12}
                h={12}
                borderRadius="15px"
                p={1}
                border="2px solid"
                borderColor={useColorModeValue("gray.400", "gray.600")}
                _hover={{
                  bgGradient: "linear(to-br, #ce3072, #414358)",
                  transform: "scale(1.1)",
                  borderColor: "#414358",
                  transition: "all 0.5s ease-in-out",
                }}
                transition="all 0.9s ease-in-out"
              />
            </Link>
          </Tooltip>
          <Tooltip label={isSpanish ? "Ir a mi LinkedIn" : "Go to my LinkedIn"} aria-label={isSpanish ? "LinkedIn" : "LinkedIn"}>
            <Link href="https://www.linkedin.com/in/valent%C3%ADn-s-761910200/" isExternal>
              <Icon
                as={FaLinkedin}
                w={12}
                h={12}
                borderRadius="15px"
                p={1}
                border="2px solid"
                borderColor={useColorModeValue("gray.400", "gray.600")}
                _hover={{
                  bgGradient: "linear(to-br, #414358, #ce3072)",
                  transform: "scale(1.1)",
                  borderColor: "#414358",
                  transition: "all 0.5s ease-in-out",
                }}
                transition="all 0.9s ease-in-out"
              />
            </Link>
          </Tooltip>
        </HStack>

        <Button
          variant="outline"
          p={6}
          w={"15vw"}
          boxShadow={'md'}
          colorScheme="pink"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          {isSpanish ? "Trabajemos Juntos" : "Work Together"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
