import React, { useEffect } from "react"

import { ProfileCard } from "../profile"

import { Button, Text, Flex } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

export default function ChooseWorker({ isOpen, onClose, job }) {
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pendaftar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              {
                job.registrants.map((worker, idx) => 
                  <ProfileCard key={idx} job={job} worker={worker} />
                )
              }
            </Flex>
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
