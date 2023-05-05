import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

const Icons = () => {
  return (
    <>
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
    </>
  );
};

export default Icons;
