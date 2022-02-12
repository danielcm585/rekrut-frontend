import React from "react";

import Worker from "../../images/worker_2.svg";
import Client from "../../images/client.svg";

import { Box, Button, Flex, Image, Text, Link, Grid } from "@chakra-ui/react";

export default function RegisterPage0({ setRole, setPage }) {
  return (
    <>
      <Flex justifyContent="center">
        <Flex w="37%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">REGISTER</Text>
          </Flex>
          <Box mt="8">
            <Grid templateColumns="repeat(2, 1fr)" gap="20">
              <Box p="3" borderRadius="lg">
                <Flex justifyContent="center">
                  <Flex direction="column">
                    <Flex mb="2" justifyContent="center">
                      <Text fontSize="2xl" fontWeight="semibold">CLIENT</Text>
                    </Flex>
                    <Image src={Client} />
                    <Button mt="3" variant="outline" borderColor="black" borderRadius="50" onClick={() => {
                      setRole("client");
                      setPage(prevPage => prevPage+1);
                    }}>Hire Now!</Button>
                  </Flex>
                </Flex>
              </Box>
              <Box p="3" borderRadius="lg">
                <Flex justifyContent="center">
                  <Flex direction="column">
                    <Flex mb="2" justifyContent="center">
                      <Text fontSize="2xl" fontWeight="semibold">WORKER</Text>
                    </Flex>
                    <Image src={Worker} />
                    <Button mt="3" variant="outline" borderColor="black" borderRadius="50" onClick={() => {
                      setRole("worker");
                      setPage(prevPage => prevPage+1);
                    }}>Work Now!</Button>
                  </Flex>
                </Flex>
              </Box>
            </Grid>
          </Box>
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
