import React, { useState } from "react"

import { PasswordInput } from "..";

import { useToast } from "@chakra-ui/react"
import { Button, Text, Input, Select, Textarea } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, ModalContent } from "@chakra-ui/react"

export default function ProfileForm({ isOpen, onClose, user }) {
  const [ oldPassword, setOldPassword ] = useState()
  const handleOldPasswordChanges = (e) => setOldPassword(e.target.value)
  
  const [ password, setPassword ] = useState()
  const [ confPassword, setConfPassword ] = useState()

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

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
                <Text fontSize="1xl" fontWeight="bold">Password Lama</Text>
              </FormLabel>
              <Input type="password" value={oldPassword} placeholder="password-lama"
                borderColor="black" onChange={handleOldPasswordChanges} />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Password Baru</Text>
              </FormLabel>
              <PasswordInput password={password} setPassword={setPassword} 
                placeholder="password-baru" />
            </FormControl>
            <FormControl mt="3">
              <FormLabel>
                <Text fontSize="1xl" fontWeight="bold">Konfirmasi Password Baru</Text>
              </FormLabel>
              <PasswordInput password={confPassword} setPassword={setConfPassword}
                placeholder="password-baru" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Cancel</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" 
              onClick={() => {
                if (oldPassword == null || oldPassword.length == 0) {
                  toast({
                    title: "Password lama tidak boleh kosong",
                    status: "error"
                  })
                  return
                }
                if (password == null || password.length == 0) {
                  toast({
                    title: "Password baru tidak boleh kosong",
                    status: "error"
                  })
                  return
                }
                if (password.length < 6) {
                  toast({
                    title: "Password baru minimal terdiri dari 6 karakter",
                    status: "error"
                  })
                  return
                }
                if (password != confPassword) {
                  toast({
                    title: "Password baru tidak cocok",
                    status: "error"
                  })
                  return
                }
                if (password == oldPassword) {
                  toast({
                    title: "Password baru tidak boleh sama dengan password lama",
                    status: "error"
                  })
                  return
                }
                // TODO: Send request to api
                onClose()
              }}>
              <Text fontSize="sm" fontWeight="bold">Submit</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
