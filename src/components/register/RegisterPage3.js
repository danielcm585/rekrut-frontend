import React, { useEffect, useState } from "react";

import { Flex, Text, Input, Button, Link, Grid, Box, Select } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export default function RegisterPage1({ role, setPage, category, setCategory }) {
  const handleChanges = (e) => setCategory(e.target.value);
  useEffect(() => {
    setCategory("Web Developer");
  }, [])
  
  const [ error, setError ] = useState();

  return (
    <>
      <Flex justifyContent="center">
        <Flex w="30%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">REGISTER</Text>
          </Flex>
          <FormControl mt="8">
            <FormLabel>Job Category</FormLabel>
            <Select placeholder="Web Developer" variant="outline" borderColor="black"
              value={category} onChange={handleChanges}>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Photographer">Photographer</option>
            </Select>
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
