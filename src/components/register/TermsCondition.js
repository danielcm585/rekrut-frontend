import React, { useState } from "react"
import fetch from 'node-fetch'

import { useToast } from "@chakra-ui/react"
import { Checkbox, Flex, Text, Box, SimpleGrid, Button, VStack } from "@chakra-ui/react"

export default function RegisterPage5({ role, setPage, postRequest, email, password, name, phone, bank, bio, category }) {
  const [ agree, setAgree ] = useState(false)
  
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt="11%" w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">
                {
                  (role == "worker") ? 
                    "04/04" : 
                    "03/03"
                }
              </Text>
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
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => {
                    if (role == "worker") setPage(prev => prev-1)
                    else setPage(3)
                  }}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    if (!agree) {
                      toast({
                        title: "Anda wajib membaca dan menyetujui semua syarat untuk menyelesaikan registrasi",
                        status: "error"
                      })
                      return
                    }
                    fetch("https://protected-castle-75235.herokuapp.com/user/register", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        email: email,
                        password: password,
                        name: name,
                        phone: phone,
                        bankAccount: bank,
                        category: category,
                        bio: bio,
                        isWorker: (role == "worker")
                      })
                    })
                    .then(resp => resp.json())
                    .then(json => {
                        if (json.statusCode >= 400) throw new Error(json.message)
                        toast({
                          title: "Akun baru berhasil dibuat",
                          status: "success"
                        })
                        window.location.href="/login"
                    })
                    .catch((err) => {
                      toast({
                        title: err.message,
                        status: "error"
                      })
                    })
                  }}>
                  <Text fontSize="sm" fontWeight="bold">Selesai</Text>
                </Button>
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
