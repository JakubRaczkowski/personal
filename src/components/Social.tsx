//@ts-nocheck
import { Stack, Icon, Divider, Box } from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";
import { useRouter } from "next/router";

function Social() {
  const router = useRouter();
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
    >
      <Link
        href="https://github.com/JakubRaczkowski"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon
          as={AiOutlineGithub}
          boxSize={8}
          _hover={{
            transform: "translateY(-5px)",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in-out",
            color: "blue.300",
          }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jakub-raczkowski/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon
          as={TiSocialLinkedin}
          boxSize={9}
          _hover={{
            transform: "translateY(-5px)",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in-out",
            color: "blue.300",
          }}
        />
      </Link>
      <Link
        href="https://www.instagram.com/bazooka.blast/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon
          as={AiOutlineInstagram}
          boxSize={8}
          _hover={{
            transform: "translateY(-5px)",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in-out",
            color: "blue.300",
          }}
        />
      </Link>

      <Box align="center">
        <Divider
          orientation="vertical"
          height="200px"
          border="1px solid black"
        />
      </Box>
    </Stack>
  );
}

export default Social;
