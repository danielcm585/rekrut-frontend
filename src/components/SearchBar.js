import React from "react"
import { BiSearch } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"

import { HStack, Flex, Icon, Box, Select, Button } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export default function SearchBar({ workers, keyword, setKeyword, location, setLocation, type, setType, salary, setSalary, category, setCategory, experience, setExperience }) {
  const handleKeywordChanges = (e) => setKeyword(e.target.value)
  
  const handleLocationChanges = (e) => setLocation(e.target.value)
  const handleTypeChanges = (e) => setType(e.target.value)
  const handleSalaryChanges = (e) => setSalary(e.target.value)

  const handleCategoryChanges = (e) => setCategory(e.target.value)
  const handleExperienceChanges = (e) => setExperience(e.target.value)

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
              <Input variant="flushed" borderColor="black" 
                placeholder={workers ? "Cari pekerja" : "Cari pekerjaan"}
                value={keyword} onChange={handleKeywordChanges}>
              </Input>
            </InputGroup>
          </Flex>
          {
            (workers) ? (
              <>
                <Select variant="outline" borderColor="black" 
                  value={category} onChange={handleCategoryChanges}>
                  <option value="Semua kategori pekerjaan">Semua kategori pekerjaan</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Photographer">Photographer</option>
                </Select>
                <Select variant="outline" borderColor="black" 
                  value={experience} onChange={handleExperienceChanges}>
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
              </>
            )
          }
        </HStack>
        <Flex>
          {
            (location != null && location != "Semua lokasi") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setLocation("Semua lokasi")}>
                  {location}
                </Button>
              </>
            )
          }
          {
            (type != null && type != "Semua tipe pekerjaan") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setType("Semua tipe pekerjaan")}>
                  {type}
                </Button>
              </>
            )
          }
          {
            (salary != null && salary != "Semua range upah") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setSalary("Semua range upah")}>
                  ≥ {parseAmount(salary)}
                </Button>
              </>
            )
          }
          {
            (category != null && category != "Semua kategori pekerjaan") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setCategory("Semua kategori pekerjaan")}>
                  ≥ {category}
                </Button>
              </>
            )
          }
          {
            (experience != null && experience != "Semua range pengalaman") && (
              <>
                <Button mt="4" mr="4" pl="4" pr="3" bgColor="#FF8450" borderRadius="50" rightIcon={<GrFormClose />}
                  onClick={() => setExperience("Semua range pengalaman")}>
                  ≥ {experience}
                </Button>
              </>
            )
          }
        </Flex>
      </Box>
    </>
  )
}
