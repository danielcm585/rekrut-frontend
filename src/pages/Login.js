import React, { useState } from "react"

import { Navbar, PasswordInput } from "../components"
import { LoginImg } from "../images"

import { useToast } from "@chakra-ui/react"
import { Flex, Text, Input, Button, Link, HStack, Image } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react"

export default function Login() {
  const [ email, setEmail ] = useState()
  const handleEmailChanges = (e) => setEmail(e.target.value)
  const [ password, setPassword ] = useState()

  useState(() => {
    document.title = "Rekrut.id | Login"
  }, [])

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

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
            <PasswordInput password={password} setPassword={setPassword} />
          </FormControl>
          <Button mt="8" borderRadius="50" bgColor="#FF8450"
            onClick={() => {
              fetch("https://protected-castle-75235.herokuapp.com/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              })
              .then(resp => resp.json())
              .then(json => {
                  if (json.statusCode >= 400) throw new Error(json.message)
                  window.location.href="/dashboard"
              })
              .catch((err) => {
                toast({
                  title: err.message,
                  status: "error"
                })
              })
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
