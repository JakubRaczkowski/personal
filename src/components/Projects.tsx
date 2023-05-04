import { Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { projects } from "../data/projectData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
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
        {" "}
        / Projects
      </Text>
      <Wrap
        width={{ base: "100%", md: "75%" }}
        spacing="10"
        mx="auto"
        my="5%"
      >
        {projects.map(project => {
          return <ProjectItem key={project.title} {...project} />;
        })}
      </Wrap>
    </Flex>
  );
};

export default Projects;
