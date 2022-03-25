import React from "react"

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Input, Button, SimpleGrid, VStack } from "@chakra-ui/react"

export default function AboutMe({ role, setPage, name, setName, phone, setPhone, bank, setBank, website, setWebsite }) {
  const handleNameChanges = (e) => setName(e.target.value)
  const handlePhoneChanges = (e) => setPhone(e.target.value)
  const handleBankChanges = (e) => setBank(e.target.value)
  const handleWebsiteChanges = (e) => setWebsite(e.target.value)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Flex mt={useMediaQuery ? "6%" : "5"} justifyContent="center">
        <Flex w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">
                {
                  (role == "worker") ?
                    "01/04" : 
                    "01/03"
                }
              </Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Informasi Umum</Text>
              <Text fontSize="1xl">Kami akan mengumpulkan informasi umum mengenai diri Anda</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w={isBigScreen ? "30%" : "100%"} p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Nama</Text>
                </FormLabel>
                <Input type="text" placeholder={(role == "worker") ? "John Doe" : "Google"} value={name}
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
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Website Personal</Text>
                </FormLabel>
                <Input type="text" placeholder="my-name.com" value={website} 
                  borderColor="black" onChange={handleWebsiteChanges} />
              </FormControl>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    try {
                      if (name == null || name.length == 0) throw new Error("Nama tidak boleh kosong")
                      if (phone == null || phone.length == 0) throw new Error("Nomor telepon tidak boleh kosong")
                      if (phone.length < 10 || isNaN(phone)) throw new Error("Nomor telepon tidak valid")
                      if (phone[0] != '+') throw new Error("Nomor telepon harus ditulis dalam format internasional, contoh: +628123456789")
                      if (bank == null || bank.length == 0)  throw new Error("Nomor rekening tidak boleh kosong")
                      if (bank.length < 6) throw new Error("Nomor rekening tidak valid")
                      setPage(prev => prev+1)
                    }
                    catch (err) {
                      toast({
                        title: err.message,
                        status: "error"
                      })
                    }
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
