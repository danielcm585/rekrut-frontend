import React, { useState } from "react"

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

  const [ category, setCategory ] = useState(user.category)
  const handleCategoryChanges = (e) => setCategory(e.target.value)
  
  const [ bio, setBio ] = useState(user.bio)
  const handleBioChanges = (e) => setBio(e.target.value)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Nama</Text>
              </FormLabel>
              <Input type="text" value={name} 
                borderColor="black" onChange={handleNameChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Email</Text>
              </FormLabel>
              <Input type="email" value={email} 
                borderColor="black" onChange={handleEmailChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Nomor Telepon</Text>
              </FormLabel>
              <Input type="text" value={phone} 
                borderColor="black" onChange={handlePhoneChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Kategori Pekerjaan</Text>
              </FormLabel>
              <Select variant="outline" borderColor="black"
                value={category} onChange={handleCategoryChanges}>
                <option value="Web Developer">Web Developer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Photographer">Photographer</option>
              </Select>
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Bio</Text>
              </FormLabel>
              <Textarea type="text" placeholder="Saya seorang web developer profesional" value={bio} 
                borderColor="black" onChange={handleBioChanges} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Batal</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" 
              onClick={() => {
                // TODO: Send request to api
                onClose()
              }}>
              <Text fontSize="sm" fontWeight="bold">Edit</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
