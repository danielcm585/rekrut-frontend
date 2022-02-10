import React, { useState } from "react";

import { Flex, Text, Input, Button, Link, Grid, Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export default function RegisterPage1({ role, setPage, name, setName, phone, setPhone, bank, setBank }) {
  const handleNameChanges = (e) => setName(e.target.value);
  const handlePhoneChanges = (e) => setPhone(e.target.value);
  const handleBankChanges = (e) => setBank(e.target.value);

  const [ error, setError ] = useState();

  return (
    <>
      <Flex justifyContent="center">
        <Flex w="30%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">REGISTER</Text>
          </Flex>
          <FormControl mt="8">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="John Doe" value={name}
              borderColor="black" onChange={handleNameChanges} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>Phone Number</FormLabel>
            <Input type="password" placeholder="+628123456789" value={phone} 
              borderColor="black" onChange={handlePhoneChanges} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>Bank Account Number</FormLabel>
            <Input type="number" placeholder="31234567" value={bank} 
              borderColor="black" onChange={handleBankChanges} />
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
              onClick={() => setPage(prevPage => prevPage+1)}>Next</Button>
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
