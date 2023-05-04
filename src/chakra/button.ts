import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const shadowColor =
  "blue 0px 0px 2px 2px , rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        boxShadow: "blue.400",
      },
    },
    navbar: {
      color: "black",
      borderRadius: "0",
      fontSize: "14pt",
      fontWeight: 500,
      fontFamily: "title",
      letterSpacing: "3px",

      _hover: {
        shadow: shadowColor,
        borderRadius: "4",

        transform: "translateY(-5px)",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in-out",
      },
      // _focus: {
      //   shadow: shadowColor,
      //   borderRadius: "4",
      // },
    },
  },
};
