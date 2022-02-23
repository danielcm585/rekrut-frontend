import React from "react"
import { BiSearch } from "react-icons/bi"

import { HStack, Flex, Icon, Box, Select } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export default function SearchBar({ keyword, setKeyword, location, setLocation, type, setType, salary, setSalary }) {
  const handleKeywordChanges = (e) => setKeyword(e.target.value)
  const handleLocationChanges = (e) => setLocation(e.target.value)
  const handleTypeChanges = (e) => setType(e.target.value)
  const handleSalaryChanges = (e) => setSalary(e.target.value)

  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") +",00"
  }

  return (
    <>
      <Box w="100%">
        <HStack w="100%">
          <Flex w="50%">
            <InputGroup w="6000px">
              <InputLeftElement children={<Icon ml="2" as={BiSearch} color="gray.600" />} />
              <Input variant="flushed" borderColor="black" placeholder="Cari pekerjaan" 
                value={keyword} onChange={handleKeywordChanges}>
              </Input>
            </InputGroup>
          </Flex>
          <Select variant="outline" borderColor="black" 
            value={location} onChange={handleLocationChanges}>
            <option value="Semua lokasi">Semua lokasi</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Semarang">Semarang</option>
            <option value="Surabaya">Surabaya</option>
          </Select>
          <Select variant="outline" borderColor="black" 
            value={type} onChange={handleTypeChanges}>
            <option value="Semua tipe pekerjaan">Semua tipe pekerjaan</option>
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
            <option value="Full-project">Full-project</option>
            <option value="Contract">Contract</option>
          </Select>
          <Select variant="outline" borderColor="black" 
            value={salary} onChange={handleSalaryChanges}>
            <option value="Semua range upah">Semua range upah</option>
            <option value={1000000}>≥ IDR 1.000.000,00</option>
            <option value={2000000}>≥ IDR 2.000.000,00</option>
            <option value={5000000}>≥ IDR 5.000.000,00</option>
            <option value={7000000}>≥ IDR 7.000.000,00</option>
            <option value={10000000}>≥ IDR 10.000.000,00</option>
          </Select>
        </HStack>
        <Flex>
          {
            (location != "Semua lokasi") && (
              <>
                <Box mt="4" mr="4" p="1" pl="4" pr="4" bg="#FF8450" borderRadius="50">
                  {location}
                </Box>
              </>
            )
          }
          {
            (type != "Semua tipe pekerjaan") && (
              <>
                <Box mt="4" mr="4" p="1" pl="4" pr="4" bg="#FF8450" borderRadius="50">
                  {type}
                </Box>
              </>
            )
          }
          {
            (salary != "Semua range upah") && (
              <>
                <Box mt="4" p="1" pl="4" pr="4" bg="#FF8450" borderRadius="50">
                  ≥ {parseAmount(salary)}
                </Box>
              </>
            )
          }
        </Flex>
      </Box>
    </>
  )
}
