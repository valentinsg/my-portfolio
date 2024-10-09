import { Box, Image, HStack, Text, Link, Flex, Icon } from '@chakra-ui/react';
import { FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';  // Icono similar a Copilot
import Yo from '../img/yo.png';
import "./btn-donate.css";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      w={{ base: "100vw", sm: "80vw", md: "22vw", lg: "21vw" }}  // Añadimos responsive desde sm a lg
      h={{ base: "auto", md: "90vh", lg: "90vh" }} // Ajuste para lg
      bg="gray.700"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      position={{ base: "relative", md: "fixed" }}
      borderRadius={{ base: "0", md: "25px" }}
      p={{ base: 4, md: 2 }}
      boxShadow={{ base: "none", md: "lg" }}  // Sombra solo para pantallas grandes
    >
      {/* Encabezado con icono y nombre */}
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
          color={"gray.300"}
        />
        <Text
          fontSize={{ base: 20, md: 22, lg: "xl" }}
          color={"gray.300"}
          fontWeight={600}
          fontFamily={"monospace"}
        >
          Valentín Sánchez Guevara
        </Text>
      </Flex>

      {/* Imagen de perfil */}
      <Box
        bg={"gray.800"}
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

      {/* Información adicional */}
      <Box
        w="88%"
        bg="gray.600"
        borderRadius="10px"
        p={3}
        mt={10}
        textAlign="left"
        boxShadow="md"
      >
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight="bold"
          color="whiteAlpha.800"
          mb={1}
          ml={3}
        >
          Role:
        </Text>
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          color="gray.300"
          fontWeight={600}
          fontFamily="monospace"
          ml={3}
        >
          Frontend & Creative
        </Text>
      </Box>

      <Box
        w="88%"
        bg="gray.600"
        borderRadius="10px"
        p={3}
        mt={6}
        textAlign="center"
        boxShadow="md"
      >
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight="bold"
          color="whiteAlpha.800"
          textAlign={"left"}
          mb={1}
          ml={3}
        >
          Location:
        </Text>
        <Text
          fontSize={{ base: "lg", lg: "xl" }}
          color="gray.300"
          align={"left"}
          ml={3}
          fontWeight={600}
          fontFamily="monospace"
        >
          Mar del Plata, Argentina
        </Text>
      </Box>

      {/* Enlaces a redes sociales */}
      <Flex flexDir={"column"} alignItems={"center"} mt={"auto"} mb={8}>
        <HStack spacing={6} mb={6}>
          <Link href="https://github.com/tu-github" isExternal>
            <Icon
              as={FaGithub}
              w={12}
              h={12}
              borderRadius="15px"
              p={1}
              border="2px solid"
              borderColor="gray.600"
              _hover={{
                bgGradient: "linear(to-br, #ce3072, #414358)",
                transform: "scale(1.1)",
                borderColor: "#414358",
                transition: "all 0.5s ease-in-out",
              }}
              transition="all 0.9s ease-in-out"
            />
          </Link>
          <Link href="https://linkedin.com/in/tu-linkedin" isExternal>
            <Icon
              as={FaLinkedin}
              w={12}
              h={12}
              borderRadius="15px"
              p={1}
              border="2px solid"
              borderColor="gray.600"
              _hover={{
                bgGradient: "linear(to-br, #414358, #ce3072)",
                transform: "scale(1.1)",
                borderColor: "#414358",
                transition: "all 0.5s ease-in-out",
              }}
              transition="all 0.9s ease-in-out"
            />
          </Link>
        </HStack>

        {/* Botón de "Work Together" */}
        <button className="btn-donate"> Work Together </button>
      </Flex>

    </Box >
  );
};

export default Sidebar;
