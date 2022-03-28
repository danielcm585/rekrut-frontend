import React from "react"

import { useMediaQuery, useColorMode } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Button, SimpleGrid, Textarea, VStack } from "@chakra-ui/react"

export default function RegisterPage4({ role, setPage, experience, setExperience, education, setEducation, award, setAward }) {
  const handleExperienceChanges = (e) => setExperience(e.target.value)
  const handleEducationChanges = (e) => setEducation(e.target.value)
  const handleAwardChanges = (e) => setAward(e.target.value)

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  return (
    <>
      <Flex mt={isBigScreen ? "6%" : "5"} justifyContent="center">
        <Flex w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">03/04</Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Buat CV</Text>
              <Text align="center" fontSize="1xl">Kami akan menyusun CV anda secara otomatis</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w={isBigScreen ? "30%" : "100%"} p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Pengalaman</Text>
                </FormLabel>
                <Textarea type="text" placeholder="Saya sorang Software Engineer di ABC selama 3 tahun"
                  value={experience} borderColor="black" onChange={handleExperienceChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Pendidikan</Text>
                </FormLabel>
                <Textarea type="text" placeholder="Saya lulusan Harvard terbaik"
                  value={education} borderColor="black" onChange={handleEducationChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Penghargaan</Text>
                </FormLabel>
                <Textarea type="text" placeholder="Saya medalis ICPC"
                  value={award} borderColor="black" onChange={handleAwardChanges} />
              </FormControl>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => setPage(prev => prev+1)}>
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
