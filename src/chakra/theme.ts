// 1. Import `extendTheme`
import "@fontsource/bebas-neue";
import "@fontsource/eb-garamond";
import "@fontsource/crimson-pro";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  
  
  fonts: {
    title: "Bebas Neue, cursive",
    subtitle: "EB Garamond, serif",
    bio: "Crimson Pro, serif",
  },
  components:{
    Button
  }
});
