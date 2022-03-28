import React, { useState, useEffect } from "react"

import { MdDone, MdDoneAll, MdClose, MdOutlineNotificationImportant, MdOutlineNotificationsNone } from "react-icons/md"
import { FaRegHandshake } from "react-icons/fa"
import { ImPointRight } from "react-icons/im" 

import { useToast, useColorMode } from "@chakra-ui/react"
import { Box, Button, HStack, Icon, Badge, Text } from "@chakra-ui/react"
import { Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, ModalContent } from "@chakra-ui/react"

export default function Notification({ isOpen, onClose }) {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const curUser = JSON.parse(localStorage.getItem("user"))
  const [ user, setUser ] = useState(null)
  useEffect(() => {
    fetch("https://protected-castle-75235.herokuapp.com/user/"+curUser._id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      json.role = (json.worker != null ? "worker" : "client")
      json.bank = json.bankAccount
      localStorage.setItem("user", JSON.stringify(json))
      setUser(json)
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  }, [])

  const [ notification, setNotification ] = useState(null)
  useEffect(() => {
    if (user == null) return
    setNotification(user.notif.reverse())
  }, [ user ])

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  if (notification == null) return <></>
  return (
    <>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifikasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              notification.map((notif, idx) => {
                const icon = (
                  (notif.category == "done") ? MdDone : (
                    (notif.category == "done all") ? MdDoneAll : (
                      (notif.category == "chosen") ? ImPointRight : (
                        (notif.category == "hired") ? FaRegHandshake : (
                          (notif.category == "rejected") ? MdClose : (
                            (notif.category == "important") ? 
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
                    _hover={{ bgColor: (isDark ? "#1D2330" : "gray.50") }} 
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
