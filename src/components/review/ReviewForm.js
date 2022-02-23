import React, { useState } from "react"

import { StarButton } from "."

import { Button, Text, Textarea } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"

export default function ReviewForm({ isOpen, onClose }) {
  const [ rate, setRate ] = useState()
  const [ body, setBody ] = useState()
  const handleBodyChange = (e) => setBody(e.target.value)

  const [ error, setError ] = useState()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StarButton rate={rate} setRate={setRate} />
            <Textarea mt="2" variant="outline" borderColor="black" placeholder="Review saya" 
              value={body} onChange={handleBodyChange} />
            {
              (error != null) && (
                <Alert mt="5" status="error" borderRadius="lg">
                  <AlertIcon />
                  {error}
                </Alert>
              )
            }
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Cancel</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" 
              onClick={() => {
                if (rate == null) {
                  setError("Anda belum memberi bintang")
                  return;
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
