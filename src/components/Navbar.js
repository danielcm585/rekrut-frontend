import React from "react"
import { IoChevronDown } from "react-icons/io5"
import { BiBell, BiLogOut, BiUser, BiEdit, BiHistory } from "react-icons/bi"

import { useDisclosure } from "@chakra-ui/react";
import { Button, Flex, HStack, Spacer, Text, Image, Link } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react"
import { PasswordForm } from "./profile";

export default function Navbar({ login, register }) {
  // TODO: Get user from localStorage
  // const user = null
  const user = {
    id: 3,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    email: "luke.skywalker@gmail.com",
    role: "worker",
    category: "Web Developer"
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex w="100%" as="header" position="fixed">
        <Flex p="3" w="100%" justifyContent="center">
          <HStack w="85%">
            <Link href="/dashboard">
              <Text fontSize="2xl" fontWeight="bold">Rekrut.id</Text>
            </Link>
            <Spacer></Spacer>
            {
              (user != null) ? (
                <>
                  <PasswordForm isOpen={isOpen} onClose={onClose} user={user} />
                  <Menu>
                    <MenuButton as={Button} variant="ghost" borderRadius="50" rightIcon={<IoChevronDown />}>
                      <HStack>
                        <Image src={user.photo} h="7" borderRadius="full" />
                        <Text fontSize="1xl" fontWeight="semibold">{user.name}</Text>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem icon={<BiUser />} onClick={() => window.location.href="/profile/me"}>Profil Saya</MenuItem>
                      <MenuItem icon={<BiBell />}>Notifikasi</MenuItem> {/*TODO: Add onClick func */}
                      <MenuItem icon={<BiHistory />}>Riwayat</MenuItem> {/*TODO: Add onClick func */}
                      <MenuDivider />
                      <MenuItem icon={<BiEdit />} onClick={() => onOpen()}>Ganti Password</MenuItem> {/*TODO: Add onClick func */}
                      <MenuItem icon={<BiLogOut />}>Keluar</MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Flex>
                    <Link href="/login">
                      <Text color={login ? "#FF8450" : "black"} as={login && "ins"}>
                        Masuk
                      </Text>
                    </Link>
                  </Flex>
                  <Flex pl="8">
                    <Link href="/register">
                      <Text color={register ? "#FF8450" : "black"} as={register && "ins"}>
                        Daftar
                      </Text>
                    </Link>
                  </Flex>
                </>
              )
            }
          </HStack>
        </Flex>
      </Flex>
    </>
  )
}
