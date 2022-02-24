import React, { useState } from "react"

import { ProfileCard } from "../profile"

import { Button, Text, Flex } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"

export default function ChooseWorker({ isOpen, onClose, job }) {
  const [ error, setError ] = useState()

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
                job.registrants.map((profile, idx) => 
                  <ProfileCard key={idx} profile={profile} setError={setError} />)
              }
            </Flex>
          </ModalBody>
          <ModalFooter>
            {
              (error != null) && (
                <Alert mt="5" status="error" borderRadius="lg">
                  <AlertIcon />{error}
                </Alert>
              )
            }
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Cancel</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
