import React from "react"
import { IoChevronDown } from "react-icons/io5"
import { BiLogOut, BiUser } from "react-icons/bi"

import { Button, Flex, HStack, Spacer, Text, Image, Link } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react"

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
                  <Menu>
                    <MenuButton as={Button} variant="ghost" rightIcon={<IoChevronDown />}>
                    <HStack>
                      <Image src={user.photo} h="7" borderRadius="full" />
                      <Text fontSize="1xl" fontWeight="semibold">{user.name}</Text>
                    </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem icon={<BiUser />} onClick={() => window.location.href="/profile/me"}>My Profile</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<BiLogOut />}>Logout</MenuItem>
                  </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Flex>
                    <Link href="/login">
                      <Text color={login ? "#FF8450" : "black"} as={login && "ins"}>
                        Login
                      </Text>
                    </Link>
                  </Flex>
                  <Flex pl="8">
                    <Link href="/register">
                      <Text color={register ? "#FF8450" : "black"} as={register && "ins"}>
                        Register
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
