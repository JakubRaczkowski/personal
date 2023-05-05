import {
  Flex,
  Text,
  Button,
  Box,
  Input,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { TbRuler } from "react-icons/tb";
import { sendContactForm } from "../../lib/api";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const initialTouched = {
    name: false,
    email: false,
    subject: false,
    message: false,
  };

  const toast = useToast();
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(initialTouched);

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched(prev => ({ ...prev, [event.target.name]: true }));
    console.log(touched);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    console.log(values);

    try {
      await sendContactForm(values);
      toast({
        title: "Thanks for reaching out!",
        status: "success",
        description: "I will get back to you ASAP",
        duration: 3000,
        isClosable: true,
        position: "top",
      })
    } catch (error: any) {
      console.log(error, "error in handleSubmit");
      setError(error.message);
    }
    setValues(initialValues);
    setTouched(initialTouched);
    setLoading(false);
  };
  return (
    <Flex
    id='contact'
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
        p="0"
      >
        / Contact
      </Text>

      <Box width={{ base: "100%", md: "75%" }} mx="auto" p="10" pb="0">
        <Box width="80%" mx="auto" p="1">
          <Text
            textAlign="center"
            fontFamily="bio"
            fontSize={{ base: "xl", md: "2xl" }}
          >
            {` I'm always open for new contacts.`} <br />
            {`Send me a message if you'd like
     to work together or just say hi!`}
          </Text>
        </Box>
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          {error && (
            <Text color="red" fontSize="16px" p="3">
              {error}{" "}
            </Text>
          )}
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            errorBorderColor="#2196F3"
            bg="gray.200"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            touched.email && (!values.email || !values.email.includes("@"))
          }
          mb={5}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="#2196F3"
            bg="gray.200"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Valid email required</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.subject && !values.subject}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            errorBorderColor="#2196F3"
            bg="gray.200"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            resize="none"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            bg="gray.200"
            errorBorderColor="red.300"
            _focus={{ outline: "none" }}
            rows={4}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <Flex width="100%" justifyContent="center">
          <Button
            fontSize={{ base: "16px", md: "18px" }}
            p="1.2rem 1.5rem"
            onClick={handleSubmit}
            isLoading={loading}
            isDisabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
          >
            Send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Contact;
