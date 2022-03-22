import React, { useState } from "react"

import { useToast } from "@chakra-ui/react"
import { Button, Text, Input, Select, Textarea } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, ModalContent } from "@chakra-ui/react"

export default function ProfileForm({ isOpen, onClose, user }) {
  const [ name, setName ] = useState(user.name)
  const handleNameChanges = (e) => setName(e.target.value)

  const [ email, setEmail ] = useState(user.email)
  const handleEmailChanges = (e) => setEmail(e.target.value)

  const [ phone, setPhone ] = useState(user.phone)
  const handlePhoneChanges = (e) => setPhone(e.target.value)

  const [ bank, setBank ] = useState(user.bank)
  const handleBankChanges = (e) => setBank(e.target.value)

  const [ website, setWebsite ] = useState(user.website)
  const handleWebsiteChanges = (e) => setWebsite(e.target.value)

  const [ category, setCategory ] = useState(user.category)
  const handleCategoryChanges = (e) => setCategory(e.target.value)

  const [ skill, setSkill ] = useState(user.skill)
  const handleSkillChanges = (e) => setSkill(e.target.value)
  
  const [ bio, setBio ] = useState(user.bio)
  const handleBioChanges = (e) => setBio(e.target.value)
  
  const [ experience, setExperience ] = useState(user.experience)
  const handleExperienceChanges = (e) => setExperience(e.target.value)

  const [ education, setEducation ] = useState(user.education)
  const handleEducationChanges = (e) => setEducation(e.target.value)
  
  const [ award, setAward ] = useState(user.award)
  const handleAwardChanges = (e) => setAward(e.target.value)

  const [ isLoading, setIsLoading ] = useState(false)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Nama</Text>
              </FormLabel>
              <Input type="text" placeholder={(user.role == "worker") ? "John Doe" : "Google"} value={name} 
                borderColor="black" onChange={handleNameChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Email</Text>
              </FormLabel>
              <Input type="email" placeholder="email@gmail.com" value={email} 
                borderColor="black" onChange={handleEmailChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Nomor Telepon</Text>
              </FormLabel>
              <Input type="text" placeholder="+628123456789" value={phone} 
                borderColor="black" onChange={handlePhoneChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Nomor Rekening</Text>
              </FormLabel>
              <Input type="number" placeholder="31234567" value={bank} 
                borderColor="black" onChange={handleBankChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Website Pribadi</Text>
              </FormLabel>
              <Input type="text" placeholder="my-name.com" value={website} 
                borderColor="black" onChange={handleWebsiteChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Bio</Text>
              </FormLabel>
              <Textarea type="text" placeholder={(user.role == "worker") ?
                  "Saya seorang web developer profesional" : 
                  "Kami adalah perusahaan teknologi terbesar di Indonesia" } 
                value={bio} borderColor="black" onChange={handleBioChanges} />
            </FormControl>
            {
              (user.role == "worker") && (
                <>
                  <FormControl mt="3">
                    <FormLabel>
                      <Text fontSize="1xl" fontWeight="bold">Kategori Pekerjaan</Text>
                    </FormLabel>
                    <Select variant="outline" borderColor="black"
                      value={category} onChange={handleCategoryChanges}>
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
                      <Text fontSize="1xl" fontWeight="bold">Pengalaman</Text>
                    </FormLabel>
                    <Textarea type="text" placeholder="Saya sorang Software Engineer di ABC selama 3 tahun" value={experience} 
                      borderColor="black" onChange={handleExperienceChanges} />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>
                      <Text fontSize="1xl" fontWeight="bold">Pendidikan</Text>
                    </FormLabel>
                    <Textarea type="text" placeholder="Saya lulusan Harvard terbaik" value={education} 
                      borderColor="black" onChange={handleEducationChanges} />
                  </FormControl>
                  <FormControl mt="3">
                    <FormLabel>
                      <Text fontSize="1xl" fontWeight="bold">Penghargaan</Text>
                    </FormLabel>
                    <Textarea type="text" placeholder="Saya medalis ICPC" value={award} 
                      borderColor="black" onChange={handleAwardChanges} />
                  </FormControl>
                </>
              )
            }
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Batal</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" isLoading={isLoading}
              onClick={() => {
                try {
                  if (user.role == "worker") {
                    if (category == "-") throw new Error("Kategori pekerjaan tidak boleh kosong")
                    if (skill == null || skill.length == 0) throw new Error("Skill tidak boleh kosong")
                  }
                  if (bank == null || bank.length == 0)  throw new Error("Nomor rekening tidak boleh kosong")
                  if (bank.length < 6) throw new Error("Nomor rekening tidak valid")
                  if (name == null || name.length == 0) throw new Error("Nama tidak boleh kosong")
                  if (phone == null || phone.length == 0) throw new Error("Nomor telepon tidak boleh kosong")
                  if (phone.length < 10 || isNaN(phone)) throw new Error("Nomor telepon tidak valid")
                  if (phone[0] != '+') throw new Error("Nomor telepon harus ditulis dalam format internasional, contoh: +628123456789")
                  if (email == null || email.length == 0) throw new Error("Email tidak boleh kosong")
                  if (email.length < 4 || !email.includes('@')) throw new Error("Email tidak valid")
                  if (bio == null || bio.length == 0) throw new Error("Bio anda masih kosong")
                  setIsLoading(true)
                  fetch("https://protected-castle-75235.herokuapp.com/user/"+user._id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                      name: name,
                      email: email,
                      phone: phone, 
                      category: category,
                      bio: bio,
                      website: website,
                      skill: skill,
                      experience: experience,
                      education: education,
                      award: award
                    })
                  })
                  .then(resp => resp.json())
                  .then(json => {
                    if (json.statusCode >= 400) throw new Error(json.message)
                    setIsLoading(false)
                    onClose()
                    window.location.reload()
                    toast({
                      title: "Berhasil mengubah profil",
                      status: "success"
                    })
                  })
                  .catch((err) => {
                    setIsLoading(false)
                    toast({
                      title: err.message,
                      status: "error"
                    })
                  })
                }
                catch (err) {
                  toast({
                    title: err.message,
                    status: "error"
                  })
                }
              }}>
              <Text fontSize="sm" fontWeight="bold">Edit</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
