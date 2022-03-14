import React from "react"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Input, Button, SimpleGrid, VStack, Textarea } from "@chakra-ui/react"

export default function AboutProfile({ role, setPage, bio, setBio, profPic, setProfPic }) {
  const handleBioChanges = (e) => setBio(e.target.value)
  const handleProfPicChanges = (e) => setProfPic(e.target.files[0])

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
                    "02/04" : 
                    "02/03"
                }
              </Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#FF8450">Ceritakan Tentang Diri Anda</Text>
              <Text fontSize="1xl">Keunikan anda dapat memudahkan pencari kerja menemukan anda.</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="center">
            <Flex w="30%" p="10" pt="2" direction="column">
              <FormControl mt="5">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Bio</Text>
                </FormLabel>
                <Textarea type="text" placeholder={(role == "worker") ?
                  "Saya seorang web developer profesional" : 
                  "Kami adalah perusahaan teknologi terbesar di Indonesia" }
                  value={bio} borderColor="black" onChange={handleBioChanges} />
              </FormControl>
              <FormControl mt="3">
                <FormLabel>
                  <Text fontSize="1xl" fontWeight="bold">Foto Profil</Text>
                </FormLabel>
                {/*FIXME: Value of the input */}
                <Input p="1" type="file" variant="unstyled"
                  onChange={handleProfPicChanges} />
              </FormControl>
              <SimpleGrid columns="2" spacing="2">
                <Button mt="8" borderRadius="50" onClick={() => setPage(prev => prev-1)}>
                  <Text fontSize="sm" fontWeight="bold">Kembali</Text>
                </Button>
                <Button mt="8" bgColor="#FF8450" borderRadius="50"
                  onClick={() => {
                    try {
                      if (bio == null || bio.length == 0) throw new Error("Bio anda masih kosong")
                      // TODO: test
                      //if (profPic == null) throw new Error("SIlakan upload foto profil untuk melanjutkan")
                      if (profPic != null && profPic.type != "image/png" && 
                          profPic.type != "image/jpeg") throw new Error("Foto profil harus berbentuk jpg atau png")
                      if (role == "worker") setPage(prev => prev+1)
                      else setPage(5)
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
