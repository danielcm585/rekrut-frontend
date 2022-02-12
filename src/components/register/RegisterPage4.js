import React, { useState } from "react";

import { Checkbox, Flex, Text, Box, Grid, Button, Link } from "@chakra-ui/react";

export default function RegisterPage4({ role, setPage, postRequest }) {
  const [ agree, setAgree ] = useState(false);
  
  const [ error, setError ] = useState();

  return (
    <>
      <Flex justifyContent="center">
        <Flex w="30%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">REGISTER</Text>
          </Flex>
          <Box mt="8">  
            <Text fontSize="1xl" fontWeight="semibold">Terms and Conditions</Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
          <Checkbox isChecked={agree} onChange={() => setAgree(prev => !prev)}>
            I agree to all terms and conditions
          </Checkbox>
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
                if (!agree) {
                  setError("You need to agree to the terms and conditions")
                  return;
                }
                const json = postRequest();
                if (!json.success) {
                  setError(json.message);
                  return;
                }
                window.location.href="/login";
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
