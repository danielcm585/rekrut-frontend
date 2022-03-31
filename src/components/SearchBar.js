import React, { useRef } from "react"

import { BiSearch } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"

import { useMediaQuery, useDisclosure, useColorMode } from "@chakra-ui/react"
import { HStack, Flex, Icon, Box, Select, Text, Button } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

export default function SearchBar({ filter, setFilter, workers, keyword, setKeyword, location, setLocation, type, setType, salary, setSalary, category, setCategory, experience, setExperience }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  const handleKeywordChanges = (e) => setKeyword(e.target.value)
  
  const handleLocationChanges = (e) => setLocation(e.target.value)
  const handleTypeChanges = (e) => setType(e.target.value)
  const handleSalaryChanges = (e) => setSalary(e.target.value)

  const handleCategoryChanges = (e) => setCategory(e.target.value)
  const handleExperienceChanges = (e) => setExperience(e.target.value)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilter(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") +",00"
  }

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box w="100%">
        {
          isBigScreen ? (
            <>
              <HStack w="100%">
                <Flex w="50%">
                  <InputGroup w="6000px">
                    <InputLeftElement children={<Icon ml="2" as={BiSearch} color="gray.600" />} />
                    <Input variant="flushed" borderColor="black" name="keyword"
                      placeholder={workers ? "Cari pekerja" : "Cari pekerjaan"}
                      value={filter.keyword} onChange={handleChange}>
                    </Input>
                  </InputGroup>
                </Flex>
                {
                  workers ? (
                    <>
                      <Select variant="outline" borderColor="black" name="category"
                        value={filter.category} onChange={handleChange}>
                        <option value="Semua kategori pekerjaan">Semua kategori pekerjaan</option>
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
                      <Select variant="outline" borderColor="black" name="experience"
                        value={filter.experience} onChange={handleChange}>
                        <option value="Semua range pengalaman">Semua range pengalaman</option>
                        <option value={1}>≥ 1</option>
                        <option value={5}>≥ 5</option>
                        <option value={10}>≥ 10</option>
                        <option value={20}>≥ 20</option>
                        <option value={50}>≥ 50</option>
                      </Select>
                    </>
                  ) : (
                    <>
                      <Select variant="outline" borderColor="black" name="location"
                        value={filter.location} onChange={handleChange}>
                        <option value="Semua lokasi">Semua lokasi</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Semarang">Semarang</option>
                        <option value="Surabaya">Surabaya</option>
                      </Select>
                      <Select variant="outline" borderColor="black" name="type"
                        value={filter.type} onChange={handleChange}>
                        <option value="Semua tipe pekerjaan">Semua tipe pekerjaan</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Full-project">Full-project</option>
                        <option value="Contract">Contract</option>
                      </Select>
                      <Select variant="outline" borderColor="black" name="salary"
                        value={filter.salary} onChange={handleChange}>
                        <option value="Semua range upah">Semua range upah</option>
                        <option value={1000000}>≥ IDR 1.000.000,00</option>
                        <option value={2000000}>≥ IDR 2.000.000,00</option>
                        <option value={5000000}>≥ IDR 5.000.000,00</option>
                        <option value={7000000}>≥ IDR 7.000.000,00</option>
                        <option value={10000000}>≥ IDR 10.000.000,00</option>
                      </Select>
                    </>
                  )
                }
              </HStack>
            </>
          ) : (
            <>
              <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth="1px">Filter</DrawerHeader>
                  <DrawerBody>
                  {
                    workers ? (
                      <>
                        <Select mt="3" variant="outline" borderColor="black" name="category"
                          value={filter.category} onChange={handleChange}>
                          <option value="Semua kategori pekerjaan">Semua kategori pekerjaan</option>
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
                        <Select mb="100px" mt="3" variant="outline" borderColor="black" name="experience"
                          value={filter.experience} onChange={handleChange}>
                          <option value="Semua range pengalaman">Semua range pengalaman</option>
                          <option value={1}>≥ 1</option>
                          <option value={5}>≥ 5</option>
                          <option value={10}>≥ 10</option>
                          <option value={20}>≥ 20</option>
                          <option value={50}>≥ 50</option>
                        </Select>
                      </>
                    ) : (
                      <>
                        <Select mt="3" variant="outline" borderColor="black" name="location"
                          value={filter.location} onChange={handleChange}>
                          <option value="Semua lokasi">Semua lokasi</option>
                          <option value="Jakarta">Jakarta</option>
                          <option value="Semarang">Semarang</option>
                          <option value="Surabaya">Surabaya</option>
                        </Select>
                        <Select mt="3" variant="outline" borderColor="black" name="type"
                          value={filter.type} onChange={handleChange}>
                          <option value="Semua tipe pekerjaan">Semua tipe pekerjaan</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Full-time">Full-time</option>
                          <option value="Full-project">Full-project</option>
                          <option value="Contract">Contract</option>
                        </Select>
                        <Select mb="100px" mt="3" variant="outline" borderColor="black" name="salary"
                          value={filter.salary} onChange={handleChange}>
                          <option value="Semua range upah">Semua range upah</option>
                          <option value={1000000}>≥ IDR 1.000.000,00</option>
                          <option value={2000000}>≥ IDR 2.000.000,00</option>
                          <option value={5000000}>≥ IDR 5.000.000,00</option>
                          <option value={7000000}>≥ IDR 7.000.000,00</option>
                          <option value={10000000}>≥ IDR 10.000.000,00</option>
                        </Select>
                      </>
                    )
                  }
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
              <HStack w="100%">
                <Flex w="83%">
                  <InputGroup w="6000px">
                    <InputLeftElement children={<Icon ml="2" as={BiSearch} color="gray.600" />} />
                    <Input variant="flushed" borderColor="black" name="keyword"
                      placeholder={workers ? "Cari pekerja" : "Cari pekerjaan"}
                      value={filter.keyword} onChange={handleChange}>
                    </Input>
                  </InputGroup>
                </Flex>
                <Button borderRadius="50" bgColor="#FF8450" onClick={onOpen}>
                  <Text fontSize="sm" fontWeight="bold">Filter</Text>
                </Button>
              </HStack>
            </>
          )
        }
        <Flex>
          {
            (filter.location != null && filter.location != "Semua lokasi") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setFilter(prev => ({
                    ...prev,
                    location: "Semua lokasi"
                  }))}>
                  {filter.location}
                </Button>
              </>
            )
          }
          {
            (filter.type != null && filter.type != "Semua tipe pekerjaan") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setFilter(prev => ({
                    ...prev,
                    type: "Semua tipe pekerjaan"
                  }))}>
                  {filter.type}
                </Button>
              </>
            )
          }
          {
            (filter.salary != null && filter.salary != "Semua range upah") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setFilter(prev => ({
                    ...prev,
                    salary: "Semua range upah"
                  }))}>
                  ≥ {parseAmount(filter.salary)}
                </Button>
              </>
            )
          }
          {
            (filter.category != null && filter.category != "Semua kategori pekerjaan") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setFilter(prev => ({
                    ...prev,
                    category: "Semua kategori pekerjaan"
                  }))}>
                  ≥ {filter.category}
                </Button>
              </>
            )
          }
          {
            (filter.experience != null && filter.experience != "Semua range pengalaman") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setFilter(prev => ({
                    ...prev,
                    experience: "Semua range pengalaman"
                  }))}>
                  ≥ {filter.experience}
                </Button>
              </>
            )
          }
        </Flex>
      </Box>
    </>
  )
}
