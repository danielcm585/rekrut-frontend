import React, { useState } from "react";

import { Navbar } from "../components";

import { Flex, Text, Input, Button, Link } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

export default function Login() {
  const [ email, setEmail ] = useState();
  const handleEmailChanges = (e) => setEmail(e.target.value);
  const [ password, setPassword ] = useState();
  const handlePasswordChanges = (e) => setPassword(e.target.value);

  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex w="30%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">LOGIN</Text>
          </Flex>
          <FormControl mt="8">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="your-email@gmail.com" value={email}
              borderColor="black" onChange={handleEmailChanges} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="your-password" value={password} 
              borderColor="black" onChange={handlePasswordChanges} />
          </FormControl>
          <Button mt="8" variant="outline" borderRadius="50" borderColor="black"
            onClick={() => {
              // TODO: Send request to api & get credentials
            }}>Login</Button>
          <Flex mt="38" justifyContent="center">
            <Link href="/register">
              <Text fontWeight="semibold">Register</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
