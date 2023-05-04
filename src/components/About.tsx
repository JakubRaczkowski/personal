import { Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import yo from "../../public/yo.jpg"
const About = () => {
  return (
    <Flex minHeight="100vh">
      <Flex
        p="20px 60px"
        width={{ base: "100%", sm: "90%", md: "75%" }}
        mx="auto"
        direction="column"
      >
        <Text
          fontFamily="title"
          color="black"
          fontWeight="700"
          fontSize="50px"
          p="0"
        >
          / Bio
        </Text>

        <Flex width="100%" justify="space-between" mt="20px">
          <Flex width="100%" mr="10" display={{ base: "none", lg: "flex" }}>
            <Flex>
              <Flex
                maxWidth={{
                  md: "300px",
                  lg: "300px",
                }}
                minWidth={{
                  md: "220px",
                  lg: "220px",
                }}
                mx="auto"
                rounded="full"
                align="flex-start"
              >
                <Image
                  src={yo}
                  alt="bioimage"
                  style={{ objectFit: "contain" }}
                />
                
              </Flex>
            </Flex>
          </Flex>
          <Flex p={{ base: 4, lg: 0 }}>
            <Stack
              textAlign="justify"
              position="relative"
              transform={`translateY(${-10}px)`}
              // width={{base: '100%', md: '100%', lg: '100%'}}
            >
              <Text p="0" fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                {`Hey!  My name is Kuba and I'm a full stack developer.`}
              </Text>
              <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                {`Back in '96 our family got our first PC, I was just a little kid trying to figure out DOS commands to run the scintillating Wolfenstein 3D. The idea of being able to talk to a machine and make it do what you want was fascinating.I was hooked!`}
              </Text>
              <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                {`Fast forward to today, I'm navigating through terminals, issuing commands, building projects, busting bugs, fixing designs, solving problems. All of these bring back that little spark of giddiness I felt back then. That's why I am passionate about coding!`}
              </Text>
              <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                {`Above all I  enjoy learning new things, improving my skills, and being part of teams that are driven to create something they truly believe in.`}
              </Text>

              <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                {`Thanks for dropping by!`}
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
