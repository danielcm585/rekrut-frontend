import React, { useState } from "react"

import { StarButton } from "."

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"

export default function ReviewForm({ isOpen, onClose }) {
  const [ rate, setRate ] = useState()
  const [ body, setBody ] = useState()
  const handleBodyChange = (e) => setBody(e.target.value)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <StarButton rate={rate} setRate={setRate} /> */}
            <Textarea placeholder="Review saya" value={body} onChange={handleBodyChange} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
