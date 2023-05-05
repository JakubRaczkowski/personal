import { Button, Flex, Stack } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { shadowColor } from "../chakra/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const scrollThreshold = 5;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const show =
        prevScrollPos - currentScrollPos > 0 || currentScrollPos < 10;

      setShowNavbar(show);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Flex
      id="nav"
      position="sticky"
      top={showNavbar ? "0" : "-100px"}
      direction={{ base: "column", md: "row" }}
      align={{ base: "center" }}
      justify="space-between"
      height={{ base: "150px", md: "85px" }}
      pt="20px"
      width="90%"
      mx="auto"
      boxShadow={"0 4px 4px -5px #000000"}
      bg="white"
      zIndex='1000'
      transition="top 0.3s ease-in-out"
    >
      <Flex
        mb={{ base: "30px", md: "0" }}
        mt={{ base: "10px" }}
        justifyContent="center"
      >
        <ScrollLink to="top" smooth={true}>
          <Button
            variant="navbar"
            shadow={shadowColor}
            _focus={{ shadow: shadowColor }}
            borderRadius={4}
          >
            Raczkowski
          </Button>
        </ScrollLink>
      </Flex>

      <Stack direction={{ base: "row" }} spacing={{ base: "1", md: "4" }}>
        <ScrollLink to="bio" smooth={true}>
          <Button isActive={false} variant="navbar">Bio</Button>
        </ScrollLink>
        <ScrollLink   to="experience" smooth={true}>
          <Button isActive={false} variant="navbar">Exp / Edu</Button>
        </ScrollLink>
        <ScrollLink   to="projects" smooth={true}>
          <Button  isActive={false} variant="navbar">Projects</Button>
        </ScrollLink>
        <ScrollLink  to="skills" smooth={true}>
          <Button isActive={false} variant="navbar">Skills</Button>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true}>
          <Button isActive={false} variant="navbar">Contact</Button>
        </ScrollLink>
      </Stack>
    </Flex>
  );
};

export default Navbar;
