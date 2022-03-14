import React, { useState, useEffect } from "react"

import { JobList } from "."
import { ProfileCard } from "../profile"

import { useToast } from "@chakra-ui/react"
import { Button, Text, Flex } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

export default function ChooseJob({ isOpen, onClose, worker }) {
  const user = JSON.parse(localStorage.getItem("user"))

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ client, setClient ] = useState(null)
  useEffect(() => {
    fetch("https://protected-castle-75235.herokuapp.com/user/"+user._id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      setClient(json)
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  })

  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pendaftar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              (client != null && client.client.hiring != null) && (
                <JobList jobs={client.client.hiring} preview={true} worker={worker} />
              )
            }
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Batal</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
