import React from "react"

import { Button, Box, Flex, Text } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { ProfileCard } from "./profile"

export default function Payment({ isOpen, onClose, job, worker }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pembayaran</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProfileCard worker={worker} preview={true} />
            <Flex direction="column">
              <Text align="center" fontWeight="semibold">
                Silakan lakukan pembayaran terlebih dahulu melalui rekening bank dibawah ini
              </Text>
              <Box p="1" mt="2" align="center" border="1px" borderColor="gray.600" borderRadius="md">
                <Text fontSize="2xl" fontWeight="bold">123456789</Text>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Batal</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" 
              onClick={() => {
                // TODO: Set job status to "waiting confirmation"
                window.location.href="/job/"+job.id
              }}>
              <Text fontSize="sm" fontWeight="bold">Selesai</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
