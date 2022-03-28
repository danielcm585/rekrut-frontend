import React from "react"

import { IoChevronDown } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaSun, FaMoon } from "react-icons/fa"
import { BiBell, BiLogOut, BiUser, BiEdit, BiStar, BiDetail, BiLogIn, BiReceipt } from "react-icons/bi"

import { Notification } from "./";
import { PasswordForm } from "./profile";
import { Star } from "./review";

import { useDisclosure, useToast, useMediaQuery, useColorMode } from "@chakra-ui/react";
import { Avatar, Button, Flex, HStack, Spacer, Text, Link, Badge, IconButton, Divider, Box } from "@chakra-ui/react"
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react"

export default function Navbar({ login, register }) {
  const user = JSON.parse(localStorage.getItem("user"))

  const { 
    isOpen: isPasswordOpen, 
    onOpen: onPasswordOpen, 
    onClose: onPasswordClose
  } = useDisclosure()
  
  const { 
    isOpen: isNotificationOpen, 
    onOpen: onNotificationOpen, 
    onClose: onNotificationClose
  } = useDisclosure()

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleNotification = () => {
    fetch("https://protected-castle-75235.herokuapp.com/notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ })
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
    onNotificationOpen()
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    fetch("https://protected-castle-75235.herokuapp.com/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    window.location.href="/dashboard"
  }

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  return (
    <>
      <Flex w="100%">
        <Flex p="3" w="100%" justifyContent="center">
          <HStack w={isBigScreen ? "85%" : "90%"}>
            {
              !isBigScreen && (
                <>
                  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader borderBottomWidth="1px">
                        <Flex>
                          {
                            (user != null) ? (
                              <>
                                <Avatar mt="1" src={user.profPic} h="20" w="20" /> 
                                {
                                  (user.rating == null) ? (
                                    <Text ml="3" mt="6">
                                      {user.name}
                                    </Text>
                                  ) : (
                                    <Box ml="3" mt="3">
                                      <Text>{user.name}</Text>
                                      <Star rating={user.rating} />
                                    </Box>
                                  )
                                }
                              </>
                            ) : (
                              <>
                                <Avatar mt="1" src="null" h="20" w="20" />
                                <Text ml="3" mt="6">
                                  Masuk / Daftar
                                </Text>
                              </>
                            )
                          }
                        </Flex>
                      </DrawerHeader>
                      <DrawerBody>
                        {
                          (user == null) ? (
                            <>
                              <Button justifyContent="left" mt="2" variant="ghost" w="100%" leftIcon={<BiReceipt />}
                                onClick={() => window.location.href="/register"}>
                                Daftar
                              </Button>
                              <Button justifyContent="left" mt="1" variant="ghost" w="100%" leftIcon={<BiLogIn />}
                                onClick={() => window.location.href="/login"}>
                                Masuk
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button justifyContent="left" mt="2" variant="ghost" w="100%" leftIcon={<BiUser />}
                                onClick={() => window.location.href="/profile/me"}>
                                Profil Saya
                              </Button>
                              <Button justifyContent="left" mt="1" variant="ghost" w="100%" leftIcon={<BiBell />}
                                onClick={handleNotification}>
                                <HStack spacing="1">
                                  <Text>Notifikasi</Text>
                                  {
                                    (user.notif != null && user.notif.filter(notif => !notif.read).length > 0) && 
                                      <Badge size="xs" colorScheme="red">Baru</Badge>
                                  }
                                </HStack>
                              </Button>
                              <Button justifyContent="left" mt="1" variant="ghost" w="100%" leftIcon={<BiStar />}
                                onClick={() => window.location.href="/profile/"+user._id}>
                                Ulasan
                              </Button>
                              <Button justifyContent="left" mt="1" variant="ghost" w="100%" leftIcon={<BiDetail />}
                                onClick={() => window.location.href="/terms"}>
                                Syarat & Ketentuan
                              </Button>
                              <Divider mt="1" />
                              <Button justifyContent="left" mt="1" variant="ghost" w="100%" leftIcon={<BiEdit />}
                                onClick={() => onPasswordOpen()}>
                                Ganti Password
                              </Button>
                              <Button justifyContent="left" mt="1" variant="ghost" w="100%" leftIcon={<BiLogOut />}
                                onClick={handleLogout}>
                                Keluar
                              </Button>
                            </>
                          )
                        }
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                  <IconButton pt="1" variant="ghost" icon={<GiHamburgerMenu size="24" />} onClick={onOpen} />
                </>
              )
            }
            <Link href="/dashboard">
              <Text fontSize="2xl" fontWeight="bold">Rekrut.id</Text>
            </Link>
            <IconButton ml="5" icon={isDark ? <FaSun /> : <FaMoon />} isRound variant="ghost" onClick={toggleColorMode} />
            <Spacer></Spacer>
            {
              (user != null) ? (
                <>
                  <PasswordForm isOpen={isPasswordOpen} onClose={onPasswordClose} user={user} />
                  <Notification isOpen={isNotificationOpen} onClose={onNotificationClose} user={user} />
                  {
                    isBigScreen ? (
                      <Menu>
                        <MenuButton as={Button} variant="ghost" borderRadius="50" rightIcon={<IoChevronDown />}>
                          <HStack>
                            <Avatar src={user.profPic} h="7" w="7" />
                            <Text fontSize="1xl" fontWeight="semibold">{user.name}</Text>
                          </HStack>
                        </MenuButton>
                        <MenuList>
                          <MenuItem icon={<BiUser />} onClick={() => window.location.href="/profile/me"}>Profil Saya</MenuItem>
                          <MenuItem icon={<BiBell />} onClick={handleNotification}>
                            <HStack spacing="1">
                              <Text>Notifikasi</Text>
                              {
                                (user.notif != null && user.notif.filter(notif => !notif.read).length > 0) && 
                                  <Badge size="xs" colorScheme="red">Baru</Badge>
                              }
                            </HStack>
                          </MenuItem> 
                          <MenuItem icon={<BiStar />} onClick={() => window.location.href="/profile/"+user._id}>Ulasan</MenuItem>
                          <MenuItem icon={<BiDetail />} onClick={() => window.location.href="/terms"}>Syarat & Ketentuan</MenuItem>
                          <MenuDivider />
                          <MenuItem icon={<BiEdit />} onClick={() => onPasswordOpen()}>Ganti Password</MenuItem> 
                          <MenuItem icon={<BiLogOut />} onClick={handleLogout}>Keluar</MenuItem>
                        </MenuList>
                      </Menu>
                    ) : (
                      <HStack>
                        <Avatar src={user.profPic} h="7" w="7" />
                        <Text fontSize="1xl" fontWeight="semibold">{user.name}</Text>
                      </HStack>
                    )
                  }
                </>
              ) : (
                <>
                  {
                    isBigScreen && (
                      <>
                        <Flex>
                          <Link href="/register">
                            <Text color={register && "#FF8450"} as={register && "ins"}>Daftar</Text>
                          </Link>
                        </Flex>
                        <Flex pl="8">
                          <Link href="/login">
                            <Text color={login && "#FF8450"} as={login && "ins"}>Masuk</Text>
                          </Link>
                        </Flex>
                      </>
                    )
                  }
                </>
              )
            }
          </HStack>
        </Flex>
      </Flex>
    </>
  )
}
