import React, { useState } from "react"

import { StarButton } from "."

import { useToast } from "@chakra-ui/react"
import { Button, Text, Textarea } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

export default function ReviewForm({ isOpen, onClose, job }) {
  const [ rate, setRate ] = useState()
  const [ body, setBody ] = useState()
  const handleBodyChange = (e) => setBody(e.target.value)

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
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StarButton rate={rate} setRate={setRate} />
            <Textarea mt="3" variant="outline" borderColor="black" placeholder="Review saya" 
              value={body} onChange={handleBodyChange} />
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Batal</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" 
              onClick={() => {
                if (rate == null) {
                  toast({
                    title: "Anda belum memberi bintang",
                    status: "error"
                  })
                  return;
                }
                // TODO: Get client and worker

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
