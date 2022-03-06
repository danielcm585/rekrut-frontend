import React from "react"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Input, Button, SimpleGrid, VStack } from "@chakra-ui/react"

export default function AboutMe({ role, setPage, name, setName, phone, setPhone, bank, setBank }) {
  const handleNameChanges = (e) => setName(e.target.value)
  const handlePhoneChanges = (e) => setPhone(e.target.value)
  const handleBankChanges = (e) => setBank(e.target.value)

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
                    "01/04" : 
                    "01/03"
                }
              </Text>
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
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    if (name == null || name.length == 0) {
                      toast({
                        title: "Nama tidak boleh kosong",
                        status: "error"
                      })
                      return
                    }
                    if (phone == null || phone.length == 0) {
                      toast({
                        title: "Nomor telepon tidak boleh kosong",
                        status: "error"
                      })
                      return
                    }
                    if (phone.length < 10 || isNaN(phone)) {
                      toast({
                        title: "Nomor telepon tidak valid",
                        status: "error"
                      })
                      return
                    }
                    if (phone[0] != '+') {
                      toast({
                        title: "Nomor telepon harus ditulis dalam format internasional, contoh: +628123456789",
                        status: "error"
                      })
                      return
                    }
                    if (bank == null || bank.length == 0)  {
                      toast({
                        title: "Nomor rekening tidak boleh kosong",
                        status: "error"
                      })
                      return
                    }
                    if (bank.length < 6) { // FIXME: The valid rule
                      toast({
                        title: "Nomor rekening tidak valid",
                        status: "error"
                      })
                      return
                    }
                    setPage(prev => prev+1)
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
