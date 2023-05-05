//@ts-nocheck
import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSqlite,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

import { skills } from "../data/projectData";

const Skills = () => {
  return (
    <Flex
    id='skills'
      p={{ base: 3, md: "20px 60px" }}
      width={{ base: "100%", sm: "90%", md: "75%" }}
      mx="auto"
      minHeight="100vh"
      direction="column"
    >
      <Text
        fontFamily="title"
        color="black"
        fontWeight="700"
        fontSize={{ base: "30px", md: "50px" }}
      >
        / Skills
      </Text>

      <Box
        width={{ base: "100%", md: "75%" }}
        minHeight="100%"
        mx="auto"
        p="10"
        pb="0"
      >
        <Box width="80%" mx="auto" p="1" mb="10">
          <Text
            textAlign="center"
            fontFamily="title"
            letterSpacing="wide"
            fontWeight="300"
            fontSize={{ base: "xl", md: "2xl" }}
          >
            {`My evergrowing tech stack`}
          </Text>
        </Box>

        <SimpleGrid
          columns={[2, 3, 4]}
          height="90%"
          align="center"
          rowGap={[6, 8, 10]}
          columnGap={[2, 4, 6]}
        >
          {skills.map(skill => {
            return (
              <Box
                key={skill.name}
                _hover={{
                  background: "white",
                  transform: " scale(1.2) ",
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <Icon as={skill.icon} boxSize="40px" color={`${skill.color}`} />
                <Text
                  fontSize={{ base: "12px", sm: "sm", md: "md" }}
                  fontFamily="bio"
                  fontWeight="semibold"
                >
                  {skill.name}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Skills;
