import React from "react"

import { useToast } from "@chakra-ui/react"
import { Button, Box, Flex, Text } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { ProfileCard } from "./profile"

export default function Payment({ isOpen, onClose, job, worker }) {
  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") +",00"
  }  

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pembayaran</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProfileCard worker={worker} preview={true} />
            <Flex mt="4" direction="column">
              {
                (job != null) &&
                  <Text fontSize="3xl" fontWeight="semibold" align="center">{parseAmount(job.salary)}</Text>
              }
              <Text mt="2">
                Silakan lakukan pembayaran tepat sebesar nominal yang tertera di layar melalui rekening bank dibawah ini. 
              </Text>
              <Box p="1" mt="2" align="center" border="1px" borderColor="gray.600" borderRadius="md">
                <Text fontSize="2xl" fontWeight="semibold">123456789</Text>
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
                window.location.href="/job/"+job._id
              }}>
              <Text fontSize="sm" fontWeight="bold">Selesai</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
