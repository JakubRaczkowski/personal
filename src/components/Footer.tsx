import { Stack } from "@chakra-ui/react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={7}
      mt="20px"
      height="100px"
      width="100%"
      mx="auto"
      display={{ base: "flex", md: "none" }}
    >
      <Icons />
    </Stack>
  );
};

export default Footer;
