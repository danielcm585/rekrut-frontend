import React, { useState } from "react"

import { useToast } from "@chakra-ui/react"
import { Checkbox, Flex, Text, Box, SimpleGrid, Button, VStack, Link } from "@chakra-ui/react"

export default function RegisterPage5({ role, setPage, email, password, name, phone, bank, bio, category, profPic, website, skill, experience, education, award }) {
  const [ agree, setAgree ] = useState(false)
  
  const [ isLoading, setIsLoading ] = useState(false)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  return (
    <>
      <Flex mt="6%" justifyContent="center">
        <Flex w="100%" direction="column">
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
              <Text fontSize="1xl">Silakan baca dan setujui S&K dan kebijakan privasi di bawah ini</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <Box mt="5">  
                <Text fontSize="1xl" fontWeight="bold">Syarat dan Ketentuan</Text>
                {"Selamat datang di platform pencari kerja digital Rekrut.id. Ini adalah syarat dan ketentuan yang berlaku dalam penggunaan platform kami yang dapat diakses "}
                <Link href="/terms" color="#FF8450" isExternal>di sini</Link>
                . Dalam syarat dan ketentuan ini yang kami maksud dengan "Rekrut" adalah platform digital yang berada di bawah naungan tim Rekrut, termasuk dengan semua situs pihak ketiga yang terhubung. Jika kamu menyetujuinya, kamu akan terikat dengan segala hukum yang berlaku di Negara Indonesia.
              </Box>
              <Checkbox mt="2" isChecked={agree} onChange={() => setAgree(prev => !prev)}>
                <Text fontWeight="semibold">
                  Saya menyetujui S&K dan kebijakan privasi yang berlaku
                </Text>
              </Checkbox>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => {
                    if (role == "worker") setPage(prev => prev-1)
                    else setPage(3)
                  }}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50" isLoading={isLoading}
                  onClick={() => {
                    try {
                      setIsLoading(true)
                      if (!agree) throw new Error("Silakan setujui S&K yang berlaku untuk melanjutkan")
                      fetch("https://protected-castle-75235.herokuapp.com/user/register", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify({
                          email: email,
                          password: password,
                          name: name,
                          phone: phone,
                          bankAccount: bank,
                          category: category,
                          bio: bio,
                          isWorker: (role == "worker"),
                          profPic: profPic,
                          website: website,
                          skill: skill,
                          education: education,
                          experience: experience,
                          award: award
                        })
                      })
                      .then(resp => resp.json())
                      .then(json => {
                          if (json.statusCode >= 400) throw new Error(json.message)
                          setIsLoading(false)
                          window.location.href="/login"
                          toast({
                            title: "Akun baru berhasil dibuat",
                            status: "success"
                          })
                      })
                      .catch((err) => {
                        setIsLoading(true)
                        toast({
                          title: err.message,
                          status: "error"
                        })
                      })
                    }
                    catch (err) {
                      setIsLoading(false)
                      toast({
                        title: err.message,
                        status: "error"
                      })
                    }
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
