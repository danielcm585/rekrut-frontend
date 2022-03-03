import React from "react"

import { ProfileCard, ProfileCard2, ProfileDetails } from "../profile"

import { Button, Text, Flex } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

export default function ChooseWorker({ isOpen, onClose, job }) {
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pendaftar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Accordion>
              {
                job.registrants.map((worker, idx) => {
                  return (
                    <>
                      <AccordionItem>
                        <AccordionButton>
                          <ProfileCard2 worker={worker} />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <ProfileDetails user={worker} />
                        </AccordionPanel>
                      </AccordionItem>
                    </>
                  )
                })
              }
            </Accordion> */}
            <Flex direction="column">
              {
                job.registrants.map((profile, idx) => 
                  <ProfileCard key={idx} profile={profile} />)
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
