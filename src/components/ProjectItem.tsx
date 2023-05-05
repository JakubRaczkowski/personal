import {
  Flex,
  Image,
  Text,
  Icon,
  Stack,
  Box,
  WrapItem,
} from "@chakra-ui/react";
import { Project } from "../data/projectData";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";


const ProjectItem = ({
  title,
  description,
  image,
  github,
  demo,
  technologies,
}: Project) => {
  const [imageIconDisplay, setImageIconDisplay] = useState(false);

  const handleMouseMovement = () => {
    setImageIconDisplay(prev => !prev);
  };
  return (
    <WrapItem
      width="100%"
      bg="gray.100"
      // minHeight={{base:"20vh",md:"50vh"}}
      // maxHeight={{base:"70vh",md:"65vh"}}
      display="flex"
      flexDir="row"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.2)"
      borderRadius="md"
      p="4"
      _hover={{
        base: {
          transform: "translateY(-5px) ",
          transition: "0.2s ease-in-out",
        },
        lg: {
          transform: "none",
          transition: "none",
        },
      }}
    >
      <Box
        // position="absolute"
        width={{ base: "100%", md: "100%", xl: "70%" }}
        height={{ base: "100%", md: "100%" }}
        position="relative"
        display={{ base: "none", lg: "block" }}
      >
        <Box
          width="100%"
          height="100%"
          onMouseEnter={handleMouseMovement}
          onMouseLeave={handleMouseMovement}
        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            height="100%"
            width="100%"
            align="left"
            opacity={imageIconDisplay ? 0.3 : 1}
          />
          {imageIconDisplay && (
            <Stack
              direction="row"
              spacing="5"
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              justify="center"
              align="center"
            >
              <Link href={github} target="_blank">
                <Icon
                  as={BsGithub}
                  boxSize="12"
                  _hover={{ color: "blue.500" }}
                />
              </Link>

              {demo && (
                <Link href={demo} target="_blank">
                  <Icon
                    as={FiExternalLink}
                    boxSize="12"
                    color="black"
                    _hover={{ color: "blue.500" }}
                  />
                </Link>
              )}
            </Stack>
          )}
        </Box>
      </Box>

      <Box
        bg="gray.100"
        width={{ base: "100%", lg: "50%" }}
        height={{ base: "100%", lg: "100%" }}
        p="5"
        // backgroundImage={{ base: `url(${image})`, md: "none" }}
        // backgroundSize="cover"
        // bgGradient={`linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)),url(${image})`}
      >
        <Text
          fontSize="24px"
          align="center"
          fontFamily="title"
          fontWeight="bold"
        >
          {title}
        </Text>

        <Stack spacing="2" borderRadius="4" p="4">
          <Text
            fontFamily="bio"
            fontSize={{ base: "16px", md: "20px" }}
            textAlign="justify"
          >
            {description}
          </Text>
          <Stack
            direction={{ base: "column", md: "row", lg: "row" }}
            justify="center"
            wrap="wrap"
            spacing="2"
          >
            {technologies.map((tech, index) => {
              return (
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontFamily="bio"
                  fontWeight="semibold"
                  color="black"
                  key={index}
                >
                  {tech}
                </Text>
              );
            })}
          </Stack>
        </Stack>

        <Flex direction="column" display={{ base: "flex", lg: "none" }}>
          <Stack direction="row" p="5" justifyContent="flex-end" spacing="5">
            <Link href={github} target="_blank">
              <Icon
                as={BsGithub}
                boxSize="30px"
                color="black"
                _hover={{ color: "blue.500" }}
              />
            </Link>
            {demo && (
              <Link href={demo} target="_blank">
                <Icon
                  as={FiExternalLink}
                  boxSize="30px"
                  color="black"
                  _hover={{ color: "blue.500" }}
                />
              </Link>
            )}
          </Stack>
        </Flex>
      </Box>
    </WrapItem>
  );
};

export default ProjectItem;

{
  /* <Flex width="100%" height="100%" position="relative">
  <Box
    position="absolute"
    width={{ base: "100%", md: "67%" }}
    height={{ base: "50%", md: "100%" }}
  >
    <Image
      src={image}
      borderRadius="4"
      alt={title}
      objectFit="cover"
      height="100%"
      width="100%"
      opacity="0.8"
      _hover={{ opacity: "1" }}
      zIndex={-1}
    />
  </Box>

  <Box
    bg="gray.50"
    width={{ base: "100%", md: "33%" }}
    height={{ base: "50%", md: "100%" }}
    position="absolute"
    zIndex="1"
    top="0"
    right="0"
  >
    <Flex
      width="100%"
      height="100%"
      direction="column"
      justifyContent="space-between"
    >
      <Stack width="100%" direction="column" spacing="1" p="4" align="flex-end">
        <Text fontSize="lg">Featured Project</Text>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
      </Stack>

      <Box borderRadius="4" p="4">
        <Text fontFamily="subtitle">{description}</Text>
      </Box>

      <Flex direction="column">
        <Flex>
          <Stack direction="row">
            {technologies.map((tech, index) => {
              return (
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="semibold"
                  color="black"
                  letterSpacing="wide"
                  px={2}
                  py={1}
                  mr={2}
                  mb={2}
                  key={index}
                >
                  {tech}
                </Text>
              );
            })}
          </Stack>
        </Flex>
        <Stack direction="row" p="5" justifyContent="flex-end" spacing="5">
          <Icon as={BsGithub} href={github} boxSize="30px" color="black" />
          <Icon as={FiExternalLink} href={demo} boxSize="30px" color="black" />
        </Stack>
      </Flex>
    </Flex>
  </Box>
</Flex>; */
}
