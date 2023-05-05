import { Stack } from "@chakra-ui/react";
import Icons from "./Icons";

function Social() {
  return (
    <Stack
      direction="column"
      align="center"
      spacing={7}
      position="fixed"
      bottom="0%"
      left="5%"
      zIndex={10}
      height="200px"
      display={{ base: "none", md: "flex" }}
    >
      <Icons />
    </Stack>
  );
}

export default Social;
