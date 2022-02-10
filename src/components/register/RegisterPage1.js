import React, { useState } from "react";

import { Flex, Text, Input, Button, Link, Grid, Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export default function RegisterPage1({ role, setPage, email, setEmail, password, setPassword, confPassword, setConfPassword }) {
  const handleEmailChanges = (e) => setEmail(e.target.value);
  const handlePasswordChanges = (e) => setPassword(e.target.value);
  const handleConfPasswordChanges = (e) => setConfPassword(e.target.value);

  const [ error, setError ] = useState();

  return (
    <>
      <Flex justifyContent="center">
        <Flex w="30%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">REGISTER</Text>
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
          <FormControl mt="3">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="your-password" value={confPassword} 
              borderColor="black" onChange={handleConfPasswordChanges} />
          </FormControl>
          {
            (error != null) && (
              <Box p="2" mt="5" bg="red.300" borderRadius="lg">
                <Text>{error}</Text>
              </Box>
            )
          }
          <Grid templateColumns="repeat(2, 1fr)" gap="2">
            <Button mt="8" variant="outline" borderRadius="50" borderColor="black"
              onClick={() => setPage(prevPage => prevPage-1)}>Previous</Button>
            <Button mt="8" variant="outline" borderRadius="50" borderColor="black"
              onClick={() => {
                if (password == confPassword) {
                  setPage(prevPage => prevPage+1);
                  return;
                }
                setError("Password not matching");
              }}>Next</Button>
          </Grid>
          <Flex mt="38" justifyContent="center">
            <Link href="/register">
              <Text fontWeight="semibold">Login</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
