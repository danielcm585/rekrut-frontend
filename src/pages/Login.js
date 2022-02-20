import React, { useState } from "react"

import { Navbar } from "../components"
import { LoginImg } from "../images"

import { Flex, Text, Input, Button, Link, HStack, Image } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react"

export default function Login() {
  const [ email, setEmail ] = useState()
  const handleEmailChanges = (e) => setEmail(e.target.value)
  const [ password, setPassword ] = useState()
  const handlePasswordChanges = (e) => setPassword(e.target.value)

  useState(() => {
    document.title = "Rekrut.id | Login"
  }, [])

  return (
    <>
      <Navbar login={true} />
      <Flex justifyContent="center">
        <Image mt="11%" mr="20" w="30%" src={LoginImg} />
        <Flex w="30%" p="10" mt="11%" direction="column">
          <Text fontSize="3xl" fontWeight="bold">Selamat datang kembali</Text>
          <Text mt="2" fontSize="1xl">Login untuk melanjutkan</Text>
          <FormControl mt="3">
            <FormLabel>
              <Text fontSize="1xl" fontWeight="bold">Email</Text>
            </FormLabel>           
            <Input type="email" placeholder="email@gmail.com" value={email}
              borderColor="black" onChange={handleEmailChanges} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>
              <Text fontSize="1xl" fontWeight="bold">Password</Text>
            </FormLabel>
            <Input type="password" placeholder="password" value={password} 
              borderColor="black" onChange={handlePasswordChanges} />
          </FormControl>
          <Button mt="8" borderRadius="50" borderColor="black" bgColor="#FF8450"
            onClick={() => {
              // TODO: Send request to api & get credentials
              window.location.href="/dashboard"
            }}>
              <Text fontSize="sm" fontWeight="bold">Login</Text>
            </Button>
          <Flex mt="7">
            <Text fontWeight="semibold">
              Belum memiliki akun? 
            </Text>
            <Link href="/register">
              <Text ml="2" fontWeight="semibold" color="#FF8450" as="ins">
                Buat Akun Baru
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
