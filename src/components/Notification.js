import React from "react"
import { FaCheckCircle, FaRegHandshake, FaRegHandPointRight } from "react-icons/fa"
import { IoMdCloseCircle } from "react-icons/io"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"
import { MdDone, MdDoneAll, MdClose, MdOutlineNotificationImportant, MdOutlineNotificationsNone } from "react-icons/md"
import { ImPointRight } from "react-icons/im" 

import { Box, Button, HStack, Icon, Badge, Text } from "@chakra-ui/react"
import { Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, ModalContent } from "@chakra-ui/react"

export default function Notification({ isOpen, onClose }) {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifikasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              user.notif.reverse().map((notif, idx) => {
                const icon = (
                  (notif.type == "done") ? MdDone : (
                    (notif.type == "done all") ? MdDoneAll : (
                      (notif.type == "chosen") ? ImPointRight : (
                        (notif.type == "hired") ? FaRegHandshake : (
                          (notif.type == "rejected") ? MdClose : (
                            (notif.type == "important") ? 
                              MdOutlineNotificationImportant :
                              MdOutlineNotificationsNone
                          )
                        )
                      )
                    )
                  )
                )
                return (
                  <Box p="2" mb="1" shadow="md" borderRadius="md" key={idx}
                    _hover={{ bgColor: "gray.50" }} 
                    onClick={() => window.location.href=notif.url}>
                    <HStack pl="2">
                      <Icon boxSize="5" as={icon} />
                      <Text pl="2">{notif.msg}</Text>
                      {
                        (!notif.read) && 
                          <Badge size="xs" colorScheme="red">Baru</Badge>
                      }
                    </HStack>
                  </Box>
                )
              })
            }
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Tutup</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
