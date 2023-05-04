import { Flex, Button, Stack, Icon } from "@chakra-ui/react";
import { shadowColor } from "../chakra/button";
import { useEffect } from "react";
import { BsDownload } from "react-icons/bs";

const Navbar = () => {
  const downloadCv = () => {
    const documentURL = "/JakubRaczkowskiCv.pdf";
    const fileName = "JakubRaczkowskiCv";
    const anchor = document.createElement("a");
    anchor.href = documentURL;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center" }}
      justify="space-between"
      height={{ base: "150px", md: "100px" }}
      pt="20px"
      width="90%"
      mx="auto"
      // border="1px solid green"
      boxShadow={"0 4px 4px -5px #000000"}
    >
      <Flex mb={{ base: "30px", md: "0" }} mt={{ base: "10px" }}>
        <Button
          fontSize={{ base: "16px", md: "20px" }}
          variant="navbar"
          shadow={shadowColor}
          borderRadius={4}
        >
          Raczkowski
        </Button>
      </Flex>

      <Stack
        direction={{ base: "row", md: "row" }}
        spacing={{ base: "2", md: "6" }}
        align={{ base: "center", md: "center" }}
      >
        <Button variant="navbar" fontSize={{ base: "16px", md: "20px" }}>
          Projects
        </Button>
        <Button variant="navbar" fontSize={{ base: "16px", md: "20px" }}>
          Skills
        </Button>
        <Button variant="navbar" fontSize={{ base: "16px", md: "20px" }}>
          Bio
        </Button>
        <Button variant="navbar" fontSize={{ base: "16px", md: "20px" }}>
          Experience
        </Button>
        <Button variant="navbar" fontSize={{ base: "16px", md: "20px" }}>
          Contact
        </Button>
        {/* <Button
          color="black"
          fontFamily="title"
          border="1px solid #2196F3"
          background="white"
          fontWeight="500"
          letterSpacing="3px"
          p="4"
          ml="2"
          fontSize={{ base: "16px", md: "20px" }}
          _hover={{
            background: "white",
            transform: "translateY(-7px) translateX(7px)",
            boxShadow: "-5px 5px 0px 1px #2196F3",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in-out",
          }}
          onClick={downloadCv}
        >
          Resume <Icon as={BsDownload} ml="2" />{" "}
        </Button> */}
      </Stack>
    </Flex>
  );
};

export default Navbar;
