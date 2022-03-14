import React from "react"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Input, Button, SimpleGrid, Select, VStack, Textarea } from "@chakra-ui/react"

export default function RegisterPage4({ role, setPage, category, setCategory, cv, setCv }) {
  // const handleBioChanges = (e) => setBio(e.target.value)
  const handleCategoryChanges = (e) => setCategory(e.target.value)
  const handleCvChanges = (e) => setCv(e.target.files[0])

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  return (
    <>
      <Flex mt="7%" justifyContent="center">
        <Flex w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">03/04</Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Mengenai Pekerjaan</Text>
              <Text fontSize="1xl">Kami akan menyesuaikan pilihan pekerjaan sesuai minat Anda</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Kategori Pekerjaan</Text>
                </FormLabel>
                <Select variant="outline" borderColor="black"
                  value={category} onChange={handleCategoryChanges}>
                  <option value="-">-</option>
                  <option value="Design and Creative">Design and Creative</option>
                  <option value="Development and IT">Development and IT</option>
                  <option value="Engineering and Architecture">Engineering and Architecture</option>
                  <option value="Sales and Marketing">Sales and Marketing</option>
                  <option value="Writing and Translation">Writing and Translation</option>
                  <option value="HR and Training">HR and Training</option>
                  <option value="Legal">Legal</option>
                  <option value="Speaking">Speaking</option>
                  <option value="Others">Others</option>
                </Select>
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">CV</Text>
                </FormLabel>
                {/*FIXME: Value of the input */}
                <Input p="1" type="file" variant="unstyled"
                  onChange={handleCvChanges} />
              </FormControl>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    try {
                      if (category == "-") throw new Error("Kategori pekerjaan tidak boleh kosong")
                      if (cv == null) throw new Error("CV tidak boleh kosong")
                      if (cv.type != "application/pdf") throw new Error("CV harus berbentuk pdf")
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
