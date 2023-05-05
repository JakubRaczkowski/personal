import { Text, Divider, Stack } from "@chakra-ui/react";

const Resume = () => {
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
    <Stack
      direction="column"
      align="center"
      position="fixed"
      bottom="0%"
      right="5%"
      zIndex={10}
      mb='6'
      display={{ base: "none", md: "flex" }}
    >
      <Text
        textAlign="center"
        fontFamily="title"
        fontWeight="700"
        fontSize="22px"
        maxWidth="10px"
        cursor="pointer"
        onClick={downloadCv}
        _hover={{
          color: "blue.500",
          transform: "scale(1.02)",
          transitionDuration: "0.1s",
          transitionTimingFunction: "ease-in-out",
        }}
        mb="2"
      >
        Resume
      </Text>
      {/* <Divider orientation="vertical" height="200px" border="1px solid black" /> */}
    </Stack>
  );
};

export default Resume;
