import React, { useState } from "react";

import { Flex, Text, Input, Button, Link, Grid, Box, VStack } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export default function RegisterPage1({ role, setPage, name, setName, phone, setPhone, bank, setBank }) {
  const handleNameChanges = (e) => setName(e.target.value);
  const handlePhoneChanges = (e) => setPhone(e.target.value);
  const handleBankChanges = (e) => setBank(e.target.value);

  const [ error, setError ] = useState();

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt="11%" w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">01/03</Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Informasi Umum</Text>
              <Text fontSize="1xl">Kami akan mengumpulkan informasi umum mengenai diri Anda</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Nama</Text>
                </FormLabel>
                <Input type="text" placeholder="John Doe" value={name}
                  borderColor="black" onChange={handleNameChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Nomor Telepon</Text>
                </FormLabel>
                <Input type="text" placeholder="+628123456789" value={phone} 
                  borderColor="black" onChange={handlePhoneChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Nomor Rekening</Text>
                </FormLabel>
                <Input type="number" placeholder="31234567" value={bank} 
                  borderColor="black" onChange={handleBankChanges} />
              </FormControl>
              {
                (error != null) && (
                  <Alert mt="5" status="error">
                    <AlertIcon />
                    {error}
                  </Alert>
                )
              }
              <Button mt="8" bgColor="#FF8450" borderRadius="50" borderColor="black"
                onClick={() => setPage(prevPage => prevPage+1)}>
                  <Text fontSize="1xl" fontWeight="bold">Selanjutnya</Text>
                </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
