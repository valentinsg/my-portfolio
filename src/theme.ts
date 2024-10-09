import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Press Start 2P', sans-serif",
    body: "'Press Start 2P', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1A202C",  
        color: "white",
      },
    },
  },
});

export default theme;
