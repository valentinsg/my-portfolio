import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Configuración inicial del modo oscuro basado en el sistema
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// Definición del tema extendido
const theme = extendTheme({
  config,
  fonts: {
    // Actualizamos las fuentes a monospace
    heading: "monospace",
    body: "monospace",
  },
  
  // Estilos globales
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  // Definición de colores personalizados para tu marca
  colors: {
    brand: {
      50: "#ffe5f1",
      100: "#ffb8d6",
      200: "#ff8abb",
      300: "#ff5ca1",
      400: "#ff2e87",
      500: "#ff006d",
      600: "#cc0057",
      700: "#990041",
      800: "#66002b",
      900: "#330016",
    },
  },

  // Estilos personalizados de los componentes
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      variants: {
        solid: (props: { colorMode: string }) => ({

          // Usamos `useColorModeValue` para elegir colores dependiendo del modo
          bg: props.colorMode === "dark" ? "brand.500" : "brand.400",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.600" : "brand.500",
          },
        }),
        outline: (props: { colorMode: string }) => ({
          borderColor: props.colorMode === "dark" ? "teal.300" : "teal.500",
          color: props.colorMode === "dark" ? "teal.300" : "teal.500",
          _hover: {
            bg: props.colorMode === "dark" ? "teal.800" : "teal.50",
          },
        }),
      },
    },
  },
});

export default theme;
