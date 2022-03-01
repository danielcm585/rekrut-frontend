import React from "react"

import { Button, Text } from "@chakra-ui/react"
import { Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, ModalContent } from "@chakra-ui/react"

export default function Notification({ isOpen, onClose, user }) {
  // TODO: Fetch notification from api
  const notifications = [
    "ada"
  ]

  return (
    <>
      <Modal iOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifikasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Halo
            {/*TODO: Create notifications list */}
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Cancel</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
