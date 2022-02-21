import React, { useState } from "react"

import { Checkbox, Flex, Text, Box, SimpleGrid, Button, VStack } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"

export default function RegisterPage4({ role, setPage, postRequest }) {
  const [ agree, setAgree ] = useState(false)
  
  const [ error, setError ] = useState()

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt="11%" w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">03/03</Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Code of Conduct</Text>
              <Text fontSize="1xl">Silakan baca dan setujui persyaratan di bawah ini</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <Box mt="5">  
                <Text fontSize="1xl" fontWeight="bold">Terms and Conditions</Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Box>
              <Checkbox isChecked={agree} onChange={() => setAgree(prev => !prev)}>
                <Text fontWeight="semibold">
                  I agree to all terms and conditions
                </Text>
              </Checkbox>
              {
                (error != null) && (
                  <Alert mt="5" status="error">
                    <AlertIcon />
                    {error}
                  </Alert>
                )
              }
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prevPage => prevPage-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    if (!agree) {
                      setError("You need to agree to the terms and conditions")
                      return
                    }
                    const json = postRequest()
                    if (!json.success) {
                      setError(json.message)
                      return
                    }
                    window.location.href="/login"
                  }}>
                  <Text fontSize="sm" fontWeight="bold">Selanjutnya</Text>
                </Button>
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
