import React from "react";

import WorkerImg from "../../images/Worker.png";
import ClientImg from "../../images/Client.png";

import { Box, Button, Flex, Image, Text, Link, Grid, VStack } from "@chakra-ui/react";

export default function RegisterPage0({ setRole, setPage }) {
  return (
    <>
      <Flex justifyContent="center">
        <Flex w="45%" p="10" mt="9%" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="bold">Halo, Apa Role Anda?</Text>
          </Flex>
          <Box mt="50">
            <Grid templateColumns="repeat(2, 1fr)" gap="20">
              <Box p="4" pl="6" pr="6" pb="7" border="1px" borderColor="gray.300">
                <Image src={WorkerImg} />
                <Flex mt="5" justifyContent="center">
                  <Flex direction="column">
                    <Flex mb="2" justifyContent="center">
                      <Text fontSize="3xl" fontWeight="bold">Pekerja</Text>
                    </Flex>
                    <Button mt="3" pl="10" pr="10" bgColor="#FF8450" borderColor="black" borderRadius="50" 
                      onClick={() => {
                        setRole("client");
                        setPage(prevPage => prevPage+1);
                      }}>
                      <Text fontSize="sm" fontWeight="bold">Selanjutnya</Text>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
              <Box p="4" pl="6" pr="6" pb="7" border="1px" borderColor="gray.300">
                <Image src={ClientImg} />
                <Flex mt="5" justifyContent="center">
                  <Flex direction="column">
                    <Flex mb="2" justifyContent="center">
                      <Text fontSize="3xl" fontWeight="bold">Klien</Text>
                    </Flex>
                    <Button mt="3" pl="10" pr="10" bgColor="#FF8450" borderColor="black" borderRadius="50" 
                      onClick={() => {
                        setRole("worker");
                        setPage(prevPage => prevPage+1);
                      }}>
                      <Text fontSize="sm" fontWeight="bold">Selanjutnya</Text>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
