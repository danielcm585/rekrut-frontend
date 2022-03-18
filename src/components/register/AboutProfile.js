import React from "react"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Input, Button, SimpleGrid, VStack, Select, Textarea } from "@chakra-ui/react"

export default function AboutProfile({ role, setPage, category, setCategory, skill, setSkill, bio, setBio, profPic, setProfPic }) {
  const handleBioChanges = (e) => setBio(e.target.value)
  const handleCategoryChanges = (e) => setCategory(e.target.value)
  const handleSkillChanges = (e) => setSkill(e.target.value)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })
  
  const getBase64 = (file) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => setProfPic(reader.result)
    reader.onerror = () => toast({
      title: "Gagal menyimpan foto profil",
      status: "error"
    })
  }
  const handleProfPicChanges = (e) => {
    try {
      console.log(e.target.files[0].size)
      if (e.target.files[0].type != "image/jpeg" && e.target.files[0].type != "image/png") throw new Error("Foto profil harus berbentuk jpg atau png")
      if (e.target.files[0].size > 16*1024*1024) throw new Error("Foto profil tidak boleh lebih dari 16 MB")
      getBase64(e.target.files[0])
    }
    catch (err) {
      toast({
        title: err.message,
        status: "error"
      })
    }
  }

  return (
    <>
      <Flex mt="6%" justifyContent="center">
        <Flex w="100%" direction="column">
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
                  <Text fontSize="1xl" fontWeight="bold">Skill</Text>
                </FormLabel>           
                <Input type="text" placeholder="Mobile Development" value={skill}
                  borderColor="black" onChange={handleSkillChanges} />
              </FormControl>
              <FormControl mt="3">
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
                      if (category == "-") throw new Error("Kategori pekerjaan tidak boleh kosong")
                      if (skill == null || skill.length == 0) throw new Error("Skill tidak boleh kosong")
                      if (bio == null || bio.length == 0) throw new Error("Bio anda masih kosong")
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
