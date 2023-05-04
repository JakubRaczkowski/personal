import { Flex, Stack, Text } from "@chakra-ui/react";
import me from "../../public/aidraw.gif";
import Image from "next/image";

const Hero = () => {
  return (
    <Flex
      p="20px 60px"
      width={{ base: "100%", sm: "90%", md: "75%" }}
      minHeight="80vh"
      mx="auto"
      direction="column"
    >
      <Flex p="24" width="100%" justifyContent="space-around" my="auto">
        <Flex mr={{ base: "3", sm: "5", md: "8" }}>
          <Stack
            pt={{ base: "4", sm: "6", md: "8", lg: "10" }}
            spacing={{ base: "-1", sm: "-3", md: "-5", lg: "-8" }}
          >
            <Text
              fontFamily="title"
              color="black"
              fontWeight="700"
              fontSize={{ base: "28px", sm: "38px", md: "60px", lg: "100px" }}
              p="0"
              transform="skewX(0deg) translateX(0px)"
              transitionDuration="0.25s"
              transitionTimingFunction="ease-in-out"
              _hover={{
                transform: "skewX(-12deg) translateX(30px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Kuba
            </Text>
            <Text
              fontFamily="title"
              color="black"
              fontWeight="700"
              fontSize={{ base: "28px", sm: "38px", md: "60px", lg: "100px" }}
              p="0"
              transform="skewX(0deg) translateX(0px)"
              transitionDuration="0.25s"
              transitionTimingFunction="ease-in-out"
              _hover={{
                transform: "skewX(-12deg) translateX(30px)",
                transitionDuration: "0.25s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Raczkowski
            </Text>
            <Text
              fontFamily="subtitle"
              color="black"
              fontWeight="400"
              fontSize={{ base: "22px", sm: "30px", md: "40px", lg: "60px" }}
              p="0"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                display: "block",
                width: "100%",
                height: "2px",
                bottom: { base: "0", lg: "4" },
                left: "0",
                backgroundColor: "#000",
                transform: "scaleX(0)",
                transition: "transform 0.30s ease-in-out",
              }}
              _hover={{ _before: { transform: "scaleX(1)" } }}
            >
              Full Stack Web Dev
            </Text>
          </Stack>
        </Flex>

        <Flex>
          <Flex justifyContent="center" alignItems="center">
            <Flex
              maxWidth={{
                base: "200px",
                sm: "250px",
                md: "300px",
                lg: "300px",
              }}
              minWidth={{
                base: "130px",
                sm: "170px",
                md: "220px",
                lg: "220px",
              }}
              mx="auto"
            >
              <Image src={me} alt="me" style={{ objectFit: "cover" }} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
