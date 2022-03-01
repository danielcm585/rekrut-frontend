import React, { useEffect, useState } from "react"

import { Flex, Text, Input, Button, SimpleGrid, Select, VStack, Textarea } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"

export default function RegisterPage1({ role, setPage, category, setCategory, bio, setBio, cv, setCv }) {
  const handleBioChanges = (e) => setBio(e.target.value)
  const handleCategoryChanges = (e) => setCategory(e.target.value)
  const handleCvChanges = (e) => setCv(e.target.files[0])
  
  // console.log(cv.name)
  // setCategory("Web Developer")
  // useEffect(() => {
  // }, [])
  
  const [ error, setError ] = useState()

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt="11%" w="100%" direction="column">
          <Flex justifyContent="center">
            <VStack>
              <Text fontSize="1xl" fontWeight="semibold" color="#FF8450">02/03</Text>
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
                  <option value="Web Developer">Web Developer</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Photographer">Photographer</option>
                </Select>
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Bio Anda</Text>
                </FormLabel>
                <Textarea type="text" placeholder="Saya seorang web developer profesional" value={bio} 
                  borderColor="black" onChange={handleBioChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">CV</Text>
                </FormLabel>
                <Input p="1" type="file" borderColor="black" 
                  onChange={handleCvChanges} />
              </FormControl>
              {/* TODO: Submit CV */}
              {
                (error != null) && (
                  <Alert mt="5" status="error" borderRadius="lg">
                    <AlertIcon />{error}
                  </Alert>
                )
              }
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    if (category == "-") {
                      setError("Kategori pekerjaan tidak boleh kosong")
                      return
                    }
                    if (bio == null || bio.length == 0) {
                      setError("Bio anda masih kosong")
                      return
                    }
                    if (cv == null) {
                      setError("CV tidak boleh kosong")
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
