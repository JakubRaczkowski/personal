import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
  Stack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
const Experience = () => {

    const orientation = useBreakpointValue({
      base: "horizontal",
      sm: "vertical",
    });

  return (
    <Flex
    id='experience'
      p={{ base: 3, md: "20px 60px" }}
      width={{ base: "100%", sm: "90%", md: "75%" }}
      mx="auto"
      minHeight={{ base: "100vh", sm: "100vh" }}
      direction="column"
      mb={{ base: 0, md: "10" }}
    >
      <Text
        fontFamily="title"
        color="black"
        fontWeight="700"
        fontSize={{ base: "30px", md: "50px" }}
      >
        / Exp & Edu
      </Text>

      <Box width={{ base: "100%", md: "75%" }} mx="auto" my="10%">
        <Tabs
          position="relative"
          variant="unstyled"
          size={{ base: "sm", md: "lg" }}
          // @ts-ignore
          orientation={orientation}
        >
          <Flex justify="center">
            <TabList mr={{ base: "0", md: "4", lg: "16" }}>
              <Tab>
                <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                  {`</salt>`}
                </Text>
              </Tab>
              <Tab>
                <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                  Freelancer
                </Text>
              </Tab>

              <Tab>
                <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                  Hospitality
                </Text>
              </Tab>

              <Tab fontSize="20px">
                <Text fontFamily="bio" fontSize={{ base: "xl", md: "2xl" }}>
                  Law
                </Text>
              </Tab>
            </TabList>
          </Flex>

          <TabIndicator
            alignSelf="center"
            bg="blue.500"
            height="3px"
            borderRadius="1px"
            width="2px"
          />

          <TabPanels height={"350px"} mt={{ base: "10%", sm: "0" }}>
            <TabPanel padding="2">
              <Stack
                fontFamily="bio"
                textAlign="justify"
                fontSize={{ base: "xl", md: "2xl" }}
                spacing="3"
              >
                <Flex direction="column" alignItems="center">
                  <Text fontWeight="semibold" mr="1">
                    Consultant
                  </Text>
                  <Link href="https://www.salt.dev/" target="_blank">
                    <Text
                      color="blue.500"
                      position="relative"
                      _before={{
                        content: '""',
                        position: "absolute",
                        display: "block",
                        width: "91%",
                        height: "1px",
                        bottom: "0",
                        left: "9%",
                        backgroundColor: "blue.500",
                        transform: "scaleX(0)",
                        transformOrigin: " left center",
                        transition: "transform 0.30s ease-in-out",
                      }}
                      _hover={{ _before: { transform: "scaleX(1)" } }}
                    >
                      {`</salt>`}
                    </Text>
                  </Link>
                </Flex>
                <HStack
                  fontSize="md"
                  fontWeight={600}
                  justify="center"
                  spacing="3"
                >
                  <Text>May 2022 - Jan 2023</Text>
                  <Text>Stockholm</Text>
                </HStack>
                <Text>
                  Intensive three months training program for full stack web
                  development with a focus on TDD, mob programming, and applied
                  learning.
                </Text>
                <Text>
                  Developing projects for Salt. Working with other alumni.
                  Partaking in post graduate program.
                </Text>
              </Stack>
            </TabPanel>

            <TabPanel padding="2">
              <Stack
                fontFamily="bio"
                textAlign="justify"
                fontSize={{ base: "xl", md: "2xl" }}
                spacing="3"
              >
                <Text fontWeight="semibold" textAlign="center">
                  Various
                </Text>
                <HStack
                  fontSize="md"
                  fontWeight={600}
                  justify="center"
                  spacing="3"
                >
                  <Text> 2022 - Present</Text>
                  <Text>Oslo</Text>
                </HStack>
                <Text>
                  Freelance photographer and light technician for film and
                  television.
                </Text>
                <Text>Freelance web developer.</Text>
              </Stack>
            </TabPanel>
            <TabPanel padding="2">
              <Stack
                fontFamily="bio"
                textAlign="justify"
                fontSize={{ base: "xl", md: "2xl" }}
                spacing="3"
              >
                <Text fontWeight="semibold" textAlign="center">
                  Various
                </Text>
                <HStack
                  fontSize="md"
                  fontWeight={600}
                  justify="center"
                  spacing="3"
                >
                  <Text>2014 - 2023</Text>
                  <Text>Oslo</Text>
                </HStack>
                <Text>
                  Co owner of Oh`Boy Street Food company. Restaurant consulting
                  and organizing pop ups.
                </Text>
                <Text>
                  Work in various companies in Oslo, including : Revolver,
                  Himkok, Kverneriet, Glasnost as chef/bartender.
                </Text>
              </Stack>
            </TabPanel>

            <TabPanel padding="2">
              <Stack
                fontFamily="bio"
                textAlign="justify"
                fontSize={{ base: "xl", md: "2xl" }}
                spacing="2"
              >
                <Flex direction="column" alignItems="center">
                  <Text fontWeight="semibold" mr="1">
                    Student
                  </Text>
                  <Link
                    href="https://www.umcs.pl/en/faculty-of-law-and-administration,2656.htm"
                    target="_blank"
                  >
                    <Text
                      color="blue.500"
                      position="relative"
                      _before={{
                        content: '""',
                        position: "absolute",
                        display: "block",
                        width: "70%",
                        height: "1px",
                        bottom: "0",
                        left: "30%",
                        backgroundColor: "blue.500",
                        transform: "scaleX(0)",
                        transformOrigin: " left center",
                        transition: "transform 0.30s ease-in-out",
                      }}
                      _hover={{ _before: { transform: "scaleX(1)" } }}
                    >
                      UMCS
                    </Text>
                  </Link>
                </Flex>
                <HStack
                  fontSize="md"
                  fontWeight={600}
                  justify="center"
                  spacing="3"
                >
                  <Text> 2008 - 2014</Text>
                  <Text>Lublin</Text>
                </HStack>
                <Text>Master of law.</Text>
                <Text>
                  Work as junior jurist in a law firm. Processing and analysis
                  of legal cases. Creating drafts of legal documents.Aiding
                  legal counsel
                </Text>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Experience;
