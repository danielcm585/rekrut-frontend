import React, { useState, useEffect } from "react"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, VStack, Text, Input, Button, SimpleGrid, Select } from "@chakra-ui/react"

export default function Page1({ setPage, title, setTitle, category, setCategory, location, setLocation, type, setType, salary, setSalary }) {
  const handleTitleChanges = (e) => setTitle(e.target.value)
  const handleCategoryChanges = (e) => setCategory(e.target.value)
  const handleLocationChanges = (e) => setLocation(e.target.value)
  const handleTypeChanges = (e) => setType(e.target.value)
  const handleSalaryChanges = (e) => setSalary(e.target.value)

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
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">01/02</Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Informasi Pekerjaan</Text>
              <Text fontSize="1xl">Kami akan mengumpulkan informasi-informasi umum mengenai diri Anda</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Nama Pekerjaan</Text>
                </FormLabel>
                <Input type="text" variant="outline" borderColor="black"
                  value={title} onChange={handleTitleChanges} />
              </FormControl>
              <FormControl mt="3">
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
                  <Text fontSize="1xl" fontWeight="bold">Lokasi Pekerjaan</Text>
                </FormLabel>
                <Input type="text" variant="outline" borderColor="black"
                  value={location} onChange={handleLocationChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Tipe Pekerjaan</Text>
                </FormLabel>
                <Select variant="outline" borderColor="black" 
                  value={type} onChange={handleTypeChanges}>
                  <option value="-">-</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Full-project">Full-project</option>
                  <option value="Contract">Contract</option>
                </Select>
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Upah</Text>
                </FormLabel>
                <Input type="number" variant="outline" borderColor="black"
                  value={salary} onChange={handleSalaryChanges} />
              </FormControl>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Batal</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    try {
                      if (title == null || title.length == 0) throw new Error("Nama pekerjaan tidak boleh kosong")
                      if (category == "-") throw new Error("Silakan pilih kategori pekerjaan untuk lanjut")
                      if (location == null || location.length == 0) throw new Error("Lokasi pekerjaan tidak boleh kosong")
                      if (location == "-") throw new Error("Silakan pilih lokasi pekerjaan untuk lanjut")
                      if (salary == null || salary.length == 0) throw new Error("Upah tidak boleh kosong")
                      if (salary <= 100000) throw new Error("Nominal upah tidak valid")
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
