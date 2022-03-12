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

  // TODO: Fetch notification from api
  // const notifications = [
  //   // Client
  //   {
  //     title: "Hei! Ada pekerja yang baru saja mendaftar sebagai Web Developer.",
  //     link: "/job/3",
  //     type: "important",
  //     read: false
  //   },
  //   {
  //     title: "Hore! Anda berhasil merekrut Din Djarin sebagai Web Developer.",
  //     link: "/job/2",
  //     type: "hired",
  //     read: false
  //   },
  //   {
  //     title: "Pekerjaan Din Djarin sebagai Web Developer telah selesai. Silakan periksa kembali!",
  //     link: "/job/2",
  //     type: "done",
  //     read: false
  //   },
  //   {
  //     title: "Kerja sama anda dengan Din Djarin sebagai Web Developer telah selesai. Berikan review andas!",
  //     link: "/job/2",
  //     type: "done all",
  //     read: true
  //   },
  //   // Worker
  //   {
  //     title: "Hei! Anda mendapatkan undangan untuk melamar sebagai Web Developer di TokoLapak. Silakan melamar!",
  //     link: "/job/3",
  //     type: "important",
  //     read: true
  //   },
  //   {
  //     title: "Hore! Anda dipilih sebagai Frontend Engineer di BukaPedia. Segera lakukan konfirmasi!",
  //     link: "/job/2",
  //     type: "chosen",
  //     read: true
  //   },
  //   {
  //     title: "Anda belum terpilih menjadi Backend Engineer di BukaPedia. Jangan patah semangat ya!",
  //     link: "/job/1",
  //     type: "rejected",
  //     read: true
  //   },
  //   {
  //     title: "Pekerjaan anda sebagai Web Developer di TokoLapak telah selesai. Berikan review anda!",
  //     link: "/job/3",
  //     type: "done all",
  //     read: true
  //   },
  //   {
  //     title: "Anda memperoleh 1 review baru.",
  //     link: "/profile/1",
  //     read: true
  //   },
  // ]

  return (
    <>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifikasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              user.notif.map((notif, idx) => {
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
                  <>
                    <Box p="2" mb="1" shadow="md" borderRadius="md" 
                      _hover={{ bgColor: "gray.50" }} 
                      onClick={() => window.location.href=notif.link}>
                      <HStack pl="2">
                        <Icon boxSize="5" as={icon} />
                        <Text pl="2">{notif.title}</Text>
                        {
                          (!notif.read) && 
                            <Badge size="xs" colorScheme="red">Baru</Badge>
                        }
                      </HStack>
                    </Box>
                  </>
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
