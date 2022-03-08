import React, { useEffect } from "react"

import { Button, Box, Flex, Text } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { ProfileCard } from "./profile"

export default function Payment({ isOpen, onClose, job, worker }) {
  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") +",00"
  }

  // useEffect(() => {
  //   console.log(job)
  // }, [ job ])

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
              <Text fontSize="lg" fontWeight="semibold" align="center">
                Silakan lakukan pembayaran tepat sebesar nominal yang tertera di layar terlebih dahulu melalui rekening bank dibawah ini. 
              </Text>
              {/*FIXME: job goes undefined */}
              {/* <Text fontSize="2xl" fontWeight="bold">{parseAmount(job.salary)}</Text> */}
              <Box p="1" mt="2" align="center" border="1px" borderColor="gray.600" borderRadius="md">
                <Text fontSize="xl" fontWeight="semibold">123456789</Text>
              </Box>
              <Text>
                * Pembayaran ini akan diteruskan ke pekerja setelah pekerjaan selesai.
              </Text>
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
