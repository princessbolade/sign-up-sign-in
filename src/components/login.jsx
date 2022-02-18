import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
} from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect } from "react";
import useForm from "../hooks/useForm";

function Login() {
  const [value, setValue] = useForm({ email: "", password: "" });

  const [user, loading, error] = useAuthState(auth);

  const isError = value === "";

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (loading) {
      return;
    }
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("black", "white")}
    >
      <Stack color={"black"} spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("black", "white")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isInvalid={isError} isRequired onSubmit={onSubmit}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={value.email}
                onChange={setValue}
                border={"1px solid"}
                borderColor="blue.400"
                _hover={{
                  borderColor: "blue.500",
                }}
                focusBorderColor="blue.600"
              />
              {!isError ? (
                <FormHelperText color={"black"} pt={"3px"}>
                  Enter your email address
                </FormHelperText>
              ) : (
                <FormErrorMessage color={"red.800"}>
                  Email is required
                </FormErrorMessage>
              )}

              <FormLabel pt={"10px"}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={value.password}
                onChange={setValue}
                border={"1px solid"}
                borderColor="blue.400"
                _hover={{
                  borderColor: "blue.500",
                }}
                focusBorderColor="blue.600"
              />
              {!isError ? (
                <FormHelperText color={"black"} pt={"3px"}>
                  Enter your password
                </FormHelperText>
              ) : (
                <FormErrorMessage color={"red.800"}>
                  Password is required
                </FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox borderColor={"gray.400"}>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
                onClick={() =>
                  logInWithEmailAndPassword(value.email, value.password)
                }
              >
                Sign in
              </Button>

              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
            </Stack>
          </Stack>
          <Box pt={"15px"} textAlign={"center"}>
            <Text fontSize={"16px"}>
              <Link color={"blue.400"}>Sign up</Link> if you do not have an
              account
            </Text>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
