import React from "react"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, VStack, Text, Button, SimpleGrid, Textarea } from "@chakra-ui/react"

export default function Page2({ setPage, responsibility, setResponsibility, qualifications, setQualifications, name, setName, category, setCategory, location, setLocation, type, setType, salary, setSalary }) {
  const handleResponsibilityChanges = (e) => setResponsibility(e.target.value)
  const handleQualificationsChanges = (e) => setQualifications(e.target.value)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt="7%" w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">02/02</Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Kriteria yang Dicari</Text>
              <Text fontSize="1xl">Silakan jelaskan kriteria pekerja yang Anda butuhkan</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Responsibilities</Text>
                </FormLabel>
                <Textarea type="text" variant="outline" borderColor="black"
                  value={responsibility} onChange={handleResponsibilityChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Qualifications</Text>
                </FormLabel>
                <Textarea type="text" variant="outline" borderColor="black"
                  value={qualifications} onChange={handleQualificationsChanges} />
              </FormControl>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    // TODO: submit
                    window.location.href="/prodile/me"
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
