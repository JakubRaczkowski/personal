import { Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { projects } from "../data/projectData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <Flex
      id="projects"
      p={{ base: 3, md: "20px 60px" }}
      width={{ base: "100%", sm: "90%", md: "75%" }}
      mx="auto"
      direction="column"
    >
      <Text
        fontFamily="title"
        color="black"
        fontWeight="700"
        fontSize={{ base: "30px", md: "50px" }}
      >
        {" "}
        / Projects
      </Text>
      <Wrap width="100%" spacing="10" mx="auto" my="5%">
        {projects.map(project => {
          return <ProjectItem key={project.title} {...project} />;
        })}
      </Wrap>
    </Flex>
  );
};

export default Projects;
